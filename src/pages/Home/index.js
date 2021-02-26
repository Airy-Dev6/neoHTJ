import React from 'react'
import { Col, Row } from 'reactstrap'
import NavMain from './../../Components/NavMain'

export default function Home() {
  return (
    <Row>
      <NavMain></NavMain>
      <Col>
        <div>
          <p className="text-center">hola desde home</p>
        </div>
      </Col>
      
    </Row>
    
  )
}
