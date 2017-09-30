import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet
} from 'react-native';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';
import {
    Scene,
    Router,
    Actions,
    Reducer,
    ActionConst,
    Overlay,
    Tabs,
    Modal,
    Drawer,
    Stack,
    Lightbox,
  } from 'react-native-router-flux';

import Home from './screens/home';
import QrCreateScreen from './screens/qrCreateScreen';

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarStyle: {
        backgroundColor: '#eee',
    },
    tabBarSelectedItemStyle: {
        backgroundColor: '#ddd',
    },
});

const reducerCreate = params => {
    const defaultReducer = new Reducer(params);
        return (state, action) => {
            console.log('ACTION:', action);
            return defaultReducer(state, action);
    };
};

const QR_Generator = (props) => {
    return (
        <Router createReducer={reducerCreate}>
            <Overlay>
                <Modal 
                    hideNavBar
                    transitionConfig={() => ({ screenInterpolator: CardStackStyleInterpolator.forFadeFromBottomAndroid })}
                >
                    
                        <Stack
                            hideNavBar
                            key="root"
                            titleStyle={{ alignSelf: 'center' }}
                        >
                            <Scene key="home" component={Home} title="QR-Generator"/>
                            <Scene key="qrCreate" component={QrCreateScreen} title="Create QR Code."/>
                        </Stack>
                    
                </Modal>
            </Overlay>
        </Router>
    );
};

export default QR_Generator;