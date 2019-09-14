import React, {Component} from  'react';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon,  } from 'native-base';
import Ticker from "../Components/Ticker";
import styles from './Styles/CoinPairScreenStyles'
import Colors  from '../Themes/Colors'
import TradingBook from "../Components/TradingBook";
import { View } from 'react-native';
export default class  CoinPairScreen extends  Component{
    constructor(props){
        super(props);
        this.state = {
            isConnected: false
        }
        this.socket = new WebSocket('wss://api-pub.bitfinex.com/ws/2');
    }
    componentDidMount() {
        this.socket.onopen = () => {
            // connection opened
            console.log("connection opened");

            let msg = JSON.stringify({
                event: 'subscribe',
                channel: 'ticker',
                symbol: 'tBTCUSD'
            })
            this.socket.send(msg)
            this.socket.onmessage = (e) => {
                console.log(JSON.parse(e.data))
                const jsonObjecy = JSON.parse(e.data);
                if (jsonObjecy[1] && jsonObjecy[1][0]){
                    console.log(console.log(jsonObjecy[1][0]));
                }
            };
        };
    }
    componentWillUnmount() {
        this.socket.close();
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
                    <View
                        style={{
                            marginTop: 1,
                            marginBottom: 1,
                            borderBottomColor: Colors.colorPrimary,
                            borderBottomWidth: 7,
                        }}
                    />
                    <TradingBook/>
                </Content>

            </Container>
        );
    }
}