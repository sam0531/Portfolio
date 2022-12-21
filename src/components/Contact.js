import React, { useState } from 'react';
import "./contact.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contact = () => {

  const [inputvalue,setInputvalue] = useState(
    {
      fname:"",
      lname:"",
      email:"",
      Mobile:"",
      message:""
    }
  );
  console.log(inputvalue);
  const getvalue = (e)=> {
    const {name,value}=e.target;
    setInputvalue (()=>{
      return{
        ...inputvalue,
        [name]:value
      }
    })
  }
  return (
    <>
      <div className="container mb-3 contact">
        <h2 className='text-center'> Contact US</h2>
        <div className="container mt-2">
          <Form className='row mt-2'>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label> First Name</Form.Label>
              <Form.Control type="text" name='fname'  onChange={getvalue} />
            </Form.Group>    
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label> Last Name</Form.Label>
              <Form.Control type="text" name='lname' onChange={getvalue} />
            </Form.Group> 
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label> Email</Form.Label>
              <Form.Control type="text" name='email' onChange={getvalue} />
            </Form.Group> 
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label> Mobile </Form.Label>
              <Form.Control type="text" name='Mobile' onChange={getvalue} />
            </Form.Group>  
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={4} name="mesasge" onChange={getvalue} />
      </Form.Group>      
            <div className='d-flex justify-content-center'>     
            <Button variant="primary" className='col-lg-6' type="submit">
              Submit
            </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default Contact