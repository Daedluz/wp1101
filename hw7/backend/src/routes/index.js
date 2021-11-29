// Define Express/Router middleware
import express from "express";
import clear from './api/clear';
import add from './api/add';
import query from './api/query';

const router = express.Router();

router.delete('/clear-db', (req, res) => {
    clear(req, res);
});

router.post('/create-card', (req, res) => {
    try {
        add(req, res);
    }
    catch (e){
        console.log(e)
    }
    
});

router.get('/query-cards', (req, res) => {
    try {
        query(req, res);
    }
    catch (e) { console.log(e); }
})

router.get('/', (req, res) => res.send("Hello world!"));

export default router