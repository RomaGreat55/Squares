import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'

class ModalWindow extends Component {
    state = {
        show: false

    }
    handleClose = () => this.setState({ show: false })
    handleShow = () => this.setState({ show: true })
    pay = () => {
        document.getElementById('buy').innerHTML = "Произошла ошибка";
        document.getElementById('buy').style.background = "#fcb103";
        document.getElementById('buy').style.cursor = "not-allowed";
    }
    render() {
        const { show } = this.state
        const { buttonType } = this.props
        return (
            <>
                <Button variant="danger" onClick={this.handleShow}>
                    <i className="fas fa-shopping-cart"></i> {buttonType}
                </Button>

                <Modal className="text-center" show={show} onHide={this.handleClose}>
                    <Modal.Header>
                        <div className="container">
                        <Modal.Title className="centerthis">Покупка</Modal.Title>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                            <Form.Group controlId="formBasicNick">
                                <Form.Label>Никнейм</Form.Label>
                                <Form.Control type="nick" placeholder="Ввидите Ваш никнейм" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Промокод (не обязательно)</Form.Label>
                                <Form.Control type="promo" placeholder="Промокод" />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="container">
                        <Button variant="danger" id="buy" onClick={this.pay}>
                            Оплатить
                  </Button>{'  '}
                  <Button variant="secondary" onClick={this.handleClose}>
                            Закрыть
                  </Button>
                  </div>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}
export default ModalWindow


