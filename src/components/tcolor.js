import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import uuid from 'uuid'

class Tcolor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        }
    }

    handleResize = (e) => {
        this.setState({
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        })
        // console.log("window.innerWidth ", window.innerWidth)
        // console.log("window.innerHeight ", window.innerHeight)
    };

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.addEventListener("resize", this.handleResize);
    }

    


    render() {
        const { squareData } = this.props
        const {windowHeight} = this.state
        let y  = 7

     
        console.log("squareData : ", squareData)
        let oneRow = []

        let forRender, arrRows = []
        //let bgColorbtn = { backgroundColor: "#b023cd" };
        let rawHeight = { height: Math.round(windowHeight / squareData.length, 0) + "px"} 


         for (let i = 0; i < squareData.length; i++) {
             
             oneRow = squareData[i].map(item =>
                 <Col key={uuid()} xs={1} style = { { backgroundColor: item[0], border: item[1] + " " + item[2] + " " + item[3] }} >
                     <Button>{item[1]}</Button>
                 </Col>
             )
             oneRow = <Row style = {rawHeight}>
                 {oneRow}
             </Row>
             arrRows.push(oneRow)
         }

         forRender = arrRows.map(item =>
             <div key={uuid()} >
                 {item}
             </div>
         )

        forRender = <Container fluid >
            {forRender}
        </Container>




        //console.log(oneRow)

        return (
            <div>
                {forRender}

            </div>
        )
    }
}

export default Tcolor

