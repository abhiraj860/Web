import dotenv from 'dotenv';
dotenv.config();

import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const keypair = getKeypairFromEnvironment("SECRET_KEY");
console.log("Public key for USER A: " + keypair.publicKey.toBase58());

const keyPair = getKeypairFromEnvironment("SECRET_KEY_2");
console.log("Public key for USER B: ", keyPair.publicKey.toBase58());

console.log("Finished getting the keys");
