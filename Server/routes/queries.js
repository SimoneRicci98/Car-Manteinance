import express from 'express';

import {Select,Insert,Delete,Update} from '../controllers/queries.js';

const router = express.Router();

router.get("/",(req,res) => 
{
    res.send("Nessuna Pagina");
});

router.post("/Select",Select);
router.post("/Insert",Insert);
router.post("/Delete",Delete);
router.post("/Update",Update);

export default router;