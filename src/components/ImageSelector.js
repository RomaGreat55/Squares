
import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ImageChange from './ImageChange'
import Card from 'react-bootstrap/Card'
import * as data from './images-names'
import CardDeck from 'react-bootstrap/CardDeck'
import { Redirect } from "react-router-dom"


class ImageSelector extends Component {
  state = {
    currImg: 'locked',
    currName: 'Нажмите для открытия',
    currLore: '',
    redirectShop: false,
    redirectResh: false,
    redirectArray: false
  }


  
  handleClick = (image, name, lore) => {
    this.setState({currImg: image})
    this.setState({currName: name})
    this.setState({currLore: lore})
  }


  onSubmitButton = (numPage) => {
    switch (numPage) {
      case 0:
        this.setState({ redirectShop: true })
        break;
      case 1:
        this.setState({ redirectResh: true })
        break;
      default:
        this.setState({ redirectArray: true })
    }    

  }


  render() {
    const { currImg } = this.state
    const { currName } = this.state
    const { currLore } = this.state
    const { redirectShop, redirectResh, redirectArray } = this.state
    const gotoButtons = (<>
        <div className="col text-center">
            <button id="btnsuper" type="submit" className="btn btn-primary" onClick={(e) => this.onSubmitButton(0)} >Магазин</button>
        </div>
        <div className="col text-center">
            <button id="btnsuper" type="submit" className="btn btn-primary" onClick={(e) => this.onSubmitButton(1)} >Решатор</button>
        </div>
        <div className="col text-center">
            <button id="btnsuper" type="submit" className="btn btn-primary" onClick={(e) => this.onSubmitButton(2)} >Массив</button>
        </div>
    </>
    )

    if (redirectResh) {
      return <Redirect to={{
        pathname: 'resh'
      }}
      />
    }
    if (redirectShop) {
      return <Redirect to={{
        pathname: ''
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
      <>
      {gotoButtons}
        <fieldset>
          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={2}>
             Выберите карточку
      </Form.Label>
            <Col sm={10}>
              <Form.Check type="radio" onClick={(e) => this.handleClick('junior', 'Статус Junior', <><strong>Возможности</strong> <ul><li>Бустер +30% опыта</li><li>Junior транспорт по скидке</li><li>Скидки в магазине оружия</li></ul></>)} label="junior" name="formHorizontalRadios" id="formHorizontalRadios1" />
              <Form.Check type="radio" onClick={(e) => this.handleClick('elite', 'Статус Elite', 'Возможности: <p>тест</p')} label="2" name="formHorizontalRadios" id="formHorizontalRadios1" />
              <Form.Check type="radio" onClick={(e) => this.handleClick('avatar', 'Статус Avatar', 'Возможности: <p>тест</p')} label="3" name="formHorizontalRadios" id="formHorizontalRadios1" />
            </Col>
          </Form.Group>
        </fieldset>
        <ImageChange showImage={currImg} showName={currName} showLore={currLore}/>
      </>
    )
  }
}

export default ImageSelector