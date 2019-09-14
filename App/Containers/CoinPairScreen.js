import React, {Component} from  'react';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon,  } from 'native-base';
import Ticker from "../Components/Ticker";
import styles from './Styles/CoinPairScreenStyles'
import Colors  from '../Themes/Colors'
import TradingBook from "../Components/TradingBook";
import Trades from "../Components/Trades";
import SectionDivider from "../Components/SectionDivier";
export default class  CoinPairScreen extends  Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Container style={styles.container}>
                <Header style={{ backgroundColor: Colors.colorPrimaryDarker }}
                        androidStatusBarColor={Colors.colorPrimaryDarker}>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                    <Title>BTC/USD 10366</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='bell' type={'EvilIcons'}/>
                        </Button>
                        <Button transparent>
                            <Icon name='star' type={'EvilIcons'} />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <Ticker/>
                    <SectionDivider/>

                    <TradingBook/>
                    <SectionDivider/>

                    <Trades/>
                </Content>

            </Container>
        );
    }
}