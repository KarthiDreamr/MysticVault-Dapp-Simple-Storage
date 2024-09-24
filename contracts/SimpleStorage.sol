// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

contract SimpleStorage {
    string private data;

    // Function to set the secret spell
    function setSecretSpell(string memory _data) public {
        data = _data;
    }

    // Function to get the secret spell
    function getSecretSpell() public view returns (string memory) {
        return data;
    }
}