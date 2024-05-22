import React, {useContext, useState}  from "react";
import {Card, Container, Form, Button, Col, Row, Accordion, ListGroup, Image, ToggleButton, InputGroup} from 'react-bootstrap'

import {observer} from "mobx-react-lite";
import {User} from "../index"
import "./Main.css"

import zoomPersons from "../img/zoom-persons.jpg";
import graduatingStudent from "../img/graduating-student.png";
import practice from "../img/practice.png"
import money from "../img/money.png"
import time_manage from "../img/time_manage.png"
import continue_learn from "../img/continue_learn.png"
import pupil from "../img/pupil.png"

const InputField = () =>{
  const [checked,setChecked]=useState(false)
  const pageWidth = document.documentElement.scrollWidth
  const pageHeight = document.documentElement.scrollHeigh
  return(
  <>
  <Row style={{backgroundColor:"#d9d9d9", borderRadius:"5px",
   width:`${pageWidth}-1200px`}} className="d-flex d-row p-3">
    <Col xs={4} lg={3} md={4}>
      <Image src={zoomPersons} rounded width="150px" className=""/>
      <Button className="d-block mt-2"
      style={{backgroundColor:'yellow', color:"black", border:"none"}}
      >Оставить заявку</Button>
    </Col>
    <Col xs={8} lg={9} md={8}>
      <Row className="d-inline">
      {['Взрослым','Детям'].map((item,index)=>(
      <div as={Col} className="d-inline"
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
      <InputGroup className="d-grid mt-3" style={{gridRowGap:"6px"}}>
        <Col>
        <Form.Control
          className="d-block pr-5mr-5"
          placeholder="Имя"
          type="text"
        ></Form.Control>
        </Col>
        <Col>
        <Form.Control
          className="d-block"
          placeholder="+7(___)___-__-__"
          type="tel"
          pattern="\+7([\d]{3})\d{2}-\d{2}"
          >
        </Form.Control>
        </Col>
        <Col>
        <Form.Control
          className="d-block"
          placeholder="example@example.com"
          type="email">
        </Form.Control>
        </Col>
        <Form.Check
        type="checkbox"
        label="Даю согласие на обработку персональных данных"> 
        </Form.Check>
      </InputGroup>
      
      </Col>
    </Row>

    </>
  )
}

const Main = observer(() => { //функциональный компонент с методом mobx
    document.body.style.backgroundColor = "#F6F6F6"
    let text1="Есть теория но не хватает практики"
    let text2="Вы устали платить репотиторам и учить язык самостоятельно"
    let text3="Необходимо в сжатые сроки выучить язык"
    let text4="Вы учили язык раньше и хотите продолжить обучение"
    let card_array=[
      {text:text1,image:practice},
      {text:text2,image:money},
      {text:text3,image:time_manage},
      {text:text4,image:continue_learn},
    ]
    function select_img(index){
      switch(index){
        case '0': return {practice}
        case '1': return {money}
        case '2': return {time_manage}
        case '3': return {continue_learn}
      }
    }
    return(
      <>
      <Card className="d-block" style={{marginTop:"6rem"}}>
      <Row>
      <Card.Title as="h2" style={{textAlign:"center"}}>
        Погрузитесь в курс изучения английского языка от EngRizz
      </Card.Title>
      <Col xl={3} lg={3} md={3} className="d-block">
          <Image src={graduatingStudent} width="200px"/>
          <Button className="d-block">Записаться на вводный урок</Button>
      </Col>
      <Col xl={3} lg={3} md={3}>
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
          <h3 className="mb-3">Приходите если...</h3>
          <Row>
            {card_array.map((item,index)=>(
              <Col key={index} className="">
             <Card style={{maxWidth:"15em", height:"23em"}}>
              {/* Убедитесь, что у вас есть и адрес изображения, и текст */}
             {item.image && item.image.match(/\.(jpeg|jpg|gif|png)$/) != null && item.text ? (
              <>
              <Card.Img variant="top" src={item.image}
              className="p-3"/>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>{item.text}</Card.Text>
                </Card.Body>
                </>):null}
              </Card>
              </Col>
            ))}
          </Row>
          <h3 className="mt-4">Выберите свою цель - и мы гарантируем что вы достигнете результатов</h3>
          <Card className="mt-3" style={{maxWidth:"50%"}}>
            <Row>
              <Col>
                <Card.Body className="px-4 py-3">
                  <Card.Title>Английский для детей</Card.Title>
                  <Card.Text>Фундамент для успеха вашего ребёнка во взрослой жизни через увлекательное обучение</Card.Text>
                </Card.Body>
                <Button className="" style={{backgroundColor:"white",color:"block"}}></Button>
              </Col>
              <Col>
              <Image style={{marginLeft:"5%", maxWidth:"50%", height:"50%"}} src={pupil}></Image>
              </Col>
            </Row>
          </Card>



        </Container>
      </>
    )
})


export default Main