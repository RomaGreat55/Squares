import React, { Component } from 'react'


class AnvilResh extends Component {
    state = {
        price2: '',
        proch2: '',
        repairpr2: ''
    }

    componentDidMount() {
        const { price2, repairpr2, proch2 } = this.state
        const { price, repairpr, proch } = this.props
        if ((price2 !== price) || (proch2 !== proch) || (repairpr2 !== repairpr)) {
            this.setState({ price2: price, proch2: proch, repairpr2: repairpr })
        }
    }


    componentDidUpdate() {
        const { price2, repairpr2, proch2 } = this.state
        const { price, repairpr, proch } = this.props
        if ((price2 !== price) || (proch2 !== proch) || (repairpr2 !== repairpr)) {
            this.setState({ price2: price, proch2: proch, repairpr2: repairpr })
        }
    }

    Resh = () => {
        let x = 0
        let Result
        let { price2, repairpr2, proch2 } = this.state
        if (price2 - (price2 / proch2) < repairpr2) {
            Result = "Не выгодно."
        } else {
            while (price2 - (price2 / proch2) > repairpr2) {
                price2 = price2 - (price2 / proch2)
                x = x + 1
                Result = "Выгодно чинить раз: " + x + "."
            }
        }
        if (price2 - (price2 / proch2) == repairpr2) {
            Result = "Починить можно, но ни убытка, ни прибыли это не принесет."
        }


        return (
            <p>{Result}</p>
        )
    }

    render() {
        const Resh = this.Resh()
        return (
            <div>{Resh}</div>
        )
    }
}
export default AnvilResh

