import React, { Component } from 'react';
import * as types from '../../actions/types';
import {
   Container, Header, Left, Body, Right, Title
} from 'native-base';
import { styles } from './style';

export default class Login extends Component<{}> {
    render() {
        console.log(styles);
        return (
            <Container>
                <Header>
                    <Left/>
                    <Body>
                        <Title>Login</Title>
                    </Body>
                    <Right/>
                </Header>
            </Container>
        );
    }
}