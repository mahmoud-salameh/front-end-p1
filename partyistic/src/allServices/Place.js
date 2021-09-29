'use strict';
import React from 'react';
import { Col, Card, Form } from 'react-bootstrap'

export default function Place(props) {

  return (
    <>
    <h2 className="align-middle">Reserve a place</h2>
      <div className="row row-cols-6">
      <div className="col"></div>

        {props.places && props.places.map((item,key)=>key<4 && (

          <div className="col">
  
            <a href="/Services/places"> <Card.Img variant=""  alt={item.images.images[0]} src={item.images.images[0]} />
            </a>
            </div>
            )
        )}
          
        <div className="col"></div>
        </div>

    </>
  );

}
