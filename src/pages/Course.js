import React, {useContext, useState}  from "react";
import {Card, Container, Form, Button, Col, Row, Accordion, ListGroup, Image, ToggleButton, InputGroup} from 'react-bootstrap'

import {observer} from "mobx-react-lite";
const Course = observer(()=>{
    document.body.style.backgroundColor="#F6F6F6"
    return(
        <>
        <Container className="mt-5">
            <Row>
                <Card as={Col}>
                    <Button variant="primary" size="lg">
                        Knopka
                    </Button>
                </Card>
            </Row>
        </Container>
        </>
    )
}) 


export default Course