import React, {useContext, useState}  from "react";
import {Card, Container, Form, Button, Col, Row, Accordion, ListGroup, Image, ToggleButton, InputGroup} from 'react-bootstrap'

import {observer} from "mobx-react-lite";
import {User} from "../index"

import passive_voice_table from "../img/passive_voice_table.png"

const Passive_voice = observer(() => {
    document.body.style.backgroundColor = "#F6F6F6"
    return(
    <Container style={{marginTop:"5em"}}>
        <h1>Пассивный залог в английском языке — Passive Voice </h1>
        <p>
        <h2>Что такое залог</h2>
<strong>Залог (voice)</strong> — это одна из категорий английского глагола. Активный залог <strong>(active voice)</strong> в предложении указывает на то, что подлежащее совершает действие само. Пассивный, или страдательный, залог (passive voice) говорит о том, что действие совершено над подлежащим. Рассмотрим на примерах.

Steve writes articles. — Стив пишет статьи.

В этом предложении Steve — подлежащее, и он совершает действие — writes articles (пишет статьи). Поэтому мы используем глагол в активном залоге.

These articles are written by Steve. — Эти статьи написаны Стивом.

В пассивном залоге дополнение (articles) становится подлежащим, которое само по себе никакого действия не совершает. Наоборот, действие произведено над статьями — они написаны (are written). Таким образом, страдательный залог смещает акцент со Стива на его статьи. 
        </p>
<h2>Как образуется passive voice в английском </h2>
        <p>
            <Image src={passive_voice_table}></Image>
        </p>
    </Container>
    )
})
export default Passive_voice