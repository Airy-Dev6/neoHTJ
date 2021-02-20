import React from 'react'
import { Col, Row } from 'reactstrap'
import NavMain from './../../Components/NavMain'

export default function Home() {
  return (
    <Row>
      <NavMain></NavMain>
      <Col>
        <p>hola desde home</p>
      </Col>
      
    </Row>
    
  )
}
