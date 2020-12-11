import React, { Component } from 'react'

class ShowArr extends Component {
    state = {
        currArr: [],
        notEnought: []
    }


    componentDidMount() {
        const { exampleArray } = this.props
        const { exampleArray2 } = this.props
//        console.log("didmount")
  //      console.log("exampleArray", exampleArray)
        // console.log("this.props", this.props)
        this.setState({ currArr: exampleArray })

    }


    componentDidUpdate(prevProps) {
        const { exampleArray } = this.props
        const { exampleArray2 } = this.props
        const { currArr } = this.state
        const { currArr2 } = this.state
        //console.log("exampleArray", exampleArray)
        //console.log("currArr", currArr)
        if (exampleArray !== currArr) {
            this.setState({ currArr: exampleArray  })
        }
        if (exampleArray2 !== currArr2) {
           this.setState({ currArr2: exampleArray2  })
       }
       

    }


    render() {

        const { currArr } = this.state
        const { currArr2 } = this.state
        //console.log("currArr", currArr)

        return (
            <div>
                <h3>{currArr}</h3>
                <h3>{currArr2}</h3>

            </div>
        )
    }
}

export default ShowArr