import React, { Component } from 'react';
import { Stack } from 'react-bootstrap'

class Home extends Component {
    render() {
        return (
            <Stack gap={5}>
                <div className="bg-light border"><h1>Welcome to Investment Home!</h1></div>
            </Stack>
        )
    }
}

export default Home;