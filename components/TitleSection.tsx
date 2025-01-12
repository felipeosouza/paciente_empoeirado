import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { height } from "@/constants/Dimensions";
import { clamp } from "@/functions/clamp";

interface TitleSectionProps {
  title: string;
}

export default function TitleSection({ title }: TitleSectionProps) {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: height * 0.025,
    paddingHorizontal: '10%',
    width: '100%'
  },

  titleText: {
    color: "#000000",
    fontFamily: "Habibi",
    alignSelf: "center",
    fontSize: clamp(height * 0.027, 30),
    textAlign: 'center'
  },
});
