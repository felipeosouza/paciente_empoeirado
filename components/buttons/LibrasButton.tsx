import React from 'react';
import { height, width } from "@/constants/Dimensions";
import { TouchableOpacity, StyleSheet, Image} from 'react-native';

interface LibrasButtonProps {
    onPress: () => void
}

const LibrasButton: React.FC<LibrasButtonProps> = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Image source={require('../../assets/images/botaoLibras.png')} style={styles.img} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        right: width * 0.035,
        top: "90%",
        height: height * 0.065,
        width: height * 0.065,
        alignSelf: 'flex-start',
        marginLeft: '5%'
    },
    img:{
        height: height * 0.065,
        width: height * 0.065,
        opacity: 0.75,
    }
});

export default LibrasButton;