require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); // to read .env

module.exports = {
  solidity: "0.8.28",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
    },
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL || "",
      accounts: process.env.DEPLOYER_PRIVATE_KEY && process.env.BUYER_PRIVATE_KEY && process.env.SELLER_PRIVATE_KEY ? 
        [process.env.DEPLOYER_PRIVATE_KEY, process.env.BUYER_PRIVATE_KEY, process.env.SELLER_PRIVATE_KEY] : [],
      chainId: 11155111,
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};