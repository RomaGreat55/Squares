import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
//import { genOnline, Privileges, News } from './monitoring'
//import { Example } from './monitoring'
import React, { Component } from 'react'
//import { useState } from 'react'
import Button from 'react-bootstrap/Button'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
//import FormControl from 'react-bootstrap/FormControl'
import ProgressBar from 'react-bootstrap/ProgressBar'
// import Card from 'react-bootstrap/Card'
// import * as data from './images-names'
// import CardDeck from 'react-bootstrap/CardDeck'
// import Carousel from 'react-bootstrap/Carousel'
// import ModalWindow from './modal-window'
import EqRender from './EqRender'
import { Redirect } from "react-router-dom"


class Reshator extends Component {
    state = {
        ProjectName: "Решатор",
        kor1: "",
        kor2: "",
        resh: "еще нету",
        a: "",
        b: "",
        c: "",
        redirectShop: false,
        redirectImage: false,
        redirectArray: false
    }
    Reshit = () => {
        const { a, b, c } = this.state
        console.log(`Reshit a: ${a} b: ${b} c: ${c} `)
        const aV = document.getElementById('a').value;
        const bV = document.getElementById('b').value;
        const cV = document.getElementById('c').value;
        console.log(`Reshit aV: ${aV} bV: ${bV} cV: ${cV} `)
        this.setState({ a: aV })
        this.setState({ b: bV })
        this.setState({ c: cV })


    }

    onSubmitButton = (numPage) => {
        console.log("sibmit")
        switch (numPage) {
          case 0:
            this.setState({ redirectShop: true })
            break;
          case 1:
            this.setState({ redirectImage: true })
            break;
          default:
            this.setState({ redirectArray: true })
        }    
    
      }

    render() {
        const { redirectShop, redirectImage, redirectArray } = this.state
        const gotoButtons = (<>
            <div className="col text-center">
                <button id="btnsuper" type="submit" className="btn btn-primary" onClick={(e) => this.onSubmitButton(0)} >Магазин</button>
            </div>
            <div className="col text-center">
                <button id="btnsuper" type="submit" className="btn btn-primary" onClick={(e) => this.onSubmitButton(1)} >Картинки</button>
            </div>
            <div className="col text-center">
                <button id="btnsuper" type="submit" className="btn btn-primary" onClick={(e) => this.onSubmitButton(2)} >Массив</button>
            </div>
        </>
        )
        const { a, b, c } = this.state
        console.log(`render a: ${a} b: ${b} c: ${c} redirectShop: ${redirectShop}`)
        const { resh, ProjectName, kor1, kor2 } = this.state
        const staticPNav = (
            <Navbar fixed>
                <Navbar.Brand href="#home" style={{ marginRight: "10%" }}><h3>{ProjectName}</h3></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav defaultActiveKey="/home" className="mr-auto">
                        <Nav.Link style={{ borderBottom: "solid red 1px" }} active href="#home">Главная</Nav.Link>
                        <Nav.Link href="#home"></Nav.Link>
                        <Nav.Link href="#link">3333333333</Nav.Link>
                        <Nav.Link href="#link">4444444444</Nav.Link>
                    </Nav>
                    <div className="rndVar" style={{ padding: "1%", paddingRight: "3%", paddingLeft: "3%", border: "solid #ff0800 1px", background: "red", borderRadius: "8px" }}><h6 style={{ textAlign: "center" }}><i className="fas fa-signal"></i> ONLINE</h6><div style={{ textAlign: "center" }}>{10}   /   {200}</div>
                        <ProgressBar variant="danger" style={{ background: "#960500", paddingBottom: "2%" }} min={0} max={200} now={10} key={1} />
                        <div style={{ paddingTop: "2%" }} className="button">
                        </div>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        )
        const reshator = (
            <Form>
                <Form.Group>
                    <Form.Label>Ввод переменной</Form.Label>
                    <Form.Control required id="a" type="a" placeholder="Введите переменную a" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Ввод переменной</Form.Label>
                    <Form.Control required id="b" type="b" placeholder="Введите переменную b" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Ввод переменной</Form.Label>
                    <Form.Control required id="c" type="c" placeholder="Введите переменную c" />
                </Form.Group>

                <Button variant="danger" type="button" onClick={(e) =>  this.Reshit()} >
                    Решить
                </Button>
            </Form>
        )




        if (redirectShop) {
            return <Redirect to={{
                pathname: ''
            }}
            />
        }
        if (redirectImage) {
            return <Redirect to={{
                pathname: 'imagesel'
            }}
            />
        }
        if (redirectArray) {
            return <Redirect to={{
                pathname: 'genarr'
            }}
            />
        }



        return (
            <div className="container">
                {gotoButtons}
                {staticPNav}
                {reshator}


                <EqRender a={a} b={b} c={c} />
            </div>
        )
    }
}


export default Reshator