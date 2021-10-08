const Input = (props) => {
    let {type, placeholder, text, className} = props;
    return(
        <input type={type} placeholder={placeholder} text={text ? text : ""} 
            className={className}
            style={{margin:"20px"}}
            onBlur={(e) => {validation(type,e.target.value)}}>
        </input>
    );
}
const validation = (type,value) => {
    switch(type)
    {
        case "number":
            if(!value)
                alert("Inserisci un numero");
            break;
        default:
            break;
    }
}
export default Input;