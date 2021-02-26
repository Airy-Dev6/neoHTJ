import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import React, { useState } from 'react';

import './style.css'


export default function FormSchool() {

  

  const [newSchool, setNewSchool] = useState({
    date:{
      day:new Date().getDate(),
      mounth: new Date().getMonth(),
      year: new Date().getFullYear()
    },
    name:"",
    contact: "",
    select: ""

  })

  

  

  const changeHandler = (event) => {
    let property = event.target.name
    let value = event.target.value
    setNewSchool({...newSchool, [property]: value})
    console.log(event.target.value)
    console.log(newSchool)
  }

  const saveNewSchool = () => {
    fetch(`https://neohtj-default-rtdb.firebaseio.com/schools/.json`,{
      method: "POST",
      body: JSON.stringify(newSchool)
    })
    .then(response => response.json())
    .then(json => console.log(json))
  }

  return (
    <div  className=" fsdiv  ">
      
      
      <Form className="bg-dark p-3  text-white rounded form-style">

        <FormGroup >
          <Label >School Name</Label>
          {/* <Input name="name" placeholder="User"  className="mx-auto"/> */}
          <Input name="name" onChange={changeHandler} placeholder="introduce tu nombre" />
        </FormGroup>
        <FormGroup>
          <Label>Contact</Label>
          <Input name="contact" onChange={changeHandler} placeholder="Número de contacto"/>
        </FormGroup>

        

        <FormGroup>
          <Label for="exampleSelect"> #de alumnos </Label>
          <Input type="select" onChange={changeHandler} name="select" id="exampleSelect">
            <option>  1-50</option>
            <option>  51-150</option>
            <option>  +150</option>
          </Input>
        </FormGroup>

        

        <div className="w-100 d-flex justify-content-center">
          <Button type="button" className=" " onClick={saveNewSchool} outline color="success">Agregar</Button>
          
        </div>
        
      </Form>

      
    </div>
    
  )
}
