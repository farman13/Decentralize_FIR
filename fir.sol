// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0<0.9.0;
contract FIR{
   // address public officier;  no need to add in contract 
    address public owner;
    uint256 public nextid;
uint256[]  pendingapprovals;

    constructor(){
        owner=msg.sender;
        nextid =1001;
    }

    
   
    struct complaint{
        uint id;
        address user;
        string name;
        string title;
        string description;
        string approvalremark;   
        string resolution_remark;    
        bool isapproved;
        bool isresolved;
        bool isexits;
    }

    struct Scomplaint{
        uint id;
        string name;
        string title;
        bool isapproved;
        bool isresolved;
        bool isexits;
    }

    mapping(uint=>complaint) public complaints;
    Scomplaint[] public Fir;
    event complaintsfiles(
        uint id,
        address user,
        string title
    );
    function filecomplaint(string memory name ,string memory _title,string memory _description) public{
        complaint storage newcomplaint=complaints[nextid];
        newcomplaint.id=nextid;
        newcomplaint.user=msg.sender;
        newcomplaint.name = name;
        newcomplaint.title=_title;
        newcomplaint.description=_description;
        newcomplaint.approvalremark="pending";
        newcomplaint.resolution_remark="pending";
        newcomplaint.isapproved=false;
        newcomplaint.isresolved=false;
        newcomplaint.isexits=true;
        
        Fir.push(Scomplaint(nextid,name,_title,false,false,true));

        emit complaintsfiles(nextid,msg.sender,_title);
        nextid++;
    }
    function approvedcomplaint(uint _id,string memory _approvalremark) public {
        require(complaints[_id].isexits==true,"this complaint does not exits");
        require(complaints[_id].isapproved==false,"this is already approved");
        complaints[_id].isapproved=true;
        complaints[_id].approvalremark=_approvalremark;
        for(uint i=0;i<Fir.length;i++){
            if(Fir[i].id==_id){
                Fir[i].isapproved=true;
                break;
            }
        }
    }
    function declinedcomplaint(uint _id,string memory _approvalremark) public {
        require(complaints[_id].isexits==true,"this complaint does not exits");
        require(complaints[_id].isapproved==false,"this is already approved");
        complaints[_id].isexits=false;
        complaints[_id].approvalremark=_approvalremark;
        for(uint i=0;i<Fir.length;i++){
            if(Fir[i].id==_id){
                Fir[i].isexits=false;
                break;
            }
        }
    }
    function casesolved(uint _id,string memory _resolution_remark) public {
        require(complaints[_id].isexits==true,"this complaint does not exits");
        require(complaints[_id].isapproved==true,"this is not approved");
        require(complaints[_id].isresolved==false,"this complaint is resolved");
        complaints[_id].isresolved=true;
        complaints[_id].resolution_remark=_resolution_remark;
         for(uint i=0;i<Fir.length;i++){
            if(Fir[i].id==_id){
                Fir[i].isresolved=true;
                break;
            }
        }
    }
    
   function allFir() public view returns(Scomplaint[] memory){
     return Fir;
   }
   }