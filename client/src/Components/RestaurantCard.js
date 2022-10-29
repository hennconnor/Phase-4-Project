import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBCardFooter,
  MDBCardGroup,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';


function RestaurantCard({ restaurant }) {



    return (
        <div className="carder">
            

                <MDBCardGroup>
            <MDBCol sm='4'>
                    <MDBCard className='align-items-center' shadow='0' border='dark' background='secondary'>
        <Link className="link" to={`/restaurants/${restaurant.id}`}>
        <MDBCardImage src={restaurant.image_url} alt='...' position='top' />
     <MDBCardBody>
          <MDBCardTitle>{restaurant.name}</MDBCardTitle>
          <MDBCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This
            content is a little bit longer.
          </MDBCardText>
                        </MDBCardBody>
                        </Link>
             </MDBCard>
        </MDBCol>
        </MDBCardGroup>
            
        </div>

    )
}

export default RestaurantCard;