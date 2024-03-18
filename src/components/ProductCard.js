import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useSelector ,useDispatch} from 'react-redux';
import { addtocart } from '../features/CartSlices';




export default function ProductCard() {

  const items=useSelector((state)=>state.allcart.items)
  const dispatch =useDispatch();



  return (
    
    <MDBContainer>
       <MDBRow className='mb-3'>
        { items.map((item)=>(
          
       <MDBCol size='4'key={item.id}>       
        <MDBCard id="card">
        <MDBCardImage src={item.image} position='top' alt='...' />
        <MDBCardBody>
          <MDBCardTitle>{item.title}</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
          <MDBBtn onClick={()=>dispatch(addtocart(item))}>Add To Card</MDBBtn>
        </MDBCardBody>
      </MDBCard>
      </MDBCol>
      ))}
      </MDBRow>
      </MDBContainer>

    
   
  );
}