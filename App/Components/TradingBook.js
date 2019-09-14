import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Col, Row, Grid} from "react-native-easy-grid";
import {Icon} from 'native-base';
import {Colors, Metrics, Fonts} from '../Themes'
import TradingBookItemBuy from "./TradingBookItemBuy";

export default class TradingBook extends Component {

    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                <Grid style={{
                    paddingTop: 7,
                    backgroundColor: Colors.colorPrimaryDarker,
                    paddingBottom: 5,
                }}>
                    <Row>
                        <Col size={5}>
                            <Icon name={'chevron-down'} type={'Feather'}
                                  style={{fontSize: Fonts.size.h6, color: Colors.white}}/>
                        </Col>

                        <Col size={60}>
                            <Text style={{color: Colors.white, fontSize: Fonts.size.small, fontWeight: 'bold'}}> TRADING
                                BOOK</Text>
                        </Col>
                        <Col size={20}>
                            <Row style={{alignSelf: 'flex-end'}}>
                                <Icon name={'minus'} type={'Feather'}
                                      style={{fontSize: Fonts.size.h6, color: Colors.white}}/>
                                <View style={{width: 12}}/>
                                <Icon name={'plus'} type={'Feather'}
                                      style={{fontSize: Fonts.size.h6, color: Colors.white}}/>
                                <View style={{width: 3}}/>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
                <View
                    style={{
                        marginTop: 1,
                        marginBottom: 1,
                        borderBottomColor: Colors.colorPrimary,
                        borderBottomWidth: 1,
                    }}
                />
                <Grid>
                    <Row>
                        <Col>
                            <LeftSubHeader left={'TOTAL'} right={'PRICE'}/>
                            <TradingBookItemBuy/>
                        </Col>
                        <Col>
                            <RightSubHeader left={'PRICE'} right={'TOTAL'}/>
                        </Col>
                    </Row>
                </Grid>
            </View>
        )
    }
}
const LeftSubHeader = (props) => {
    return (
        <Row style={{display: 'flex', direction: 'row', flexWrap: 'wrap', paddingTop: 7,
            backgroundColor: Colors.colorPrimaryDarker,
            paddingBottom: 5,}}>
            <Col size={45}>
                <Text style={{color: Colors.white, fontSize: Fonts.size.small,}}>{props.left}</Text>
            </Col>
            <Col size={45}>
                <Text style={{color: Colors.white, textAlign: 'right', fontSize: Fonts.size.small,}}>{props.right}</Text>
            </Col>
            <Col size={10}/>
        </Row>
    )
}

const RightSubHeader = (props) => {
    return (
        <Row style={{display: 'flex', direction: 'row', flexWrap: 'wrap', paddingTop: 7,
            backgroundColor: Colors.colorPrimaryDarker,
            paddingBottom: 5,}}>
            <Col size={10}/>
            <Col size={45}>
                <Text style={{color: Colors.white, fontSize: Fonts.size.small,}}>{props.left}</Text>
            </Col>
            <Col size={45}>
                <Text style={{color: Colors.white, textAlign: 'right', fontSize: Fonts.size.small,}}>{props.right}</Text>
            </Col>
        </Row>
    )
}

