export interface Addresses {
    address: string;
}

export interface Info {
    latest_block: {hash: string, height: number, time: number};
    symbol_btc: {code: string, symbol: string, name: string};
}

export interface Wallet {
    final_balance: number;
    total_received: number;
    total_sent: number;
}

export interface Txs {
    hash: string;
    block_height: number;
    time: number;
    balance: number;
}

export interface AddressProperties {
    addresses: Addresses[];
    info: Info[];
    txs: Txs[];
    wallet: Wallet;
}