import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Colors, Fonts} from "../Themes";
import {Col, Grid, Row} from "react-native-easy-grid";
import {Icon} from "native-base";


export  default class TradesItem extends Component{
    render() {
        return (
            <View style={{flex: 1, marginTop: 0.5,}}>
                <Grid style={{
                    paddingTop: 7,
                    backgroundColor: Colors.colorPrimaryDarker,
                    paddingBottom: 5,
                }}>
                    <Row>
                        <Col size={33}>
                            <Row style={{diplay: 'flex', direction: 'row'}}>
                                <Icon style={{fontSize: 12, color: 'green'}} name={'chevron-thin-up'} type={'Entypo'}/>
                                <Text style={{color: Colors.white, fontSize: Fonts.size.small}}> 15:30:35</Text>
                            </Row>
                        </Col>

                        <Col size={33}>
                            <Text style={{color: Colors.white, fontSize: Fonts.size.small, }}> 10354</Text>
                        </Col>
                        <Col size={33}>
                            <Text style={{color: Colors.white, fontSize: Fonts.size.small, textAlign: 'right'}}> 0.1231</Text>
                        </Col>
                    </Row>
                </Grid>
            </View>
        )
    }
}