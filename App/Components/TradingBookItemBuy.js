import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/TradingBookItemBuyStyle'
import { Col, Grid } from "react-native-easy-grid";
import {Colors, Fonts, Metrics} from "../Themes";

export default class TradingBookItemBuy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelected: false
        }
    }

    // // Prop type warnings
    static propTypes = {
        rightText:  PropTypes.string,
        totalNumberOfPersons: PropTypes.number,
        numberOfPersons: PropTypes.number,

        optionIndexClicked: PropTypes.number
    }

    // Defaults for props
    static defaultProps = {
        rightText: "",
        actualWidth: 0,
        numberOfPersons: 0,
        optionIndexClicked: -1
    }

    calculatePercentage = (total, actual) => {
        return (actual/total) * 100
    }

    render () {

        return (
            <View style={[styles.container,]}>
                <View style={{paddingTop: Metrics.doubleBaseMargin,  width: `${this.calculatePercentage(100, 90)}%`, backgroundColor: Colors.colorPrimaryDarker, position: 'absolute', top: 0, bottom: 0, right: 0, left: 0}}/>
                <Grid style={{margin: Metrics.smallMargin, position: 'absolute', top: 0, bottom: 0, right: 0, left: 0}}>

                    <Col size={45}>
                        <Text style={{fontSize: 9, color: Colors.white}}>975.6</Text>
                    </Col>

                    <Col size={45}>
                        <Text style={{color: Colors.white, fontSize: 9, textAlign: 'right'}}>12867</Text>
                    </Col>
                    <Col size={10}/>

                </Grid>
            </View>

        )
    }
}