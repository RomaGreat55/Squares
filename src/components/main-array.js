
import React, { Component } from 'react'
import ShowArr from './show-array'
import Button from 'react-bootstrap/Button'
import ProgressBar from 'react-bootstrap/ProgressBar'
import {genRandom} from './dopfunc'
import * as data from './images/book.png'
import { Redirect } from "react-router-dom"

class Genarray extends Component {
    state = {
        currArr: [],
        currArr2: [],
        notEnought: [],
        redirectShop: false,
        redirectResh: false,
        redirectImage: false
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
            this.setState({ redirectImage: true })
        }    
    
      }

    componentDidMount() {
        let rn1 = genRandom(10)
        this.setState({ currArr: rn1 })

    }

    handleClick = () => {
        let rn1 = genRandom(10)
        let rnSq1 = ' ' + rn1 * rn1
        let notEnought = ' ' + 10000 - rnSq1
        this.setState({ currArr: rnSq1 })
        this.setState({ notEnought: notEnought })
        this.setState({ currArr2: rn1 })
    }
    
    render() {
        const { redirectShop, redirectResh, redirectImage } = this.state
        const gotoButtons = (<>
            <div className="col text-center">
                <button id="btnsuper" type="submit" className="btn btn-primary" onClick={(e) => this.onSubmitButton(0)} >Магазин</button>
            </div>
            <div className="col text-center">
                <button id="btnsuper" type="submit" className="btn btn-primary" onClick={(e) => this.onSubmitButton(1)} >Решатор</button>
            </div>
            <div className="col text-center">
                <button id="btnsuper" type="submit" className="btn btn-primary" onClick={(e) => this.onSubmitButton(2)} >Картинка</button>
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
        if (redirectImage) {
          return <Redirect to={{
            pathname: 'imagesel'
          }}
          />
        } 


        const { currArr } = this.state
        let renderImg = <img src = {data}/>
        let forRender
        if (currArr.length > 0) {
            forRender = (
                <ShowArr exampleArray={currArr} />
            )
        }
        const { currArr2 } = this.state
        let forRender2
        let ShowArr2
        if (currArr2.length > 0) {
            forRender2 = (
                <ShowArr exampleArray={currArr2} />
            )
        }
        let y = 6
        
        let ms = [6,8, 10]
        const [m1, m2] = ms
        console.log(ms, m1, m2)
        //m1 = 7
        //const [m1, m2] = ms
        //console.log(ms, m1, m2)
        
        let { notEnought } = this.state
        let testAwesome = (
           <h1> <i className="fas fa-code"></i></h1>
        )
        return (
            <div>
                <div className="container">
                    {gotoButtons}
                <Button onClick={this.handleClick}> ChangeArr </Button>
                {forRender}
                <ProgressBar>
                
                <ProgressBar striped variant="success" animated striped label={currArr} now={currArr} key={1} />
                <ProgressBar variant="danger" animated striped label={notEnought} now={notEnought} key={2} />
                </ProgressBar>
                </div>
                <div>
                {renderImg}
                {testAwesome}
                </div>
            </div>
        )
    }
}

export default Genarray