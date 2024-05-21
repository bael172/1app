import React, {useContext, useState}  from "react";
import {Card, Container, Form, Button, Col, Row, Accordion, ListGroup, Image, ToggleButton, InputGroup} from 'react-bootstrap'

import {observer} from "mobx-react-lite";
import {User} from "../index"
import "./Main.css"

import zoomPersons from "../img/zoom-persons.jpg";
import graduatingStudent from "../img/graduating-student.png";

const InputField = () =>{
  const [checked,setChecked]=useState(false)
  const pageWidth = document.documentElement.scrollWidth
  const pageHeight = document.documentElement.scrollHeigh
  return(
  <>
  <Row style={{backgroundColor:"#d9d9d9", borderRadius:"5px",
   maxWidth:`${pageWidth}-800px`}} className="d-flex d-row p-3">
    <Col xs={5} lg={5} >
      <Image src={zoomPersons} rounded width="150px" className=""/>
      <Button className="d-block mt-2"
      style={{backgroundColor:'yellow', color:"black", border:"none"}}
      >Оставить заявку</Button>
    </Col>

      {['Взрослым','Детям'].map((item,index)=>(
      <div as={Col} className="d-inline-block"
        key={`default-${item}`}>
        <ToggleButton
          size="sm"
          variant="primary"
          type="checkbox"
          checked={checked}
          value="1"
          onChange={(e)=>setChecked(e.currentTarget.checked)}
        >
          {item}
        </ToggleButton>
        </div>
      ))}

    </Row>
      <InputGroup className="d-flex">
        <Form.Control
          placeholder="Имя"
        ></Form.Control>
        <Form.Control
          placeholder="+7(___)___-__-__"></Form.Control>
        <Form.Control
          placeholder="example@example.com"></Form.Control>
      </InputGroup>
    </>
  )
}
const Main = observer(() => { //функциональный компонент с методом mobx
    document.body.style.backgroundColor = "#F6F6F6"
    return(
      <>
      
      <Card className="d-block" style={{marginTop:"6rem"}}>
      <Row>
      <Card.Title as="h2" style={{textAlign:"center"}}>
        Погрузитесь в курс изучения английского языка от EngRizz
      </Card.Title>
      <Col xl={3} lg={1} md={3} className="d-block">
          <Image src={graduatingStudent} width="200px"/>
          <Button className="d-block">Записаться на вводный урок</Button>
      </Col>
      <Col xl={3} lg={5} md={5}>
        <ListGroup variant="flush" className="">
          <ListGroup.Item>Бесплатная консультация с экспертом</ListGroup.Item>
          <ListGroup.Item>Определим ваши языковые барьеры и сложные моменты в обучении</ListGroup.Item>
          <ListGroup.Item>Подберём курс с учётом уже имеющегося у вас опыта изучения языка</ListGroup.Item>
        </ListGroup>
      </Col>
      <Col>
        <InputField/>
      </Col>
      </Row>
      </Card>
        <Container className = "centered_div">

        </Container>
      </>
    )
})


export default Main