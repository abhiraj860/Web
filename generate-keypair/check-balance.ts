import dotenv from 'dotenv';
dotenv.config();

import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { getKeypairFromEnvironment } from '@solana-developers/helpers';

const keyPair1 = getKeypairFromEnvironment("SECRET_KEY");
const publicKey1 = keyPair1.publicKey;

const keyPair2 = getKeypairFromEnvironment("SECRET_KEY_2");
const publicKey2 = keyPair2.publicKey;

try {
    const publicKey = publicKey1;
    if(PublicKey.isOnCurve(publicKey)) {
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

        const balanceInLamports = await connection.getBalance(publicKey);

        const balanceInSol = balanceInLamports / LAMPORTS_PER_SOL;

        console.log(`The balance for the wallet at address ${publicKey} is ${balanceInSol}`);

    } else {
        console.log('The public address is invalid');
    }

} catch (error) {
    console.log("Invalid");
}



