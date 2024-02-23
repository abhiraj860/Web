import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const publicKey = new PublicKey("BMZCLCod4aKohTSHsNw4hdEZ6vjyJbzMRsyY7nHRxiDe");

const connection = new Connection('https://api.devnet.solana.com', 'confirmed');

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSol = balanceInLamports / LAMPORTS_PER_SOL;

console.log(`The balance for the wallet at address ${publicKey} is ${balanceInSol}`);