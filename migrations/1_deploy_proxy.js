const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const Box = artifacts.require('Box');

module.exports = async function (deployer) {
  const boxProxy = await deployProxy(Box, [42], { deployer, initializer: "initialize" });
  console.log('Box Proxy deployed to: ', boxProxy.address);
};