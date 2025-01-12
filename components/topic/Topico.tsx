import { View, StyleSheet, ScrollView } from "react-native";
import TitleSection from "../TitleSection";
import Player from "../Player";
import LibrasButton from "../buttons/LibrasButton";
import React, { useRef, useState } from "react";
import { height } from "@/constants/Dimensions";

interface TopicoProps {
  title: string;
  children: React.ReactNode;
  videoId?: string;
}

export default function Topico({ title, videoId, children }: TopicoProps) {
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);
  const scrollRef = useRef<ScrollView>(null);

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({ y: 0 });
  };

  const togglePlayerVisibility = () => {
    setIsPlayerVisible(prevState => !prevState); // Alterna entre true e false
    scrollToTop();
  };

  return (
    <View>
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={[
          styles.container,
          { paddingBottom: videoId ? height * 0.065 : null },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <TitleSection title={title} />
        <Player isVisible={isPlayerVisible} videoId={videoId} />
        {children}
      </ScrollView>
      {videoId ? <LibrasButton onPress={togglePlayerVisibility} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DFF8FC",
    paddingHorizontal: "3%",
    alignItems: "center",
  },
});
