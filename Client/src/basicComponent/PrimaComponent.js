import Input from  '../InputsComponents/Input';

const PrimaComponent = (props) => 
{
    let list = Array.from(props.list);
    return(
        <>
            <div className="row" style={{marginTop:"5%", padding:"5px"}}>
                {
                    list.map((value)=>
                    {
                       let {foto,modello,dimensione} = value;
                       return(
                       <div className={dimensione}> 
                            <h1>Foto</h1>
                            <ImageComponent foto={foto} modello={modello}/>
                       </div>);
                    })
                }
            </div>
        </>
    );
}

const ImageComponent = (props) =>
{
    let {foto,modello} = props;
    const titolo = <h1>Modello: {modello}</h1>;
    return(
        <>
            {titolo}
            <div style={{padding:"20px",border:"1px solid black", display:"inline-block"}}>
                <img src={foto} style={{maxWidth:"100%"}}></img>
                <Input placeholder="aggiungi una descrizione"/>
                <Input placeholder="aggiungi numero di telefono" type="number"/>
            </div>
        </>
    );
}

export default PrimaComponent;