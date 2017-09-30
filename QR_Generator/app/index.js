import React, { Component } from 'react';
import { View } from 'react-native';
import {
	Router,
	Stack,
	Scene,
	Overlay,
	Modal,
	Lightbox
} from 'react-native-router-flux';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

import Home from './screens/home';
import Disclaimer from './screens/disclaimer';

import PersonalDetails from './screens/personalDetails';

const reducerCreate = params => {
	const defaultReducer = new Reducer(params);
	return (state, action) => {
		//console.log('ACTION:', action);
		return defaultReducer(state, action);
	};
};

const QR_Generator = (props) => {
	return (
		<Router>
			<Overlay>
				<Modal hideNavBar transitionConfig={() => ({ screenInterpolator: CardStackStyleInterpolator.forFadeFromBottomAndroid })}>
					<Lightbox>
					<Stack hideNavBar key="root">
						<Scene key="Home" component={Home}/>
						<Scene key="Disclaimer" component={Disclaimer}/>
						<Scene key="PersonalDetails" component={PersonalDetails} />
					</Stack>
					</Lightbox>
				</Modal>
			</Overlay>
		</Router>
	);
};

export default QR_Generator;