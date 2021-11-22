import React, { Component } from 'react';
import axios from 'axios';
import { Table, Container, Row, Col, Stack } from 'react-bootstrap'

class SavingPortfolio extends Component {

    state = {
        spotData: {}
    }

    componentDidMount() {
        axios.get(`https://localhost:44395/getSpotDetails`)
            .then(
                res => {
                    const spotData = res.data;
                    this.setState({ spotData });
                }
            )
    }

    renderAssetDetails() {
        return (
            this.state.spotData
            && this.state.spotData.snapshotVos
            && this.state.spotData.snapshotVos[0]
            && this.state.spotData.snapshotVos[0].data
            && this.state.spotData.snapshotVos[0].data.balances
            && this.state.spotData.snapshotVos[0].data.balances.map((item, index) => (
                item.asset.indexOf("LD") !== -1 && <tr key={index}>
                    <td key={index + 2}>{item.asset}</td>
                    <td key={index + 3}>{item.free}</td>
                </tr>
            ))
        )
    }

    render() {
        return (
            <React.Fragment>
                <Stack gap={5}>
                    <div className="bg-light border"><h1>Savings Portfolio</h1></div>
                    <div className="bg-light border">
                        <Container>
                            <Row>
                                <Col>
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th>Asset</th>
                                                <th>Balance</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.renderAssetDetails()}
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Stack>
            </React.Fragment>
        )
    }
}

export default SavingPortfolio;