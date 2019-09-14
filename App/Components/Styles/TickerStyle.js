import { StyleSheet } from 'react-native'
import {Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    gridStyle: {
        paddingTop: Metrics.marginVertical,
        paddingBottom: Metrics.marginVertical,

        marginTop: Metrics.marginSeparator,
        backgroundColor: Colors.colorPrimaryDarker
    },
    iconStyle: {
        paddingTop: Metrics.marginVertical,
        color: Colors.white
    },
    textStyle: {
        color: Colors.white,
        fontSize: Fonts.size.small
    },

    highLightTextStyle: {
        color: Colors.white,
        fontSize: Fonts.size.small
    },

    toRight: {
        textAlign: 'right'
    }
})