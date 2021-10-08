import React from 'react';

const Riepilogo = (props) =>{
    const choosencar = props.choosencar;

    return(
        <>
            <div className={"card m-3 text-center"}>
                <div className={"card-body row"}>
                    <img alt="Meriva" className={"w-100 p-2"} src={img(choosencar)}></img>
                </div>
            </div>
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

export default Riepilogo;