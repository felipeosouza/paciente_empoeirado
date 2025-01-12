import React from "react";
import { height } from "@/constants/Dimensions";
import { View, StyleSheet, Text, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#018786",
    height: height * 0.08,
    width: "100%",
  },
  division: {
    width: '25%',
    height: '100%'
  }
});

export default ({}) => {
  //console.log(height - height*0.08);
  
  return (
    <View style={styles.container}>
        <Image
          source={require("@/assets/images/logo/logo.png")}
          style={{
            position: 'absolute',
            height: height * 0.065,
            width: height * 0.065,
            alignSelf: 'flex-start',
            marginLeft: '5%'
          }}
          resizeMode="contain"
        />

      <Text
        style={{
          fontFamily: "Habibi",
          fontSize: height * 0.025,
          color: "#FFF",
          textAlign: 'center',
        }}
      >
        Paciente Empoderado
      </Text>
    </View>
  );
};
