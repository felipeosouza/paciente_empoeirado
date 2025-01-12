import React from 'react';
import { height, width } from "@/constants/Dimensions";
import { StyleSheet, Image, Pressable} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';


const HelpButton = () => {
    const onPress = () => {
        router.navigate('/referencias')
    }

    return (
        <Pressable style={styles.button} onPress={onPress}>
            <AntDesign name='questioncircle' size={32} color={'#0073B5'}/>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        //right: width * 0.035,
        top: "92%",
        right: 10,
        alignSelf: 'flex-end',
        marginLeft: '5%'
    },
});

export default HelpButton;