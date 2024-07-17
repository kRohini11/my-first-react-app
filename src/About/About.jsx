import React from 'react';
import './About.css'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import config from './includes/configuration.json'
import Button from 'react-bootstrap/Button';


 const About = () => {
  return (
    <div>
      <Container fluid>
        <h2 className='text-center my-3'>Login</h2>
        {
          config?.map(({ label, text }, inx) => {
            return <Form.Group key={`gf_${inx}`} className="mb-3">
              <Row>
                <Col sm={5} className='text-end'>
                  <Form.Label><b>{label}</b></Form.Label>
                </Col>
                <Col sm={3}> <Form.Control type={text} /></Col>
              </Row>
            </Form.Group>
          })
        }
        <Row>
          <Col sm={{ span: 7, offset: 5 }}>
            <Button variant="primary">Login</Button>
          </Col>
        </Row>

      </Container>
      <Form>
      </Form>
    </div>
  )
}

export default About;


