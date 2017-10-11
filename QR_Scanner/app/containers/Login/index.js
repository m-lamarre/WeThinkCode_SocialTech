import React, { Component } from 'react';
import * as types from '../../actions/types';
import {
   Container, Header, Left, Body, Right, Title,
   Content, View, Form, Item, Label, Input,
   Button, Text, Toast
} from 'native-base';
import { styles } from './style';

export default class Login extends Component<{}> {
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
                    <Left/>
                    <Body>
                        <Title>Login</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Username:</Label>
                            <Input autoCapitalize='none'
                                onChangeText={(value) => { this.setState({username: value}) }}/>
                        </Item>
                        <Item floatingLabel>
                            <Label>Password:</Label>
                            <Input secureTextEntry={true}
                                onChangeText={(value) => {this.setState({password: value}) }}/>
                        </Item>
                    </Form>
                    <View style={styles.btn_main_container}>
                        <View style={styles.btn_container}>
                            <Button primary bordered full
                                style={styles.btn}
                                onPress={() => { this.props.navigate(types.NAVIGATION_SIGNUP) }}>
                                <Text>Sign-up</Text>
                            </Button>
                        </View>
                        <View style={styles.btn_container}>
                            <Button primary full
                                style={styles.btn}
                                onPress={() => { 
                                    this.props.login({
                                        username: this.state.username,
                                        password: this.state.password
                                    });
                                }}>
                                <Text>Login</Text>
                            </Button> 
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}