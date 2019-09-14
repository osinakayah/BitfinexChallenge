import React, {Component} from 'react';
import {Text, View, Button, Alert} from "react-native";

export default  class LaunchScreen extends Component{

    render() {

        return (
            <View style={{marginTop: 30}}>
                <Button
                    title="Press Nora, what"
                    onPress={() => {

                        this.props.navigation.navigate("LaunchScreen2")
                    }}
                />
            </View>
        )
    }
}