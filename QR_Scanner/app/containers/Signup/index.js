import React, { Component } from 'react';
import * as types from '../../actions/types';
import {
   Container, Header, Left, Body, Right, Title,
   Content, View, Form, Item, Label, Input,
   Button, Text, Icon
} from 'native-base';
import { styles } from './style';

export default class Signup extends Component<{}> {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent
                            onPress={() => { this.props.navigate(types.NAVIGATION_LOGIN) }}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Sign Up</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>HPCSA Number:</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label>E-mail:</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label>Username:</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label>Password:</Label>
                            <Input secureTextEntry={true}/>
                        </Item>
                        <Item floatingLabel>
                            <Label>Confirm Password:</Label>
                            <Input secureTextEntry={true}/>
                        </Item>
                    </Form>
                    <View style={styles.btn_main_container}>
                        <View style={styles.btn_container}>                            
                        </View>
                        <View style={styles.btn_container}>
                            <Button primary full
                                style={styles.btn}>
                                <Text>Sign Up</Text>
                            </Button> 
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}