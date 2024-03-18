import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBInputGroup
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <MDBNavbar light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
        <MDBBtn color='dark' id="rr">
          <span>
       <Link to="/" id="ww">Cart</Link> 
        </span>
      </MDBBtn>

      <MDBBtn className='me-1' color='warning'>
       <Link to="/cart" id="pp"> All Products</Link>
      </MDBBtn>

        </MDBInputGroup>
      </MDBContainer>
    </MDBNavbar>
  );
}