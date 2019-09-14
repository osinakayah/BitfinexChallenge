import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { Icon } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import {Colors, Fonts } from '../Themes/'
import styles from './Styles/TickerStyle'

export default class  Ticker extends Component{
    render() {
        return (
            <View styles={styles.container}>
                <Grid style={styles.gridStyle}>
                    <Row>
                        <Col size={10}>
                            <Icon name={'bitcoin'} type={'FontAwesome'} style={styles.iconStyle}/>
                        </Col>
                        <Col size={40}>
                            <Text style={[styles.textStyle, {fontWeight: '400'}]}>BTC/USD</Text>
                            <VolumeMetaComponent/>
                            <LowSalesMetaComponent/>
                        </Col>
                        <Col size={40}>
                            <Text style={[styles.textStyle, styles.toRight]}>10363</Text>
                            <PriceMetaComponent/>
                            <HighSalesMetaComponent/>
                        </Col>
                        <Col size={10}></Col>
                    </Row>
                </Grid>
            </View>
        )
    }
}

const VolumeMetaComponent = () => {
    return (
        <Row>
            <Text style={{color: Colors.dullTextColor, fontSize: Fonts.size.small}}>VOL </Text>
            <Text style={{color: Colors.white, fontSize: Fonts.size.small}}>2919.99 </Text>
            <Text style={{color: Colors.dullTextColor, fontSize: Fonts.size.small}}>BTC</Text>
        </Row>
    )
}

const LowSalesMetaComponent = () => {
    return (
        <Row>
            <Text style={{color: Colors.dullTextColor, fontSize: Fonts.size.small}}>LOW </Text>
            <Text style={{color: Colors.white, fontSize: Fonts.size.small}}>2919 </Text>
        </Row>
    )
}
const HighSalesMetaComponent = () => {
    return (
        <Row style={{alignSelf: 'flex-end'}}>
            <Text style={{color: Colors.dullTextColor, fontSize: Fonts.size.small}}>LOW </Text>
            <Text style={{color: Colors.white, fontSize: Fonts.size.small}}>2919 </Text>
        </Row>
    )
}


const PriceMetaComponent = () => {
    return (
        <Row style={{alignSelf: 'flex-end'}}>
            <Text style={{color: 'green', fontSize: Fonts.size.small, textAlign: 'right'}}>17.14 </Text>
            <Text style={{color: 'green', fontSize: Fonts.size.small, textAlign: 'right'}}>(0.17%)</Text>
        </Row>
    )
}


