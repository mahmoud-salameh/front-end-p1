/** @format */

import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import useResource from '../hook/UseInspiration';
import { useHistory } from 'react-router-dom';

export default function Inspiration(props) {
  const history = useHistory();
  useEffect(() => {
    let get = localStorage.getItem('access_token');

    if (!get) {
      history.push('/Login');
    }
  }, []);

  const { resources } = useResource();
  let wedding = [];
  let grad = [];
  let birthday = [];
  let special = [];

  resources &&
    resources.map((item) => {
      item.type == 'Wedding' && wedding.push(item);

      item.type == 'Graduation' && grad.push(item);

      item.type == 'Birthday' && birthday.push(item);

      item.type == 'Special' && special.push(item);
    });

  wedding = wedding.reverse();
  grad = grad.reverse();
  birthday = birthday.reverse();
  special = special.reverse();
  console.log(wedding, grad, birthday, special);

  return (
    <>
      {/* <h1>Get Inspired!</h1> */}
      <Carousel
        fade
        style={{ width: '96%', borderRadius: '1%', marginLeft: '2%' }}>
        {resources &&
          resources.map((item) => {
            return (
              item.images.images[0] && (
                <Carousel.Item interval={3000}>
                  {console.log(item.images.images[0])}
                  <img
                    style={{
                      width: '100%',
                      height: '850px',
                      borderRadius: '1%',
                    }}
                    src={item.images.images[0]}
                    alt={item.images.images[0]}
                  />
                </Carousel.Item>
              )
            );
          })}
      </Carousel>

      <h1
        style={{
          marginTop: '2%',
          color: 'white',
          marginLeft: '45%',
          fontFamily: "'Fleur De Leah', cursive",
        }}>
        {' '}
        Wedding parties{' '}
      </h1>
      <div style={{ display: 'flex', marginLeft: '8%' }}>
        {wedding &&
          wedding.map(
            (item, key) =>
              key < 3 && (
                <Nav>
                  <Nav.Link href='/inspiration/weddingparties'>
                    {' '}
                    <Card style={{ width: '30rem' }}>
                      <Card.Img
                        style={{ width: '100%', height: '100%' }}
                        variant='top'
                        src={item.images.images[0]}
                      />
                    </Card>
                  </Nav.Link>
                </Nav>
              )
          )}
      </div>

      <h1
        style={{
          marginTop: '2%',
          color: 'white',
          marginLeft: '45%',
          fontFamily: "'Fleur De Leah', cursive",
        }}>
        {' '}
        Graduation Parties{' '}
      </h1>
      <div style={{ display: 'flex', marginLeft: '8%' }}>
        {grad &&
          grad.map(
            (item, key) =>
              key < 3 && (
                <Nav>
                  <Nav.Link href='/inspiration/gradparties'>
                    {' '}
                    <Card style={{ width: '30rem', height: '20rem' }}>
                      <Card.Img
                        style={{ width: '100%', height: '100%' }}
                        variant='top'
                        src={item.images.images[0]}
                      />
                    </Card>
                  </Nav.Link>
                </Nav>
              )
          )}
      </div>

      <h1
        style={{
          marginTop: '2%',
          color: 'white',
          marginLeft: '45%',
          fontFamily: "'Fleur De Leah', cursive",
        }}>
        {' '}
        Birthday Parties{' '}
      </h1>
      <div style={{ display: 'flex', marginLeft: '8%' }}>
        {birthday &&
          birthday.map(
            (item, key) =>
              key < 3 && (
                <Nav>
                  <Nav.Link href='/inspiration/birthdayparties'>
                    {' '}
                    <Card style={{ width: '30rem', height: '20rem' }}>
                      <Card.Img
                        style={{ width: '100%', height: '100%' }}
                        variant='top'
                        src={item.images.images[0]}
                      />
                    </Card>
                  </Nav.Link>
                </Nav>
              )
          )}
      </div>

      <h1
        style={{
          marginTop: '2%',
          color: 'white',
          marginLeft: '45%',
          fontFamily: "'Fleur De Leah', cursive",
        }}>
        {' '}
        Special Parties
      </h1>
      <div style={{ display: 'flex', marginLeft: '8%' }}>
        {special &&
          special.map(
            (item, key) =>
              key < 3 && (
                <Nav>
                  <Nav.Link href='/inspiration/specialparties'>
                    {' '}
                    <Card style={{ width: '30rem', height: '20rem' }}>
                      <Card.Img
                        style={{ width: '100%', height: '100%' }}
                        variant='top'
                        src={item.images.images[0]}
                      />
                    </Card>
                  </Nav.Link>
                </Nav>
              )
          )}
      </div>
    </>
  );
}
