require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  // networks: {
  //   hardhat: {
  //     chainId: 1337
  //   },
  // }
  networks: {
    rinkeby: {
        url: "https://eth-rinkeby.alchemyapi.io/v2/jQ_Q6VUBQNGBQh6nNgOq6VYunG3MD0Za",
        accounts: ['999f9be112229968d7802119d9ee66bd05fb7b2d3ffc4a42dd5e80615e354268'],
    },
  }, 
};
