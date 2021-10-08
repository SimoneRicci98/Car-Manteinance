import React from 'react';

const Manutenzione = () => {
    let costoTot=0;
    let kmTot=0;
    const kmIniziali = 30;

    let listaManutenzione = [
        {
            km : 400,
            tipo : 32.7,
            costo : 2.7,
            commento : "fuzinona"
        },
        {
            km : 500,
            tipo : 33.7,
            costo : 52.7,
            commento : "fuzinona"
        },
        {
            km : 560,
            tipo : 2345.7,
            costo : 345.7,
            commento : "funziona"
        }
    ];

    costoTot = listaManutenzione.reduce((returnValue,lista) => returnValue += lista.costo, 0);
    kmTot = listaManutenzione.reduce((returnValue,lista) => returnValue += lista.km, -kmIniziali);

    return(
        <>
        <DivInserisciDati listaManutenzione = {listaManutenzione}/>
        <div className={"card m-3 text-center"}>
            <div className={"card-body row"}>
                <div className={"col-sm-4"}>
                   <span>KM totali percorsi: {kmTot}</span>
                </div>
                <div className={"col-sm-4"}>
                    <span>Totale costo: {costoTot} </span>
                </div>
                <div className={"col-sm-4"}>
                    <span>Media Costo: {kmTot} km/L</span>
                </div>
            </div>
        </div>
        {
            listaManutenzione.map((value)=> {
            let { km, tipo, commento, costo } = value;
            return(<DivManutenzione km={km} tipo={tipo} commento={commento} costo={costo} />)
            })
        }
        </>
    );
} 

const DivInserisciDati = (props) =>{
    let lista =  props.listaManutenzione;
    let obj = {};
    return(
        <>
            <div className={"card m-3 text-center"}>
                <div className={"card-body row"}>
                    <div className={"col-sm-3"}>
                       <span>KM segnati:<br/><input onChange={(e)=>obj.km=e.target.value}></input></span>
                    </div>
                    <div className={"col-sm-3"}>
                        <span>Tipo manutenzione<br/><input onChange={(e)=>obj.litri=e.target.value}></input></span>
                    </div>
                    <div className={"col-sm-3"}>
                        <span>Costo:<br/><input onChange={(e)=>obj.commento=e.target.value}></input></span>
                    </div>
                    <div className={"col-sm-3"}>
                        <span>Commento:<br/><input onChange={(e)=>obj.commento=e.target.value}></input></span>
                    </div>
                    <div className={"col-sm-12 text-center m-2"}><button onClick={()=>this.setState({ lista: [...this.state.lista, obj] })} className={"btn btn-primary btn-lg"}>Inserisci</button></div>  
                </div>
            </div>
        </>
        );
}


const DivManutenzione = (props) =>
{
    const {km, tipo, commento, costo} = props;

    return(
    <>
        <div className={"card m-3 text-center"}>
            <div className={"card-body row"}>
                <div className={"col-sm-3"}>
                   <span>KM segnati: {km}</span>
                </div>
                <div className={"col-sm-3"}>
                    <span>Tipo: {tipo}</span>
                </div>
                <div className={"col-sm-3 text-center"}>
                    <span>costo: {costo}</span>
                </div>
                <div className={"col-sm-3"}>
                    <span>Commento: {commento}</span>
                </div>
            </div>
        </div>
    </>
    );
}

export default Manutenzione;