import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import {Animated, Easing} from 'react-native';
import HomeScreen from '../Screens/HomeScreen';
import DetailScreen from '../Screens/DetailScreen'

export default AppMain = createStackNavigator({
    HomeScreen:{
        getScreen: () => HomeScreen,
    },
    DetailScreen:{
        getScreen: () => DetailScreen,
    }
},{
    mode: 'card',
    navigationOptions: params => ({
        gesturesEnabled: true,
        gesturesDirection: 'inverted',
    }),
    transitionConfig: () => ({
        transitionSpec: {
            duration: 300,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true,
        },
        screenInterpolator: sceneProps => {
            const { layout, position, scene } = sceneProps

            const thisSceneIndex = scene.index
            const width = layout.initWidth

            const translateX = position.interpolate({
                inputRange: [thisSceneIndex - 1, thisSceneIndex],
                outputRange: [width, 0],
            })

            return { transform: [ { translateX } ] }
        },
        headerTitleInterpolator: sceneProps => {
            const { layout, position, scene } = sceneProps;
            const { index } = scene;

            return {
                opacity: position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [ 0, 1, 0],
                }),
                transform: [{
                    translateX: position.interpolate({
                      inputRange: [index - 1, index, index + 1],
                      outputRange: [-50, 0, 50],
                    }),
                }]
            };
        },
    }),
});
