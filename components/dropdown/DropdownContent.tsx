import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { clamp } from '@/functions/clamp';
import { height, width } from '@/constants/Dimensions';
import Feather from '@expo/vector-icons/Feather';

interface props{
    bold?: string;
    text?: string;
    showIcon?: boolean;
    hideUpperBorders?: boolean;
    hideVerticalBorders?: boolean;
    hideDownBorders?: boolean;
}

export default function OpenDropdown({bold, text, showIcon, hideUpperBorders, hideVerticalBorders, hideDownBorders}:props){
    return <>
    <View style={[styles.openDropdown, hideUpperBorders && styles.noUpperBorders, hideVerticalBorders && styles.noVerticalBorders, hideDownBorders && styles.noDownBorders]}>
        <View style={styles.row}>
        {showIcon && (<Feather name="square" style={styles.icon} size={clamp(width*0.08, 24)} color="black" />)}
        <Text style={styles.boldText}>{bold}</Text>
        </View>
        <Text style={[styles.normalText, text? null : styles.noText]}>{text}</Text>
    </View>
    </>
}

const styles = StyleSheet.create({
    icon: {
        paddingTop: clamp(height*0.0025,8),
        paddingRight: width*0.02,
    },

    row: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
    },

    openDropdown: {
        width: '100%',
        height: 'auto',
        backgroundColor: '#A3C9EC',
        alignSelf: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingHorizontal: width*0.04,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'black',
    },

    noUpperBorders: {
        borderTopWidth: 0,
    },

    noVerticalBorders: {
        borderTopWidth: 0,
        borderBottomWidth: 0,
    },

    noDownBorders: {
        borderBottomWidth: 0,
    },

    boldText: {
        color: "#000000",
        fontFamily: "GolosText",
        fontWeight: 'bold',
        fontSize: clamp(width*0.05, 24),
        flexShrink: 1,
        flexWrap: 'wrap',
    },

    normalText: {
        color: "#000000",
        fontFamily: "GolosText",
        fontWeight: '400',
        fontSize: clamp(width*0.05, 24),
        paddingLeft: width*0.048,
        flexShrink: 1,
        flexWrap: 'wrap',
        textAlign: 'left',
    },

    noText: {
        height: 0
    }
})