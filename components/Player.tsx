import { height, width } from "@/constants/Dimensions";
import React, { useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

// Definindo os tipos de props
interface PlayerProps {
  videoId?: string;
  isVisible: boolean; // O booleano que indica se o player está ativo
  scaleFactor?: number;
}

function Player({ videoId, isVisible, scaleFactor = 0.92 }: PlayerProps) {
  const playerWidth = scaleFactor * width;
  const playerHeight = (9 / 16) * playerWidth;
  const [isLoading, setIsLoading] = useState(true);
  const loadingSize = 36;

  return (
    <>
      {isVisible && videoId ? (
        <View style={styles.player}>
          <YoutubePlayer
            width={playerWidth}
            height={playerHeight}
            play={isVisible}
            videoId={'aTW45U4xq1g'} // Passa o ID do vídeo extraído
            mute
            onReady={() => setIsLoading(false)}
          />
          {isLoading ? (
            <ActivityIndicator
              size={loadingSize}
              color={"#0073B5"}
              style={{
                position: "absolute",
                top: (playerHeight - loadingSize) / 2,
                left: (playerWidth - loadingSize) / 2,
              }}
            />
          ) : null}
        </View>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  player: {
    marginBottom: height * 0.02,
  },
});

export default Player;
