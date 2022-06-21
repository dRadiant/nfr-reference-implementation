const { expect } = require("chai");
const { ethers } = require("hardhat");

const numGenerations = 5;

const percentOfProfit = ethers.utils.parseUnits("0.16");

const successiveRatio = ethers.utils.parseUnits("1.19");

let ownerAmount = 0;

let paymentsReceived = {};

let tokenId = 1;

describe("nFR Implementation", function () {
  it("Should go through an FR cycle of 5 generations successfully", async function () {
  	const [owner, buyer1, buyer2, buyer3, buyer4] = await ethers.getSigners();

  	const NFR = await ethers.getContractFactory("MyNFT");
  	const nfr = await NFR.deploy();

  	await nfr.deployed();

  	await nfr.mintNFT(owner.address, numGenerations, percentOfProfit, successiveRatio, "");

  	console.log(await nfr.callStatic.retrieveFRInfo(tokenId));
  });
});