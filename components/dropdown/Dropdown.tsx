import React, { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, Platform, View, Text, Pressable, LayoutAnimation, UIManager } from 'react-native';
import { clamp } from '@/functions/clamp';
import { height, width } from '@/constants/Dimensions';
import { AntDesign } from '@expo/vector-icons';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface DropdownProp{
    title: string;
    text: string;
    children: React.ReactNode;
}

export default function Dropdown({title, text, children}:DropdownProp){
    const [isExpanded, setIsExpanded] = useState(false);
    
    const toggleDropdown = () => {
        LayoutAnimation.configureNext({...LayoutAnimation.Presets.easeInEaseOut, duration: 500});
        setIsExpanded(!isExpanded);
    };

    //Fazendo a primeira animação também ter animação
    useEffect(() => {
        LayoutAnimation.configureNext({...LayoutAnimation.Presets.easeInEaseOut, duration: 500});
    }, [])

    return <>
    <Text style={styles.titleText}>{title}</Text>
    <Pressable style={[styles.dropdownContainer, isExpanded? styles.expandedContainer : null]} onPress={toggleDropdown} android_ripple={{ color: 'transparent' }} onPressIn={() => {}} onPressOut={() => {}}>
        <Text style ={styles.dropdownText}>{text}</Text>
        <AntDesign name={isExpanded? 'up' : 'down'} size={width*0.05} color="white"/>
    </Pressable>

    {isExpanded && (
        <View style={styles.childrenContainer}>
            {children}
        </View>
    )}
    </>
}

const styles = StyleSheet.create({
    dropdownContainer: {
        width: '100%',
        backgroundColor: "#0073B5",
        paddingVertical: height*0.02,
        paddingHorizontal: width*0.04,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderRadius: 5
    },
    expandedContainer: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },
    titleText: {
        marginLeft: 0.04*width,
        marginTop: 0.024*height,
        paddingBottom: height*0.01,
        color: "#018786",
        fontFamily: "GolosText",
        fontWeight: '700',
        fontSize: clamp(width*0.05, 24),
        width: '100%'
    },

    dropdownText: {
        color: "#FFFFFF",
        fontFamily: "GolosText",
        fontSize: clamp(width*0.05, 24),
        //justifyContent: 'center'
    },

    childrenContainer: {
        width: '100%',
        alignSelf: 'center',
        backgroundColor: '#F0F8FF',
        overflow: 'hidden',
        borderWidth: 1.3,
        borderBottomWidth: 0.7,
        borderTopWidth: 0,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    }
})