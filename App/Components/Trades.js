import React,{Component} from 'react'
import {Text, View} from "react-native";
import {Colors, Fonts} from "../Themes";
import {Col, Grid, Row} from "react-native-easy-grid";
import {Icon} from "native-base";
import TradesItem from "./TradesItem";
import VerticalDivier from "./VerticalDivider";

export default class Trades extends Component{
    render() {
        return (
            <View style={{flex: 1}}>
                <Grid style={{
                    paddingTop: 15,
                    backgroundColor: Colors.colorPrimaryDarker,
                    paddingBottom: 12,
                }}>
                    <Row>
                        <Col size={5}>
                            <View style={{width: 3}}/>
                            <Icon name={'chevron-down'} type={'Feather'}
                                  style={{fontSize: Fonts.size.h6, color: Colors.white}}/>
                        </Col>

                        <Col size={60}>
                            <Text style={{color: Colors.white, fontSize: Fonts.size.small, fontWeight: 'bold'}}> TRADES</Text>
                        </Col>
                        <Col size={20}>
                            <Row style={{alignSelf: 'flex-end'}}>
                                <Text style={{color: Colors.white, fontSize: Fonts.size.small}}>Market</Text>
                                <View style={{width: 3}}/>
                                <Text style={{color: Colors.white, fontSize: Fonts.size.small}}>Yours</Text>
                                <View style={{width: 3}}/>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
                <VerticalDivier />
                <Grid style={{
                    paddingTop: 7,
                    backgroundColor: Colors.colorPrimaryDarker,
                    paddingBottom: 5,
                }}>
                    <Row>
                        <Col size={33}>
                            <View style={{width: 3}}/>
                            <Text style={{color: Colors.white, fontSize: Fonts.size.small}}> TIME</Text>
                        </Col>

                        <Col size={33}>
                            <Text style={{color: Colors.white, fontSize: Fonts.size.small, }}> PRICE</Text>
                        </Col>
                        <Col size={33}>
                            <Text style={{color: Colors.white, fontSize: Fonts.size.small, textAlign: 'right'}}> AMOUNT</Text>
                        </Col>
                    </Row>
                </Grid>
                <TradesItem/>
                <TradesItem/>
                <TradesItem/>
            </View>
        )
    }
}
