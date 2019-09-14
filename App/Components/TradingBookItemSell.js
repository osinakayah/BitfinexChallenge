import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/TradingBookItemSellStyle'
import { Col, Grid } from "react-native-easy-grid";
import {Colors, Fonts, Metrics} from "../Themes";

export default class TradingBookItemSell extends Component {


    calculatePercentage = (total, actual) => {
        return (actual/total) * 100
    }

    render () {

        return (
            <View style={[styles.container,]}>
                <View style={{paddingTop: Metrics.doubleBaseMargin,  width: `${this.calculatePercentage(100, 10)}%`, backgroundColor: '#3f2932', position: 'absolute', top: 0, bottom: 0, right: 0, left: 0}}/>
                <Grid style={{margin: Metrics.smallMargin, position: 'absolute', top: 0, bottom: 0, right: 0, left: 0}}>
                    <Col size={10}/>
                    <Col size={45}>
                        <Text style={{fontSize: 9, color: Colors.white}}>975.6</Text>
                    </Col>

                    <Col size={45}>
                        <Text style={{color: Colors.white, fontSize: 9, textAlign: 'right'}}>12867</Text>
                    </Col>

                </Grid>
            </View>

        )
    }
}