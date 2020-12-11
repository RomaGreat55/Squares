
import React, { Component } from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'


class EqRender extends Component {
    state = {
        currA: "",
        currB: "",
        currC: "",
    }
    componentDidMount() {
        const { currA } = this.state
        const { reshenie } = this.props
        console.log("reshenie", reshenie)
        this.setState({ currResh: reshenie })

    }

    Reshit = (a, b, c) => {
        console.log("resh")
        let x, x2
        let D = b * b - 4 * a * c

        if (D < 0) {
            D = "Не имеет решения!"
            x = "x1: нету"
            x2 = ', x2: нету'
        }
        if (D === 0) {
            x = "x: " + (0 - b) / (2 * a)
            D = "Имеет одно решение."
            x2 = ', x2: нету'
        }
        if (D > 0) {
            x = "x: " + (0 - b + Math.sqrt(D)) / (2 * a)
            x2 = ", x2: " + (0 - b - Math.sqrt(D)) / (2 * a)
        }
        const sum = "" + x + "" + x2

        return (
            <>
                <div>Решение: {sum}</div>
            </>
        )
    }


    componentDidUpdate(prevProps) {
        const { currA, currB, currC } = this.state
        const { a, b, c } = this.props
        if ((currA !== a) || (currB !== b) || (currC !== c)) {
            this.setState({ currA: a, currB: b, currC: c })
        }



    }
    render() {
        const { currA, currB, currC } = this.state
        let x = this.Reshit(currA, currB, currC)
        return (
            <>
                <div>{x}</div>
            </>
        )
    }
}


export default EqRender