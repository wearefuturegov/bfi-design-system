import React, { Component } from 'react';
import Proptypes from 'prop-types';

import Container from '../bfi-components/Container'
import Heading from '../bfi-components/Heading'
 
class Components extends Component {
    render () {
        return (
            <Container>
                <Heading as="h2">Components</Heading>
            </Container>
        )
    }
}

export default Components;
