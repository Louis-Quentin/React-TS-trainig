interface InfoAccount {
    final_balance: number;
    time: number;
    balance: number;
    address: string;
}

function printInfoAccount(InfoAccount) {
    console.log(InfoAccount);
}

function MoveToString(InfoAccount) {
    return JSON.stringify(InfoAccount);
}

export function parser(body: any) {
    let one = JSON.parse(body);

    let Info = {
        final_balance: one.final_balance,
        time: one.txs.map((tx) => tx.time),
        balance: one.txs.map((tx) => tx.balance),
        address: one.address,
    };

    printInfoAccount(Info);

    let NewJSON = MoveToString(Info);
    console.log(NewJSON);
    return NewJSON;
}