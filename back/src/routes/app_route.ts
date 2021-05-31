import express from 'express';
import { getTransactionInfo } from "../requests/requests";
import handler from 'express-async-handler';

const router = express.Router();

let btc_address = '';

router.get('/', (_, res) => {
    res.send('basic');
});
router.post('/', handler(async (req, res) => {
    btc_address = req.body.search;
    if (!btc_address) {
        res.status(400).send("body sucks");
        return;
    }
    const data = await getTransactionInfo(btc_address);
    if (!data) {
        res.status(400).send("address sucks");
        return;
    }
    res.send(data);
}));
export { router };
