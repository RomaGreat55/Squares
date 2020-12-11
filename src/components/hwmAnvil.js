import axios from 'axios'
// import Navbar from 'react-bootstrap/Navbar'
// import { Redirect } from "react-router-dom"
// import Nav from 'react-bootstrap/Nav'
// import { genOnline, Privileges, News } from './monitoring'
// import { Example } from './monitoring'
import React, { Component } from 'react'
//import { useState } from 'react'
import Button from 'react-bootstrap/Button'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
// import ProgressBar from 'react-bootstrap/ProgressBar'
// import Card from 'react-bootstrap/Card'
// import * as data from './images-names'
// import CardDeck from 'react-bootstrap/CardDeck'
// import Carousel from 'react-bootstrap/Carousel'
// import ModalWindow from './modal-window'
// import app from './tcolor.css'
import AnvilResh from './AnvilResh'
import InputGroup from 'react-bootstrap/InputGroup'

class Test extends Component {
  state = {
    price: '',
    proch: '',
    repairpr: '',
    temper: ''
  }
  handleClick = (e) => {
    e.preventDefault()
    const price = document.getElementById('a').value
    const proch = document.getElementById('b').value
    const repairpr = document.getElementById('c').value
    this.setState({ price: price })
    this.setState({ proch: proch })
    this.setState({ repairpr: repairpr })
  }

  runAxios = (e) => {
    const { temper } = this.state
    e.preventDefault()
    const city = document.getElementById('TemperCity').value
    //const arCity = ["Minsk", "Biel"]
    console.log(city)
    const apiURL = 'http://api.openweathermap.org/data/2.5/weather'
    //const city = "Biel"
    const apiKey = "59c861c2bdddced09fe92db151afd8bf"

    //const axios = require("axios")

    //http://api.openweathermap.org/data/2.5/weather?q=%22%22&appid=59c861c2bdddced09fe92db151afd8bf

    let options = {
      //method: 'POST',
      //"Metric": "Celsius",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    }



    axios.request(options)
      .then(res => {
        this.setState({temper: Math.round(res.data.main.temp - 273.15, 0)})
      })
      .catch(err => console.log(err))

  

  }
  render() {
    const { repairpr, price, proch, temper } = this.state
    return (
      <div className="container">
        <Form>
          <Form.Group>
            <Form.Label>Ввод стоимости</Form.Label>
            <Form.Control required id="a" type="a" placeholder="Введите стоимость" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Ввод прочности</Form.Label>
            <Form.Control required id="b" type="b" placeholder="Введите прочность" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Ввод цены ремонта</Form.Label>
            <Form.Control required id="c" type="c" placeholder="Введите цену ремонта" />
          </Form.Group>

          <Button variant="danger" type="submit" onClick={(e) => this.handleClick(e)}>
            Расчитать
                </Button>
        </Form>





        <AnvilResh price={price} proch={proch} repairpr={repairpr} />
        <InputGroup className="mb-3">
          <FormControl
            id="TemperCity"
            placeholder="Город (на английском)
            "
            aria-label="Город (на английском)"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary bg-danger text-white" onClick={(e) => this.runAxios(e)}>Вычислить</Button>
          </InputGroup.Append>
        </InputGroup>
        <p>{temper}</p>
      </div>
    )
  }
}
export default Test
