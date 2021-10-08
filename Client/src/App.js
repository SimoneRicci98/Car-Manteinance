import './App.css';
import React,{useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';
import Consumi from './basicComponent/Consumi';
import Manutenzione from './basicComponent/Manutenzione';
import Riepilogo from './basicComponent/Riepilogo';

const App = () => {
  //#region variabili
  const [isOpen, setIsOpen] = useState(false);
  const [div, setDiv] = useState(-1);
  const [car, setCar] = useState("");
  //#endregion

  //#region funzioni con useState
  const toggle = () => setIsOpen(!isOpen);
  const SwitchState = (numDiv) => {
    setDiv(numDiv);
    if(isOpen)
      toggle();
  };
  const switchCar = (car) => {
    setCar(car);
    setDiv(0);
  };
  //#endregion
  
  return (
    <>
    <Navbar color="dark" dark style={{padding:"20px"}} expand="md">
      <NavbarBrand onClick={()=>SwitchState(0)}>{car}</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink onClick={()=>SwitchState(1)}>Consumi</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={()=>SwitchState(2)}>Manutenzione</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={()=>SwitchState(3)}>Altro</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
    <div className="container-fluid">
    <br/>
    {(div===-1) &&
    <div class="row">
      <div class="text-center w-100 p-3">
        <button class="btn btn-dark btn-lg btn-block w-100 p-3" onClick={()=>switchCar("Meriva")}>Meriva</button>
      </div>
      <div class="text-center w-100 p-3">
        <button class="btn btn-dark btn-lg btn-block w-100 p-3" onClick={()=>switchCar("Yaris")}>Yaris</button>
      </div>
    </div>}
    {(div===0) && <Riepilogo choosencar={car}/>}
    {(div===1) && <Consumi/>}
    {(div===2) && <Manutenzione/>}
    </div>
    </>
  );
}

export default App;
