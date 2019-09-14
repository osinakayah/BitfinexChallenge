import React, {Component} from 'react';
import {View, Button} from "react-native";
import i18n from '../Languages'

export default  class LaunchScreen extends Component{

    render() {

        return (
            <View style={{marginTop: 30}}>
                <Button
                    title={i18n.t('completeProfile')}
                    onPress={() => {

                        this.props.navigation.navigate("LaunchScreen2")
                    }}
                />
            </View>
        )
    }
}