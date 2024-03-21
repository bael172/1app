import React, {useContext, useState}  from "react";
import {Card, Container, Form, Button, Col, Row} from 'react-bootstrap'

import {observer} from "mobx-react-lite";
import {Context} from "../index"

const Main = observer(() => { //функциональный компонент с методом mobx
    document.body.style.backgroundColor = "#F6F6F6"
    return(
        <Container
        className = 'd-flex justify-content-center align-items-center '
        style = {{height: window.innerHeight - 54}}>
        </Container>
        
    )
})

export default Main