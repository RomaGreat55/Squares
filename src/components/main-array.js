import React, { Component } from 'react'
import ShowArr from './show-array'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Genarray extends Component {
    state = {
        currArr: []
    }

    componentDidMount() {
        this.setState({ currArr: [1, 2, 3] })

    }

    handleClick = () => {
        let rn1 = Math.floor(Math.random() * 10, 0)
        let rn2 = Math.floor(Math.random() * 10, 0)
        let rn3 = Math.floor(Math.random() * 10, 0)
        let ms = []
        ms.push(rn1, rn2, rn3)

        this.setState({ currArr : ms})
    }
    render() {

        const { currArr } = this.state
        let forRender
        if (currArr.length > 0) {
            forRender = (
                
                <ShowArr exampleArray={currArr} />
            )
        }
        return (
            <div>
                <Button onClick = {this.handleClick}> ChangeArr </Button>
                {forRender}

            </div>
        )
    }
}

export default Genarray