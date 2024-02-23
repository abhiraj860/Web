import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from "@solana/web3.js";

try {
    const publicKey = new PublicKey("BMZCLCod4aKohTSHsNw4hdEZ6vjyJbzMRsyY7nHRxiDe");
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



