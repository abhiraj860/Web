import dotenv from "dotenv";
dotenv.config();
import * as web3 from "@solana/web3.js";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const senderId = getKeypairFromEnvironment("SECRET_KEY");
const receiverId = getKeypairFromEnvironment("SECRET_KEY_2").publicKey;
const connection = new web3.Connection("https://api.devnet.solana.com" ,"confirmed");

const transaction = new web3.Transaction();

const LAMPORT_TO_SEND = 100000;

const instruction = web3.SystemProgram.transfer({
    fromPubkey: senderId.publicKey,
    toPubkey: receiverId,
    lamports: LAMPORT_TO_SEND 
});

transaction.add(instruction);

const signature = await web3.sendAndConfirmTransaction(connection, transaction, [senderId]); 

console.log(`The signature for the transfer to PING program is ${signature}`);

console.log('Transaction is completed');