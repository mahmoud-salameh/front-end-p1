/** @format */

import React from 'react';
import { Carousel, Form, Modal, Button, Card } from 'react-bootstrap';
import useResource from '../hook/uesParties';
import { useState } from 'react';

export default function UserParties() {
  const { resources, loading } = useResource();
  let userParties = [];

  resources &&
    resources.map((item) => {
      item.privacy == 'Private' && userParties.push(item);
    });
  let email = 'yahiaqous@gmail.com';

  const [showParty, setshowParty] = useState(false);
  const handleCloseParty = () => setshowParty(false);
  const handleShowParty = () => setshowParty(true);

  return (
    <>
      <div className='row row-cols-6'>
        <Carousel>
          {userParties &&
            userParties.map((item) => {
              return (
                item.invited_people.people.includes(email) && (
                  <Carousel.Item interval={3000}>
                    <Card
                      style={{ width: '18rem' }}
                      onClick={() => {
                        handleShowParty(item);
                      }}>
                      <Card.Img variant='top' src={item.images.images[0]} />
                    </Card>
                  </Carousel.Item>
                )
              );
            })}
        </Carousel>

        <div className='col'></div>
      </div>
      <Modal show={showParty} onHide={handleCloseParty}>
        <Modal.Header closeButton>
          <Modal.Title>Create a Party</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit>
            <Form.Group className='mb-3' controlId='name'>
              <Form.Control type='text' placeholder='Party Name' />
            </Form.Group>

            <Form.Group className='mb-3' controlId='partyType'>
              <Form.Select aria-label='Default select example'>
                <option>Party Type</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className='mb-3' controlId='description'>
              <Form.Control
                as='textarea'
                placeholder='Add Description'
                style={{ height: '100px' }}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='privacy'>
              Privacy:
              <Form.Check
                type='radio'
                inline
                label='Public'
                id='public'
                name='privacy'
                value='public'
              />
              <Form.Check
                type='radio'
                inline
                label='Private'
                id='private'
                name='privacy'
                value='private'
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='location'>
              <Form.Control
                as='textarea'
                placeholder='Location Link'
                style={{ height: '100px' }}
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='city'>
              <Form.Select label='City'>
                <option value='1'>City</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className='mb-3' controlId='date'>
              <Form.Control type='date' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='invite'></Form.Group>
            <Form.Group className='mb-3' controlId='email'>
              <Form.Control type='email' placeholder='Invite People' />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}
