
// SPDX-License-Identifier: BSD-3-Clause-Clear

pragma solidity 0.8.19;

import "fhevm/lib/TFHE.sol";
import "hardhat/console.sol";

contract Decrypt {
    euint32 public testValue;
    uint32 public reveal;

    function store(bytes calldata encryptedValue) public {
        testValue = TFHE.asEuint32(encryptedValue);
    }

    function decryptStore() public {
        reveal = decrypt();
    }

    function decryptView() public view returns (uint32) {
        return decrypt();
    }

    function decrypt() private view returns (uint32) {
        return TFHE.decrypt(testValue);
    }
}