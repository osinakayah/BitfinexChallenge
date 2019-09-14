import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CoinPairScreen from '../Containers/CoinPairScreen'



import styles from './Styles/NavigationStyles'



// Manifest of possible screens
const PrimaryNav = createStackNavigator({
    CoinPairScreen: { screen: CoinPairScreen },
}, {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'CoinPairScreen',
    navigationOptions: {
        headerStyle: styles.header
    }
})

export default createAppContainer(PrimaryNav)
