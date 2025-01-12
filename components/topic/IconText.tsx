import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import { width, height } from '@/constants/Dimensions';
import { clamp } from '@/functions/clamp';
import { AntDesign } from '@expo/vector-icons';

interface IconProp{
    content: string;
    icon: string | any;
    onPress?: () => {}
}

export default function IconText({content, icon, onPress}: IconProp){
    return <Pressable onPress={onPress} style={styles.row}>
        <AntDesign name={icon} size={24} color="white"/>
    <Text style={styles.text}>{content}</Text>
    </Pressable>
}

const styles = StyleSheet.create({
    row: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: width * 0.04,
    },

    text: {
        color: "#FFFFFF",
        fontFamily: "GolosText",
        alignSelf: "center",
        fontSize: clamp(width * 0.05, 20),
        paddingVertical: height * 0.016,
        paddingLeft: width * 0.03,
        paddingRight: width * 0.05,
        textAlign: "left",
    },
})