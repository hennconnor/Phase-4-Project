import React from "react";
import sushi from "../assets/sushi.jpg"
import burger from "../assets/burger.jpg"
import drank from "../assets/drank.jpg"
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

function Home() {

    return (
        <div>
            <MDBCarousel showControls showIndicators>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={sushi}
        alt='...'
      >
        
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100  img-home'
        itemId={2}
        src={drank}
        alt='...'
      >
        
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100  img-home'
        itemId={3}
        src={burger}
        alt='...'
      >
        
      </MDBCarouselItem>
    </MDBCarousel>
        </div>
    )
}

export default Home;