import React, {useContext, useState}  from "react";
import {Card, Container, Form, Button, Col, Row, Accordion, ListGroup, Image, ToggleButton, InputGroup} from 'react-bootstrap'

import {observer} from "mobx-react-lite";
import {User} from "../index"

import sequence_tense_table from "../img/sequence_tense_table.png"

const Sequence_tense = observer(() => {
    document.body.style.backgroundColor = "#F6F6F6"
    return(
    <Container style={{marginTop:"5em"}}>
        <h1>Согласование времен в английском языке</h1>
        <h3>В английском языке важно соблюдать согласование времен  — sequence of tenses. В этой статье мы разберем, что это значит и какие правила нужно помнить, чтобы ваша речь на английском была логичной и связной. </h3>
        <h3>Что такое согласование времен</h3>
        <p>
        Чтобы ваш рассказ, эссе или сочинение на английском были понятными и последовательными, вам необходимо научиться правильно согласовывать английские времена. Правильное согласование времен даст вашему слушателю или читателю верное представление о временных рамках повествования, последовательности и продолжительности событий. Отсутствие же согласования может привести к путанице.

Рассмотрим один пример:

The old man is narrating stories to the children who listened to him attentively. — Старик рассказывает истории детям, которые его внимательно слушали.

Глагол is narrating (рассказывает) относится к настоящему времени Present Continuous, а глагол listened (слушали) — к прошедшему Past Simple. Получается несостыковка. По логике вещей оба действия происходят одновременно: старик рассказывает, а дети слушают. Поэтому правильным будет такое предложение, в котором оба глагола стоят в Present Continuous:

The old man is narrating stories to the children who are listening to him attentively. — Старик рассказывает истории детям, которые его внимательно слушают.

Таким образом, согласование времен заключается в том, что в сложном предложении время в придаточной части (subordinate clause) зависит от времени в главной части (main clause). 
        </p>
        <h2>Основные правила согласования времен в английском языке </h2>
        <h3>Главное предложение в настоящем или будущем времени </h3>
        <p>Если главное предложение стоит в одном из настоящих (Present) или будущих (Future) времен, то в придаточном может быть любое время — нужно только соблюдать логику повествования. </p>
        <Image src={sequence_tense_table}></Image>
    </Container>
    )
})

export default Sequence_tense