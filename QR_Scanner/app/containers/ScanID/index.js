import React, { Component } from 'react';
import * as types from '../../actions/types';
import {
   Container, Header, Left, Body, Right, Title,
   Content, View, Form, Item, Label, Input,
   Button, Text, Footer, FooterTab
} from 'native-base';
import { styles } from './style';

export default class ScanID extends Component<{}> {
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
                <Header>
                    <Left>
                        <Button transparent 
                            onPress={() => { this.props.logout() }}>
                            <Text>Logout</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Scan</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>ID Number:</Label>
                            <Input maxLength={13}/>
                        </Item>
                    </Form>
                    <Button style={styles.btn} full>
                        <Text>Submit</Text>
                    </Button>
                </Content>
                <Footer>
                <FooterTab>
                    <Button active>
                        <Text>ID Number</Text>
                    </Button>
                    <Button onPress={() => { this.props.navigate(types.NAVIGATION_SCAN_QR) }}>
                        <Text>Camera</Text>
                    </Button>
                </FooterTab>
                </Footer>
            </Container>
        );
    }
}