require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace person bone tooth figure render remain hour gesture pet symptom sell'; 
let testAccounts = [
"0xb27ad1a6c1f5ab70a4dde1712d56599a6acbd831f9ae40952e3928cee5fbe66a",
"0x3529a3a44a32843893bcf3dd5ca91ad271b5c3cd14d87c9ff3bdadd3892a8577",
"0x78b62451114ca25d60c6d75709632a29103b101952921380819cf8675666e45f",
"0x343808fe735c39be322821d62a261f1c3679ea41d33709086371efe8f7e2a46a",
"0x815e8f934eaaa11044713815b8c4089de1093222fa1dd92ef78cc36e6c41646f",
"0x08ceed89cf71a7a0d831bde0475888a43f0ee7bef96522f6b77ded6cfac7ffcc",
"0xdd2673d0bc57b8c02f8154f1b8e1258df745bdb39c817ff000eb5b2ab08c7b58",
"0x5034e43c7e162d5fe91cf81b486e54a61e9665ab3eb0471c8e04472d2a89e407",
"0x0c9f0e85aa9cdd585ff3c31431e3244011c7141bd71fd192f7d8c046a136d1cb",
"0x210be94d908d4fc5a61cdbf4ff5abbee374577e3cd8910307bd7eb648cd39130"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

