import { useState } from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import Register from './components/Register';
import SearchFir from './components/SearchFir';
import Home from './components/Home';
import View from './components/ViewFir';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import {ethers} from 'ethers';
import abi from './assets/abi.json';
import images from './assets/images.jpeg'
import './App.css'

function App() {
  const [Account, setAccount] = useState("No account Connected");
  const [Contract, setContract] = useState(null);
  const[connected,setConnected]=useState(true);
  const[fir,setfir] = useState(null);
  const[nextid,setnextid]=useState();
    const provider = new ethers.providers.Web3Provider(window.ethereum)

    const loadProvider = async () => {
      
      try{
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        let contractAddress = "0x2F7850e9792bb8E69544993CB392fb84E1d1A60D";
        setConnected(false);
        const contract = new ethers.Contract(contractAddress,abi,signer);
        console.log(contract);
        setAccount(address);
        setContract(contract);
        console.log(Contract);
        const nextId=await contract.nextid();
        const Nextid=Number(nextId)
        console.log("hi")
        setnextid(Nextid);
        console.log("k",Nextid)
        const AllFIR = await contract.allFir();
console.log(AllFIR.length);
setfir(AllFIR);
      } catch(error){
        console.error("Metamask is not installed");
      }
    };

  return (
    <>
       <BrowserRouter>
          <Navbar bg="dark" data-bs-theme="dark" className="shadow-sm py-3">
        <Container>
        <Navbar.Brand className="fs-4 text-white">
            <img
              alt="D-FIR Icon"
              src={images} // Replace with your D-FIR icon image path
              width="40"
              height="40"
              className="d-inline-block align-top me-2"
            />{' '}
            D-FIR
          </Navbar.Brand>
          <Nav className="mx-auto fs-5">
          <Nav.Link as={Link} to="/" className="text-light">Home</Nav.Link>
            <Nav.Link as={Link} to="/Register" className="text-light">Register Complaint</Nav.Link>
            <Nav.Link as={Link} to="/SearchFir" className="text-light">See FIRs</Nav.Link>
            {/* <Navigation/> */}
          </Nav>
            <button className="btn btn-primary connectBTN fs-5 rounded-pill" onClick={loadProvider} disabled={!connected}>{connected?"Connect Metamask":"Connected"}</button>
           
        </Container>
      </Navbar>
    
     <Routes>
     <Route path='/' element={<Home fir={fir} />} />
         <Route path='/Register' element={<Register contract={Contract} />} />
         <Route path='/SearchFir' element={<SearchFir contract={Contract}/>} />
         <Route path='/viewFir/:id' element={<View contract={Contract}/>} />
     </Routes>
     {/* '/events/:id',element:<EventDetails/> */}
     </BrowserRouter>
    
    </>
  )
}

export default App

