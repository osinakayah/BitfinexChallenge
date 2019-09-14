import React from 'react';
import Colors from "../Themes/Colors";
import {View} from "react-native";

const SectionDivider = () =>
    <View
        style={{
            marginTop: 0.5,
            marginBottom: 0.5,
            borderBottomColor: Colors.colorPrimary,
            borderBottomWidth: 7,
        }}
    />


export  default SectionDivider