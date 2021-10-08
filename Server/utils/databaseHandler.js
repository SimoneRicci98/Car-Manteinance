import db from 'ibm_db';
var connStr = "DATABASE=PROVA115;HOSTNAME=192.168.0.234;UID=netram2;PWD=prova;PORT=50055;PROTOCOL=TCPIP";


export const Select = (query) => 
{
    console.log("Query : ",query);
    return Query(query);
}


export const Insert = (obj,tablename) => 
{
    let keyNames = Object.keys(obj);
    let keys = "";
    let values = "";

    keyNames.forEach(key => 
    {
        keys = keys+key+",";
        isNaN(obj[key]) ? values+="'"+obj[key]+"'," : values+=obj[key]+",";

    }); 

    keys = keys.slice(0,-1);
    values = values.slice(0,-1);
    const query = "INSERT INTO "+tablename+" ("+keys+") VALUES ("+values+")";

    console.log("INSERT : ",query);
    return Query(query);
}


export const Delete = (obj,tablename) => 
{
    let keyNames = Object.keys(obj);
    let keys = [];
    let values = [];
    let query = "DELETE FROM "+tablename+" WHERE 1=1";

    keyNames.forEach(key => 
    {
        keys = [...keys,key];
        values = [...values, isNaN(obj[key]) ? "'"+obj[key]+"'" : obj[key]];
    }); 

    for(let i in keys)
    {
        query+=" AND "+keys[i]+"="+values[i];
    }

    console.log("DELETE : ",query);
    return Query(query);
}

export const Update = (obj,primary,tablename) => 
{
    
    let keys = [];
    let values = [];
    let query = "UPDATE "+tablename+" SET ";

    let keyNames = Object.keys(obj);
    keyNames.forEach(key => 
    {
        keys = [...keys,key];
        values = [...values, isNaN(obj[key]) ? "'"+obj[key]+"'" : obj[key]];
    }); 
    for(let i in keys)
    {
        i<keys.length-1 ? query+=keys[i]+"="+values[i]+", " : query+=keys[i]+"="+values[i];
    }

    query += " WHERE 1=1";

    keyNames = Object.keys(primary);
    keys=[];
    values=[];
    keyNames.forEach(key => 
    {
        keys = [...keys,key];
        values = [...values, isNaN(primary[key]) ? "'"+primary[key]+"'" : primary[key]];
    }); 

    for(let i in keys)
    {
        query+=" AND "+keys[i]+"="+values[i];
    }

    console.log("UPDATE : ",query);
    return Query(query);
  // return null;
}


const Query = (query) =>
{
    let conn = db.openSync(connStr); //Open Connection and WAIT for connection Opened

    const res = conn.querySync(query); //Query and WAIT for query result

    conn.closeSync(); //Close the Connection and wait for Closed 

    console.log("Query : Done!");

    return res; //Return the result
}