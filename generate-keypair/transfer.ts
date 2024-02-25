import { Connection, Transaction, SystemProgram, PublicKey, sendAndConfirmTransaction } from "@solana/web3.js"
import { getKeypairFromEnvironment } from "@solana-developers/helpers"
import dotenv from 'dotenv';
dotenv.config();

const suppliedToPubKey = process.argv[2] || null;

if(!suppliedToPubKey) {
    console.log("Please provide a public key to send to");
    process.exit(1);
}

const senderKeyPair = getKeypairFromEnvironment("SECRET_KEY");

console.log(`Supplied to pubkey ${suppliedToPubKey}`);

const toPubkey = new PublicKey(suppliedToPubKey);

const connection  = new Connection('https://api.devnet.solana.com' , 'confirmed');

console.log('Sender and supplied public key loaded and the conneected to solana');

const transaction = new Transaction();

const LAMPORTS_TO_SEND = 7000;

const sendSolInstruction = SystemProgram.transfer({
    fromPubkey: senderKeyPair.publicKey,
    toPubkey,
    lamports: LAMPORTS_TO_SEND
});

transaction.add(sendSolInstruction);

const signature = await sendAndConfirmTransaction(connection, transaction, [
    senderKeyPair,
])

console.log(`Finished! send ${LAMPORTS_TO_SEND} to the address ${toPubkey}`);

console.log(`Transaction signature is ${signature}`);



