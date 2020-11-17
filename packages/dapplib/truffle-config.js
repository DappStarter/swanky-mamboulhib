require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict roast fortune street name repeat mad proof hunt problem borrow sport'; 
let testAccounts = [
"0x038370b7e7e49032f6341294b83249fe444de47be895eff3f8a4a6dd4536b7c6",
"0x0e427ac31b662199addcd74df6fdbd6f588ad5fc791421a2f76480753ebd620b",
"0xa44ce7edbfb67890ceda8ab431ab717b5866415ba6e643826b734226099eb32c",
"0x3edf529d592f1aeffaf627a6bc672438b46ef37f8ef754953351ec345f48eb44",
"0x7ef3d67cbbf1397df16d001fa636bc3f9b9b0c85391a11f2b75a2768563d9774",
"0x202c7443eabc80b50caf5b2be9a93584641eb3f137e7dd3b9d201ece6a760c18",
"0xa95df60bb62788919d4feedc99f7ff88edb3a86c86f67a2374097676702e1121",
"0xa95c28893ef57eaf7778f327ad474f5ce92e03070719a8d5ba92dccc6eecc2c4",
"0xf6717ac345798ae2c63712ce39475f11b67ac19d7b8c31ea4e5d7e9fe7a11172",
"0xae101d0bce951ebd1cccdd09549b7fdbc7c82dfc34c2ec01fb22671ce8b20950"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
