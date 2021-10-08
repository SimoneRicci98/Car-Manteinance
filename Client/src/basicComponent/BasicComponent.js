import React,{useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
const BasicComponent = (props) =>
{
    let consumi = props.consumi;
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (  
    <>
        <Navbar color="dark" dark style={{padding:"20px"}} expand="md">
        <NavbarBrand href="/">Super react</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink onClick={()=>SwitchState(consumi)} href="#">Consumi</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={()=>SwitchState(consumi)} href="#">Manutenzione</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Altro</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </>
    );
}

const SwitchState = (stato) =>
{
    alert("ciao");
    return !stato;
}

export default BasicComponent;