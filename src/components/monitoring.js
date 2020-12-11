import Jumbotron from 'react-bootstrap/Jumbotron'
import React, { Component } from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import * as data from './images-names'
import ModalWindow from './modal-window'


export const genOnline = (max) => {
    let i = Math.random()
    let j = Math.floor(i * max, 0)
    return j
}

export const Privileges = (name, type, path) => {


    const handleModal = () => {
        return (
            <ModalWindow buttonType="Купить" />
        )
    }
    //<Button onClick={(e) => handleModal()} variant="danger">Купить</Button>
    return (<>



        <Col style={{ marginBottom: "2%" }}>
            <Card className="text-center" style={{ width: '15rem' }}>
                <Card.Img variant="top" src={data.[path]} alt={path} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {type}
                    </Card.Text>

                    <ModalWindow buttonType="КУПИТЬ"/>
                </Card.Body>
            </Card>
        </Col>
    </>
    )

}



export const News = () => {
    return (
        <Jumbotron fluid>
            <Container className="bg-white">
                <h1 className="text-danger">Fluid jumbotron</h1>
                <p className="text-danger">
                    This is a modified jumbotron that occupies the entire horizontal space of
                    its parent.
    </p>

            </Container>
        </Jumbotron>
    )
}


