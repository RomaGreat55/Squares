import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class ShowArr extends Component {
    state = {
        currArr: []
    }



    componentDidMount() {
        const { exampleArray } = this.props
        console.log("didmount")
         console.log("exampleArray", exampleArray)
        // console.log("this.props", this.props)
        this.setState({ currArr: exampleArray })

    }


    componentDidUpdate(prevProps) {
        const { exampleArray } = this.props
        const { currArr } = this.state
        //console.log("exampleArray", exampleArray)
        //console.log("currArr", currArr)
        if (exampleArray !== currArr) {
             console.log("STATE CHANGE")
            this.setState({ currArr: exampleArray  })
        }

    }


    render() {

        const { currArr } = this.state
        //console.log("currArr", currArr)

        return (
            <div>
                <h3>{currArr}</h3>

            </div>
        )
    }
}

export default ShowArr