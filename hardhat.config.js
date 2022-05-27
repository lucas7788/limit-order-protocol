require('@nomiclabs/hardhat-etherscan');
require('@nomiclabs/hardhat-truffle5');
require('solidity-coverage');
require('hardhat-deploy');
require('hardhat-gas-reporter');
require('dotenv').config();
require('@nomiclabs/hardhat-waffle');

const {
    polygonApiKey,
    ownerPrivateKey,
    avaxApiKey,
    fantomApiKey,
    privateKey,
    privateKey2,
    address,
    privateKeyTest,
} = require('./secrets.json');

module.exports = {
    solidity: {
        version: '0.8.10',
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
    etherscan: {
        // Your API key for Etherscan
        // Obtain one at https://bscscan.com/
        //bsc  QQQ3E4UT98E7V6AAFRPEMYD21M1VG4HNHY
        //bsc_test   d87255a6627542eba4eaa9d5278832e0
        //QQQ3E4UT98E7V6AAFRPEMYD21M1VG4HNHY
        apiKey: polygonApiKey,
    },
    networks: {
        polygon_mainnet: {
            url: 'https://rpc-mainnet.maticvigil.com',
            chainId: 137,
            timeout: 10000000,
            accounts: [privateKey, privateKey2],
        },
        avax_mainnet: {
            url: 'https://api.avax.network/ext/bc/C/rpc',
            chainId: 43114,
            timeout: 10000000,
            accounts: [privateKey, privateKey2],
        },
        fantom_mainnet: {
            url: 'https://rpc.ftm.tools/',
            chainId: 250,
            timeout: 10000000,
            accounts: [privateKey, privateKey2],
        },
        eth_mainnet: {
            url: 'https://mainnet.infura.io/v3/d87255a6627542eba4eaa9d5278832e0',
            chainId: 250,
            timeout: 10000000,
            accounts: [privateKey, privateKey2],
        },
        bsc: {
            url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
            chainId: 97,
            gas: 2000000,
            timeout: 10000000,
            accounts: [privateKeyTest],
        },
        bsc_mainnet: {
            url: 'https://bsc-dataseed.binance.org/',
            chainId: 56,
            timeout: 10000000,
            accounts: [privateKey, ownerPrivateKey],
        },
    },
};
