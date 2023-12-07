// const hre = require("hardhat");
const fs = require('fs');

const main = async() => {
  const contractFactory = await ethers.getContractFactory('Escrow');
  console.log("About to deploy contract to INCO ");
  const contract = await contractFactory.deploy(5,5,3);
  await contract.deployed();
  console.log("Escrow Contract deployed to: ", contract.address);

  fs.writeFileSync('./config3.js', `
  export const Escrow = "${contract.address}"
`);
}

const runMain = async() => {
  try {
    await main();
    process.exit(0);
  } catch(error) {
    console.log(error);
    process.exit(1);
  }
}

runMain();
