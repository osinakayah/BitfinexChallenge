import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LaunchScreen from '../Containers/LaunchScreen'

import LaunchScreen2 from '../Containers/LaunchScreen2'

import styles from './Styles/NavigationStyles'



// Manifest of possible screens
const PrimaryNav = createStackNavigator({
    LaunchScreen: { screen: LaunchScreen },
    LaunchScreen2: {screen: LaunchScreen2}
}, {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'LaunchScreen',
    navigationOptions: {
        headerStyle: styles.header
    }
})

export default createAppContainer(PrimaryNav)
