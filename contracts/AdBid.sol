// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.9.0;

contract AdBid {
        address public  owner;
        uint public price;
        address public tempOwner;
        string cid = "";

        constructor () {
                owner = msg.sender;
                tempOwner = msg.sender;
                cid="QmNVd1EsekeXHToLubDNjRLuYBaGVDWCQ32p7vgP6BbJLD";
                price=100 wei;
        }
        modifier onlyTempOwner {
                require(msg.sender == tempOwner);
                _;
        }
        function bid() external payable {
                uint value = msg.value;
                require(value>=(price+100 wei));
                price=value;
                tempOwner = msg.sender;
        }
        function setCid(string memory _newcid) external onlyTempOwner{
                cid = _newcid;
        }
        function getCid() external view returns (string memory){
                        return cid;
                }
}
