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
import laptop from "../img/laptop.png"
import comp_person from "../img/comp_person.png"

import conversation from "../img/conversation.png"
import eng_word from "../img/eng_word.png"
import person_read from "../img/person_read.png"
import online_meet from "../img/online_meet.png"
import no_boring_lesson from "../img/no_boring_lesson.png"
import grammar from "../img/grammar.png"

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
          <Row>
          <Col id="card1_card2" className="mt-3" style={{maxWidth:"60%"}} md={6}>
            <Card style={{backgroundColor:"#E6E6E6", maxHeight:"18em"}}>
              <Row id="card1">
                <Col>
                  <Card.Body className="px-4 py-3" >
                    <Card.Title>Английский для детей</Card.Title>
                    <Card.Text>Фундамент для успеха вашего ребёнка во взрослой жизни через увлекательное обучение</Card.Text>
                  </Card.Body>
                  <Button size="lg" className="mb-3"style={{backgroundColor:"white",color:"black", marginLeft:"20px"}}>Подробнее</Button>
                </Col>
                <Col>
                  <Image style={{maxWidth:"100%", maxHeight:"70%"}} src={pupil}></Image>
                </Col>
              </Row>
            </Card>
            <Card className="mt-3" style={{backgroundColor:"#E6E6E6", maxHeight:"18em"}}>
            <Row id="card2">
                <Col>
                  <Card.Body className="px-4 py-3" >
                    <Card.Title>Разговорный английский</Card.Title>
                    <Card.Text>
                      Обеспечьте себя комфорт как в деловом, так и в 
                      неформальном общении.Большое кол-во практики
                    </Card.Text>
                  </Card.Body>
                  <Button size="lg" className="mb-3"style={{backgroundColor:"white",color:"black", marginLeft:"20px"}}>Подробнее</Button>
                </Col>
                <Col>
                  <Image style={{maxWidth:"100%", maxHeight:"80%"}} src={comp_person}></Image>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col id="IT" className="mt-3" md={6}>
            <Card style={{backgroundColor:"#242424", height:"36em"}}>
              <Card.Body className="text-white" style={{textAlign:"center"}}>
                <Card.Title>Английский для IT</Card.Title>
                <Image src={laptop} style={{maxWidth:"18em"}}></Image>
                <Card.Text><p>Углубленное изучение технического английского 
                            для получения оффера от международных компаний</p>
                            <p>Для дизайнеров, программистов, сисадминов,  
                            компьютерных мастеров и других IT-специалистов</p>
                </Card.Text>
                <Button size="lg" className="mb-3"style={{backgroundColor:"white",color:"black", marginLeft:"20px"}}>Подробнее</Button>
              </Card.Body>
            </Card>

          </Col>
          </Row>
        <h3 className="mt-3">Почему курсы это удобно?</h3>

          <Row id="obshiy" className="mt-3">
            <Col id="card_start" md={3}>
              <Card id="start_card" className="" style={{maxWidth:"15em", maxHeight:"20em"}}>
                <Card.Body>
                  <Card.Img src={conversation}></Card.Img>
                  <Card.Text>Активное обучение в разговорном стиле</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col id="2ryada" md={6}>
              <Row id="1ryad">
                <Col id="eng_word">
                  <Card style={{maxWidth:"15em", maxHeight:"20em"}}>
                    <Card.Body>
                      <Card.Img src={eng_word}></Card.Img>
                      <Card.Text>Общение с носителями</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col id="online_meet">
                  <Card style={{maxWidth:"15em", maxHeight:"20em"}}>
                    <Card.Body>
                      <Card.Img src={online_meet}></Card.Img>
                      <Card.Text>Уроки в формате видеовстреч</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row id="2ryad">
                <Col id="person_read">
                <Card className="mt-3" style={{maxWidth:"15em", maxHeight:"20em"}}>
                  <Card.Body>
                    <Card.Img src={person_read}></Card.Img>
                    <Card.Text>Индивидуальный подход к студентам</Card.Text>
                  </Card.Body>
                </Card>
                </Col>
                <Col className="mt-3" id="no_boring_lesson">
                <Card style={{maxWidth:"15em", maxHeight:"20em"}}>
                  <Card.Body>
                    <Card.Img src={no_boring_lesson}></Card.Img>
                    <Card.Text>Без скучных лекций</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              </Row>
            </Col>
            <Col id="card_end" md={3}>
              <Card id="end_card" style={{maxWidth:"15em", maxHeight:"20em"}}>
                <Card.Body>
                  <Card.Img src={grammar}></Card.Img>
                  <Card.Text>Анализ и разбор сложных грамматических конструкций</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          

        </Container>
      </>
    )
})

export default Main