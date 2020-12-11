
import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ImageSelector from './ImageSelector'
import Card from 'react-bootstrap/Card'
import * as data from './images-names'
import CardDeck from 'react-bootstrap/CardDeck'

class ImageChange extends Component {
    state = {
        currName: 'Нажмите для открытия',
        currImg: 'locked',
        currLore: ''
    }




    // componentWillUpdate() {
    //     const { currImg } = this.state
    //     const { showImage } = this.props
    //     if (currImg !== showImage) {
    //         this.setState({ currImg: showImage })
    //     }
    // }



    componentDidMount() {
        const { currImg } = this.state
        const { showImage } = this.props
        if (currImg !== showImage) {
            this.setState({ currImg: showImage })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.showImage !== this.props.showImage) {
            this.setState({ currImg: this.props.showImage })
        }
        if (prevProps.showName !== this.props.showName) {
            this.setState({ currName: this.props.showName })
        }
        if (prevProps.showLore !== this.props.showLore) {
            this.setState({ currLore: this.props.showLore })
        }
    }



    render() {
        const { currLore } = this.state
        const { currName } = this.state
        const { currImg } = this.state
        return (
            <>
                <Col style={{ marginBottom: "2%" }}>
                    <Card className="text-center" style={{ width: '30rem' }}>
                        <Card.Img variant="top" src={data.[currImg]} alt={currImg} />
                        <Card.Body>
                            <Card.Title>{currName}</Card.Title>
                            <Card.Text>
                                {currLore}
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
            </>
        )
    }
}

export default ImageChange