import * as dbHandler from '../utils/databaseHandler.js'

/* 
    SELECT * FROM ram_tz WHERE tz002='KEVIN' 
*/
export const Select = (req,res) => 
{
    console.log("Request : ",req.body);
    const {query} = req.body;
    //let ris = dbHandler.Select();
    let ris = dbHandler.Select(query);
    console.log("Sending "+ris.length+" records ...");
    let stringRes = "[";
    for(let i in ris)
    {
        if(i<ris.length-1)
            stringRes+=JSON.stringify(ris[i],null,4)+",";
        else
            stringRes+=JSON.stringify(ris[i],null,4);
    }
    stringRes+="]";
    res.status(200).send(stringRes);
    console.log("Sent");
}

/*
    ram_tz
    {
        tz001 : "rs",
        tz002 : "KEVIN",
        tz003 : "666",
        tz004 : "test1",
        tz011 : "RANDOM TEST 1"
    }
*/

export const Insert = (req,res) => 
{
    console.log("Request : ",req.body);
    const {obj,table} = req.body; 
    let ris = dbHandler.Insert(obj,table);
    console.log(ris);
    res.send(ris);
}

/*  
    ram_tz
    {
        tz001 : "rs",
        tz002  : "KEVIN",
        tz003 : "666",
        tz004 : "test1"
    }
*/

export const Delete = (req,res) => 
{
    console.log("Request : ",req.body);
    const {obj,table} = req.body; 
    let ris = dbHandler.Delete(obj,table);
    console.log(ris);
    res.send(ris);
}

export const Update = (req,res) => 
{
    console.log("Request : ",req.body);
    const {obj,primary,table} = req.body; 
    let ris = dbHandler.Update(obj,primary,table);
    console.log(ris);
    res.send(ris);
}