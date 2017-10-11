import React, { Component } from 'react';
import * as types from '../../actions/types';
import {
   Container, Content, Button, Text, Footer, FooterTab
} from 'native-base';
import { styles } from './style';
import TopHeader from '../../components/TopHeader';

export default class ScanQR extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null
        }
    }

    render() {
        return (
            <Container>
                <TopHeader {...this.props} title='Scan' />
                <Content>
                    
                </Content>
                <Footer>
                <FooterTab>
                    <Button onPress={() => { this.props.navigate(types.NAVIGATION_SCAN_ID) }}>
                        <Text>ID Number</Text>
                    </Button>
                    <Button active>
                        <Text>Camera</Text>
                    </Button>
                </FooterTab>
                </Footer>
            </Container>
        );
    }
}