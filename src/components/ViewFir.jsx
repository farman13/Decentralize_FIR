import { useParams } from "react-router-dom";
import { useState } from "react";
import Table from 'react-bootstrap/Table';
const View=({contract})=>{
    const[fir,setfir] = useState(null);
    const[n,setn]=useState(0);
    const {id}=useParams()
    const numId = Number(id)
    const init=async()=>{
    const arr =  await contract.complaints(numId);
    setfir(arr);
    setn(1);
    }

    if(n==0){
    init();
    console.log(contract);
}
    
async function solvedapproved(event) {
    event.preventDefault();
    try{
        const Sremark=document.querySelector("#Sremark").value;
        await contract.casesolved(numId,Sremark);
    }
    catch(error){
   console.log(error);
}
}

    async function approved(event) {
        event.preventDefault();
        try{
            const remark=document.querySelector("#remark").value;
            await contract.approvedcomplaint(numId,remark);
        }
        catch(error){
    console.log(error);
        }
    }
    async function declined(event) {
        event.preventDefault();
        try{
            const Dremark=document.querySelector("#Dremark").value;
            await contract.declinedcomplaint(numId,Dremark);
        }
        catch(error){
    console.log(error);
        }
    }
    return(
        <>
        <h1>View FIR</h1>
        {fir&&(
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th colSpan={2}>Complaint Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Complaint Id:</td>
          <td>{(fir.id).toString()}</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Complaint by:</td>
          <td>{(fir.name).toString()}</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Complaint Title:</td>
          <td>{fir.title}</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Complaint Description:</td>
          <td>{fir.description}</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Approval Status:</td>
          <td>{fir.isapproved ? "Approved" : !fir.isexits ? "Declined" : "Approval Pending"}</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Approval Remark:</td>
          <td>{fir.approvalremark}</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Resolution Status:</td>
          <td>{fir.isresolved ? "Resolved" : "Resolution pending"}</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Resolution Remark:</td>
          <td>{fir.resolution_remark}</td>
        </tr>
        </tbody>
    </Table>
       )}

    {fir && fir.isapproved==false && fir.isexits==true &&(
        
        <>
        <div className="mb-3">
        Approval Remark: <input type="text" id="remark" placeholder="Approval remark" ></input> &nbsp;
        <button onClick={approved} type="submit" className="btn btn-success me-3">Approved</button>
        </div> 
        Declined Remarks:<input type="text" id="Dremark" placeholder="Declined remark"></input> &nbsp;
        <button onClick={declined} type="submit" className="btn btn-danger">Declined</button>
</>

    )}
    {fir && fir.isapproved==true && fir.isresolved==false &&(
    
    <>
    Resolved Remarks:<input type="text" id="Sremark" placeholder="Resolved remark"></input> &nbsp;
    <button onClick={solvedapproved} type="submit" className="btn btn-success" >Resolved</button>

</>

)}
        </>
    )
}
export default View;
