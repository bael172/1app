import React, {useContext, useState}  from "react";
import {Card, Container, Form, Button, Col, Row, Accordion} from 'react-bootstrap'

import {observer} from "mobx-react-lite";
import {User} from "../index"
import "./Main.css"

const Main = observer(() => { //функциональный компонент с методом mobx
    document.body.style.backgroundColor = "#F6F6F6"
    return(
        <Container
        className = "centered_div"
        //'d-flex justify-content-center align-items-center '
        style = {{height: window.innerHeight - 54}}>
            <div>Главная страница</div>
            <Row style={{backgroundColor:'#FCFCFC'}}>
                <Col>Эти курсы для вас, если...</Col>
            </Row>
            <Button className='display-block'>Гнопка для гнопов</Button>
            <Card style={{backgroundColor: '#FCAFAF'}}>
                Вы не боитесь начать новое
            </Card>
            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          ABC
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          DEF
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #3</Accordion.Header>
        <Accordion.Body>
            FGH
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <Form>
        <Form.Group className="pr-3" >
            <Form.Label>Ваше Имя</Form.Label>
            <Form.Control type="text" placeholder="Иван"></Form.Control>
        </Form.Group>
    </Form>
    <Row>
        <Col xl={10}>New Column</Col>
    </Row>
        </Container>
    )
})


export default Main