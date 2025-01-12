import React from "react";
import { width } from "@/constants/Dimensions";
import { Text, StyleSheet, Pressable } from "react-native";
import { clamp } from "@/functions/clamp";

interface HomeButtonProps {
  content: string;
  onPress: () => void;
}

const HomeButton = ({ content, onPress }: HomeButtonProps) => {
  return <>
      <Pressable
        style={styles.button}
        onPress={onPress}
        android_ripple={{
          color: "#FFFFFF4F",
        }}
      >
        <Text style={styles.text}>{content}</Text>
      </Pressable>
    </>
};

const styles = StyleSheet.create({
  button: {
    width: clamp(0.71 * width, 500),
    height: "auto",
    backgroundColor: "#285366",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: width * 0.01,
    borderWidth: 1,
    borderColor: "black",

    shadowColor: "#000000",
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,

    elevation: 7,
  },

  text: {
    color: "#FFFFFF",
    fontFamily: "GolosText",
    alignSelf: "center",
    fontSize: clamp(width * 0.05, 24),
    textAlign: "center",
  },
});

export default HomeButton;
