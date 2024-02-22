import dotenv from 'dotenv';
dotenv.config();

import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const keypair = getKeypairFromEnvironment("SECRET_KEY");
console.log(keypair.publicKey.toBase58);
console.log(keypair.secretKey);
console.log("Finished");