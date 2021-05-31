import * as React from 'react';
import { AddressProperties } from "./type";
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import { gridSettings } from "./Style/dataGridSettings";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

interface TxRowsI {
    Id: number;
    Hash: string;
    Block: number;
    Date: number;
    Value: number;
}

function fillData ({txs}: AddressProperties, arraySize: number)  {
    const TxArray: Array<TxRowsI> = txs.map((t, index) => ({
        Id: index,
        Hash: t.hash,
        Block: t.block_height,
        Date: t.time,
        Value: t.balance
    }));
    console.log(TxArray);
    return TxArray.slice(0, arraySize);
}

export const DisplayData = (props:{addressProperties:AddressProperties, arraySize:number}) => {
    const {addressProperties, arraySize}=props;
    const {addresses, info, txs, wallet}=addressProperties;


    const rowData: any = fillData({addresses, info, txs, wallet}, arraySize);

    return (
        <div id="gridSettings" className="ag-theme-alpine" style={gridSettings}>
            <AgGridReact
                rowData={rowData}>
                <AgGridColumn field="Id"/>
                <AgGridColumn minWidth={600} field="Hash"/>
                <AgGridColumn field="Block"/>
                <AgGridColumn field="Date"/>
                <AgGridColumn field="Value"/>
            </AgGridReact>
        </div>
    );
};