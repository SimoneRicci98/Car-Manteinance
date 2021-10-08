import React from 'react';

const Riepilogo = (props) =>{
    const choosencar = props.choosencar;

    return(
    <>
    {/*<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
        <img class="d-block w-100" src="..." alt="First slide"></img>
        </div>
        <div class="carousel-item">
        <img class="d-block w-100" src="..." alt="Second slide"></img>
        </div>
        <div class="carousel-item">
        <img class="d-block w-100" src="..." alt="Third slide"></img>
        </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
    </div>*/}
        <div className={"card m-3 text-center"}>
            <div className={"card-body row"}>
                <img alt={choosencar} className={"w-100 p-2"} src={img(choosencar)}></img>
            </div>
        </div>      
        <div className={"card m-3 text-center"}>
            <div className={"card-body row"}>
                <div className={"col-sm-3 p-1 h2"}>
                    <span>KM percorsi: {/*kmTot*/}</span>
                </div>
            </div>
        </div>
        <DivConsumo/>
        <DivManutenzione/>
    </>
    );
}
const img = (car) =>{
    switch(car){
        case "Meriva":
            return "https://immagini.alvolante.it/sites/default/files/styles/anteprima_970/public/primo_contatto_galleria/2014/01/opel-meriva-2014_08.jpg";
        case "Yaris":
            return "https://www.autosalonepucci.com/wp-content/uploads/2020/09/20200923_180514-798x466.jpg";
        default: break;
    }
}

const DivConsumo = () =>{

    return(        
    <div className={"card m-3 text-center"}>
        <div className={"card-body row"}>
            <div className={"col-sm-3 p-1"}>
                <span>Litri totali usati: {/*litriTot*/} L</span>
            </div>
            <div className={"col-sm-3 p-1"}>
                <span>Totale costo: {/*costoTot*/} €</span>
            </div>
            <div className={"col-sm-3 p-1"}>
                <span>Media globale consumi: {/*kmTot/litriTot*/} km/L</span>
            </div>
        </div>
    </div>
    );
}

const DivManutenzione = () =>{

    return(        
    <div className={"card m-3 text-center"}>
        <div className={"card-body row"}>
            <div className={"col-sm-3 p-1"}>
                <span>Interventi effettuati: {/*litriTot*/}</span>
            </div>
            <div className={"col-sm-3 p-1"}>
                <span>Totale costo: {/*costoTot*/} €</span>
            </div>
            <div className={"col-sm-3 p-1"}>
                <span>Media costo per intervento: {/*kmTot/litriTot*/} €</span>
            </div>
        </div>
    </div>
    );
}

export default Riepilogo;