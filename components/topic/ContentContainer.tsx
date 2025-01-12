import React, { Children } from "react";
import { StyleSheet, View, Text, ViewProps, TextProps, TextStyle } from "react-native";
import { height, width } from "@/constants/Dimensions";
import { clamp } from "@/functions/clamp";

type ContentContainerProps = {
  content?: string;
  children?: React.ReactNode;
};

type ContentTextProps = {
  bold?: boolean;
  children?: React.ReactNode;
  customStyle?: TextStyle | TextStyle[];
};

function ContentText({ children, bold, customStyle }: ContentTextProps) {
  const styles = StyleSheet.create({
    rectangleText: {
      color: "#FFFFFF",
      fontFamily: "GolosText",
      height: "auto",
      alignSelf: "center",
      fontSize: clamp(width * 0.05, 20),
      paddingVertical: height * 0.02,
      paddingHorizontal: width * 0.03,
      textAlign: "left",
    },

    bold: {
      fontWeight: "bold",
    },
  });

  return (
    <Text style={{...styles.rectangleText, ...(bold && styles.bold), ...customStyle}}>{children}</Text>
  );
}

function ContentContainer({ children }: ContentContainerProps) {
  const styles = StyleSheet.create({
    rectangle: {
      width: "100%",
      height: "auto",
      backgroundColor: "#285366",
      alignSelf: "center",
      marginBottom: height * 0.025,
      borderRadius: 8,
    },
  });

  return (
    <>
      <View style={styles.rectangle}>{children}</View>
    </>
  );
}

export { ContentContainer, ContentText }
