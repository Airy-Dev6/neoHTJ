import React from 'react'
import { Col, Row } from 'reactstrap'
import FormSchool from '../../Components/FormSchool'
import NavMain from '../../Components/NavMain'

export default function AddNewSchool() {
  return (
    <Row>
      <NavMain/>
      <Col>
        <Row>
          <Col className="mt-5" xs={{size:8, offset:2}}>
            <FormSchool />    
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
