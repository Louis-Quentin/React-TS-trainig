import axios from 'axios'

export async function getTransactionInfo(btc_address: string): Promise<string | null> {
    const url: string = 'https://blockchain.info/multiaddr?active=' + btc_address;
    try {
        const response = await axios.post<string>(url);
        return response.data;
    } catch(e) {
        console.log(e.message);
        console.log(e.status);
        return null;
    }
}
