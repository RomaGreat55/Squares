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
            windowHeight: window.innerHeight,
            currTable: []
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

    arrayEquals = (a, b) => {
        return Array.isArray(a) &&
            Array.isArray(b) &&
            a.length === b.length &&
            a.every((val, index) => val === b[index]);
    }

    componentDidUpdate(prevProps) {
        const { squareData } = this.props
        const { currTable } = this.state
        // console.log("squareData ", squareData)
        // console.log("currTable ", currTable)
        let b = this.arrayEquals(squareData, currTable)
        //console.log("BBBBBBBBBBBBBBBBBBB ",  b)
        if (currTable !== squareData) {
            //  console.log("STATE CHANGE")
            this.setState({ currTable: squareData })
        }

    }

    render() {

        const { windowHeight, currTable } = this.state



        //console.log("TColor render currTable : ", currTable)
        //console.log("TColor render currTable len : ", currTable.length)
        let oneRow = []

        let forRender, arrRows = []
        if (currTable.length > 0) {
            //console.log("TColor render currTable : > 000 ", currTable)
            //let bgColorbtn = { backgroundColor: "#b023cd" };
            let rawHeight = { height: Math.round(windowHeight / currTable.length, 0) + "px" }


            for (let i = 0; i < currTable.length; i++) {

                oneRow = currTable[i].map(item =>
                    <Col className="d-flex align-items-center justify-content-center" key={uuid()} xs={1} style={{ backgroundColor: item[0], border: item[1] + " " + item[2] + " " + item[3] }} >
                        <Button>{item[0]}</Button>
                    </Col>
                )
                oneRow = <Row style={rawHeight}>
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

        } else {
            forRender = <></>

        }



        //console.log(oneRow)

        return (
            <div>
                {forRender}

            </div>
        )
    }
}

export default Tcolor