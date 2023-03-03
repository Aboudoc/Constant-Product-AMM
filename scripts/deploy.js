const { ethers } = require("hardhat");
const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const UniswapV2Twap = await ethers.getContractFactory("UniswapV2Twap");
  const uniswapV2Twap = await UniswapV2Twap.deploy(process.env.PAIR);

  await uniswapV2Twap.deployed();

  console.log(`UniswapV2Twap deployed to: ${uniswapV2Twap.address}`);

  console.log("---------------------------------------");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
