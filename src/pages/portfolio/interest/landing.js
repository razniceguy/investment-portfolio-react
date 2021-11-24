import React, { Component } from 'react';
import axios from 'axios';
import { Table, Container, Row, Col, Stack } from 'react-bootstrap'

class InterestPortfolio extends Component {

    state = {
        interestData: []
    }

    componentDidMount() {
        axios.get(`https://investmentportfoliowebapi.azurewebsites.net/getInterestDetails`)
            .then(
                res => {
                    const interestData = res.data;
                    this.setState({ interestData });
                }
            )
    }

    timeConverter(UNIX_timestamp){
        var a = new Date(UNIX_timestamp);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
        return time;
      }

    renderAssetDetails() {
        return (
            this.state.interestData
            && this.state.interestData.map((item, index) => (
                <tr key={index}>
                    <td key={index + 2}>{item.asset}</td>
                    <td key={index + 3}>{item.interest}</td>
                    <td key={index + 3}>{this.timeConverter(item.time)}</td>
                    <td key={index + 3}>{item.lendingType}</td>
                </tr>
            ))
        )
    }

    render() {
        return (
            <React.Fragment>
                <Stack gap={5}>
                    <div className="bg-light border"><h1>Interest Portfolio</h1></div>
                    <div className="bg-light border">
                        <Container>
                            <Row>
                                <Col>
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th>Asset</th>
                                                <th>Interest</th>
                                                <th>Time</th>
                                                <th>Lending Type</th>
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

export default InterestPortfolio;