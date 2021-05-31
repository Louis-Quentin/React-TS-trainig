import "./Style/app.css";
import axios from 'axios';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { AddressProperties } from "./type";
import { DisplayData } from "./dataGrid";

function App() {
    const [arraySize, setArraySize] = useState<any>(10);
    const [response, setResponse] = useState<AddressProperties | undefined>();
    const [address, setAddress] = useState<string>('');

    async function getRoute() {
        try {
            const res = await axios.post<AddressProperties>("http://localhost:8080/",
                { search: address })
            if (res.status != 400) {
                setResponse(res.data);
            }
        } catch (e) {
            console.log(e.message);
        }
    }

    return (
        <>
            <div id={"searchWidth"}>
                <p>Bitcoin Historical Balances</p>
                <form>
                    <input
                        className="button"
                        type='text'
                        placeholder='Address'
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />
                </form>
                <form>
                    <input                        className="button"
                        type='number'
                        placeholder='Number of transactions'
                        value={arraySize}
                        onChange={e => setArraySize(e.target.value)}
                    />
                </form>
                <Button className="button" onClick={getRoute} variant="contained" color="primary">Search</Button>
            </div>
            {response && <DisplayData addressProperties={response} arraySize={arraySize}/>}
        </>
    );
}

export default App
