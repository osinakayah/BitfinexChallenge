import { StyleSheet } from 'react-native'
import { Metrics, Colors } from "../../Themes"
export default StyleSheet.create({
    container: {
        flex: 1,
        // height: 70,
        borderRadius: Metrics.smallMargin,
        borderRightColor: Colors.colorPrimary,
        borderWidth: 1,
        marginTop: Metrics.marginSeparator,
        marginBottom: Metrics.marginSeparator,
        // position: 'relative',
        backgroundColor: 'green',


        // paddingLeft: Metrics.mediumMargin,
        // paddingRight: Metrics.mediumMargin,
        paddingTop: 7,
        paddingBottom: 16
    }
})