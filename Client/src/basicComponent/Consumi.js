import React from 'react';
import axios from 'axios';

const url = "http://localhost:5000/Query/Insert";

const Consumi = () =>{
    let kmTot=0;
    let litriTot=0;
    let costoTot=0;
    const kmIniziali = 30;

    let listaConsumi = [
        {
            data : "12/04/2021",
            km : 400,
            litri : 32.7,
            costo : 2.7,
            commento : "fuzinona"
        },
        {
            data : "01/06/2021",
            km : 500,
            litri : 33.7,
            costo : 52.7,
            commento : "fuzinona"
        },
        {
            data : "20/09/2021",
            km : 560,
            litri : 2345.7,
            costo : 345.7,
            commento : "funziona"
        }
    ];

    kmTot = listaConsumi.reduce((returnValue,lista) => returnValue += lista.km, -kmIniziali);
    litriTot = listaConsumi.reduce((returnValue,lista) => returnValue += lista.litri, 0);
    costoTot = listaConsumi.reduce((returnValue,lista) => returnValue += lista.costo, 0);

    return(
        <>
        <DivInserisciDati listaConsumi = {listaConsumi}/>
        <div className={"card m-3 text-center"}>
            <div className={"card-body row"}>
                <div className={"col-sm-3 p-1"}>
                   <span>KM totali percorsi: {kmTot}</span>
                </div>
                <div className={"col-sm-3 p-1"}>
                    <span>Litri totali usati: {litriTot}</span>
                </div>
                <div className={"col-sm-3 p-1"}>
                    <span>Totale costo: {costoTot} </span>
                </div>
                <div className={"col-sm-3 p-1"}>
                    <span>Media consumi: {kmTot/litriTot} km/L</span>
                </div>
            </div>
        </div>
        {
            listaConsumi.map((value)=> {
            let { km, litri, commento, costo, data } = value;
            return(<DivConsumo km={km} litri={litri} commento={commento} costo={costo} data={data} />)
            })
        }
        </>
    );
}

const DivConsumo = (props) =>
{
    const {km, litri, commento, costo, data} = props;

    return(
    <>
        <div className={"card m-3 text-center"}>
            <div className={"card-body row"}>
                <div className={"col-sm-4 p-1"}>
                   <span>Data: {data}</span>
                </div>
                <div className={"col-sm-4 p-1"}>
                   <span>KM segnati: {km}</span>
                </div>
                <div className={"col-sm-4 p-1"}>
                    <span>Litri caricati: {litri}</span>
                </div>
                <div className={"col-sm-4 p-1"}>
                    <span>costo: {costo}</span>
                </div>
                <div className={"col-sm-4 p-1"}>
                    <span>Commento: {commento}</span>
                </div>
            </div>
        </div>
    </>
    );
}

const DivInserisciDati = () =>{
    let data, km, litri, costo, commento;


    //media per ogni pieno ---> kmInseriti - kmTotali mi da quanti km ho percorso dal pieno precedente, diviso i litri caricati ho il consumo per il pieno
    return(
        <>
            <div className={"card m-3 text-center"}>
                <div className={"card-body row"}>
                    <div className={"col-sm-3 text-center p-2"}>
                        <span>Data:<br/><input className={"w-75"} type="date" onChange={(e)=>data=e.target.value}></input></span>
                    </div>
                    <div className={"col-sm-3 text-center p-2"}>
                        <span>KM segnati:<br/><input className={"w-75"} onChange={(e)=>km=e.target.value}></input></span>
                    </div>
                    <div className={"col-sm-3 text-center p-2"}>
                        <span>Litri caricati:<br/><input className={"w-75"} onChange={(e)=>litri=e.target.value}></input></span>
                    </div>
                    <div className={"col-sm-3 text-center p-2"}>
                        <span>Costo:<br/><input className={"w-75"} onChange={(e)=>costo=e.target.value}></input></span>
                    </div>
                    <div className={"col-sm-3 text-center p-2"}>
                        <span>Commento:<br/><textarea cols="40" rows="3" className={"w-75"} onChange={(e)=>commento=e.target.value}></textarea></span>
                    </div>
                    <div className={"col-sm-12 text-center m-2"}><button onClick={()=>addToDb(data, km, litri, costo, commento)} className={"btn btn-primary btn-lg"}>Inserisci</button></div>  
                </div>
            </div>
        </>
        );
}

const addToDb = (data, km, litri, costo, commento) =>
{
    if(data && km && litri && costo)
    {
        const table = "ram_tz";
        let JSONString = "\{"+
        "\"tz001\" : \"rs\","+
        "\"tz002\" : \"S2\","+
        "\"tz003\" : \"666\","+
        "\"tz004\" : \"" + km + "\","+
        "\"tz011\" : \"" + data + "\""+
        "\} ";
        const jsonObj = JSON.parse(JSONString);
        axios.post(url,  { obj: jsonObj,table : table } ).then(res => {console.log(res);/*setResponse(res.data);*/});
    }
    else
        alert("Manca qualcosa");
}
export default Consumi;