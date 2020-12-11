import Navbar from 'react-bootstrap/Navbar'
import { Redirect } from "react-router-dom"
import Nav from 'react-bootstrap/Nav'
import { genOnline, Privileges, News } from './monitoring'
import { Example } from './monitoring'
import React, { Component } from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Card from 'react-bootstrap/Card'
import * as data from './images-names'
import CardDeck from 'react-bootstrap/CardDeck'
import Carousel from 'react-bootstrap/Carousel'
import ModalWindow from './modal-window'
import app from './tcolor.css'



class Test extends Component {
  state = {
    currectContent: 0,
    redirectResh: false,
    redirectImage: false,
    redirectArray: false
  }


  handleButtonClick = (num) => {
    this.setState({ currectContent: num })

  }



  test = () => {
    console.log('кликнуто')
  }

  onSubmitButton = (numPage) => {
    switch (numPage) {
      case 0:
        this.setState({ redirectResh: true })
        break;
      case 1:
        this.setState({ redirectImage: true })
        break;
      default:
        this.setState({ redirectArray: true })
    }    

  }


  componentDidMount() {
    //this.setState({redirectResh : false, redirectImage : false, redirectArray : false })
  }

  render() {
    const { ProjectName, currectContent, redirectResh, redirectImage, redirectArray } = this.state
    let coin1000 = Privileges('1000 монет', 'Монеты', "coins1000")
    let coin7000 = Privileges('7000 монет', 'Монеты', 'coins7000')
    let coin15000 = Privileges('15000 монет', 'Монеты', 'coins15000')
    let coin35000 = Privileges('35000 монет', 'Монеты', 'coins35000')
    let coin100000 = Privileges('100000 монет', 'Монеты', "coins100000")
    let coin500000 = Privileges('500000 монет', 'Монеты', "coins100000")
    let now = genOnline(200)


    if (redirectResh) {
      return <Redirect to={{
        pathname: 'resh'
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


    const news = News()



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
          <div className="rndVar" style={{ padding: "1%", paddingRight: "3%", paddingLeft: "3%", border: "solid #ff0800 1px", background: "red", borderRadius: "8px" }}><h6 style={{ textAlign: "center" }}><i className="fas fa-signal"></i> ONLINE</h6><div style={{ textAlign: "center" }}>{now}   /   {200}</div>
            <ProgressBar variant="" style={{ background: "#960500", paddingBottom: "2%" }} min={0} max={200} now={now} key={1} />
            <div style={{ paddingTop: "2%" }} className="button">
              <Button variant="
      "><p>111</p></Button>

            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>
    )
    const tabCoin = (
      <div>
        <CardDeck>
          {coin1000}
          {coin7000}
          {coin15000}
          {coin35000}
          {coin100000}
          {coin500000}
        </CardDeck>
      </div>
    )

    const tabBril = (
      <CardDeck>
      </CardDeck>
    )
    let currTab = tabCoin



    switch (currectContent) {
      case 0:
        currTab = tabCoin
        break;
      case 1:
        currTab = tabBril
        break;
      default:
        currTab = tabCoin
    }





    let forRender = (<>
      <Row>
        <div className="mb-2">
          <Button onClick={(e) => this.handleButtonClick(0)} variant="danger" size="lg">
            Монеты
            </Button>{' '}
          <Button onClick={(e) => this.handleButtonClick(1)} variant="danger" size="lg">
            Брилианты
            </Button>
        </div>
      </Row>

      {currTab}
    </>
    )

    const gotoButtons = (<>
      <div className="col text-center">
        <button id="btnsuper" type="submit" className="btn btn-primary" onClick={(e) => this.onSubmitButton(0)} >Решатор</button>
      </div>
      <div className="col text-center">
        <button id="btnsuper" type="submit" className="btn btn-primary" onClick={(e) => this.onSubmitButton(1)} >Картинки</button>
      </div>
      <div className="col text-center">
        <button id="btnsuper" type="submit" className="btn btn-primary" onClick={(e) => this.onSubmitButton(2)} >Массив</button>
      </div>
      </>
    )

    return (
      <div className="container">


        {gotoButtons}


        {staticPNav}

        <div className="container">

          {forRender}
          <Row><Col><i onClick={this.test} className="fas fa-arrow-alt-circle-left fa-10x "></i></Col><Col></Col><Col></Col><Col><i onClick={this.test} className="fas fa-arrow-alt-circle-right fa-10x "></i></Col></Row>

        </div>
      </div>
    )
  }
}
export default Test
