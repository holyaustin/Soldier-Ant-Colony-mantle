require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
   
    // for testnet
    testnet: {
      url: "https://rpc.testnet.mantle.xyz/",
      accounts: [process.env.PRIVATE_KEY],
      // allowUnlimitedContractSize: true
    },

    mantle: {
      url: "https://rpc.testnet.mantle.xyz/", 
      chainId: 5001,
      accounts: [process.env.PRIVATE_KEY],
    },

  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
