
import { Col, Row } from 'reactstrap'
import NavMain from './../../Components/NavMain'

export default function Schools() {
  return (
    <Row>
      <NavMain/>
      <Col>
        <Row>
          <Col xs = {{size: 2, offset:7}}>
            <div className="mx-auto">
              <p>hola</p>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
    
  )
}
