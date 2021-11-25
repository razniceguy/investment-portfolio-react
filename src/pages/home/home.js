import React, { Component } from 'react';
import { Stack, Image, Container, Row, Col } from 'react-bootstrap';
import home from '../../assets/portfolio_home.png'
import tech_stack from '../../assets/tech_stack.png'
import tech_arch from '../../assets/tech_arch.png'
import nfr from '../../assets/nfr.png'
import ci_cd from '../../assets/ci_cd.png'
import goals from '../../assets/goals.png'
import upgrades from '../../assets/upgrades.png'

class Home extends Component {
    render() {
        return (
            <Stack gap={5}>
                <div className="bg-light border">
                    <Container>
                        <Row>
                            <Col>
                                <h1> Welcome to Investment Portfolio!</h1>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="bg-light border">
                    <Container>
                        <Row>
                            <Col>
                                <Image src={home} fluid />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="bg-light border">
                    <Container>
                        <Row>
                            <Col>
                                <Image src={goals} fluid />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="bg-light border">
                    <Container>
                        <Row>
                            <Col>
                                <h1> Technical Architecture</h1>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="bg-light border">
                    <Container>
                        <Row>
                            <Col>
                                <Image src={tech_arch} fluid />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="bg-light border">
                    <Container>
                        <Row>
                            <Col>
                                <h1> Technical Stack</h1>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="bg-light border">
                    <Container>
                        <Row>
                            <Col>
                                <Image src={tech_stack} fluid />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="bg-light border">
                    <Container>
                        <Row>
                            <Col>
                                <h1> Continuous Integration and Continuous Deployment</h1>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="bg-light border">
                    <Container>
                        <Row>
                            <Col>
                                <Image src={ci_cd} fluid />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="bg-light border">
                    <Container>
                        <Row>
                            <Col>
                                <h1> Non-Functional Requirement</h1>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="bg-light border">
                    <Container>
                        <Row>
                            <Col>
                                <Image src={nfr} fluid />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="bg-light border">
                    <Container>
                        <Row>
                            <Col>
                                <Image src={upgrades} fluid />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Stack>
        )
    }
}

export default Home;