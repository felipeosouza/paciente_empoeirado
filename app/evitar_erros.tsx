import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, Animated, Easing } from "react-native";
import Topico from "@/components/topic/Topico";
import { width, height } from "@/constants/Dimensions";
import { clamp } from "@/functions/clamp";
import IconText from "@/components/topic/IconText";
import {
  ContentContainer,
  ContentText,
} from "@/components/topic/ContentContainer";

export default function EvitarErros() {
  const scaleValue = useRef(new Animated.Value(0)).current; // Inicializa o valor de escala

  useEffect(() => {
    // Animação de escala ao montar o componente
    Animated.timing(scaleValue, {
      toValue: 1, // Valor final da escala (1 = tamanho original)
      duration: 300, // Duração da animação em milissegundos
      useNativeDriver: true, // Usa o driver nativo para melhor performance
      easing: Easing.out(Easing.ease),
    }).start();
  }, [scaleValue]);

  return (
    <>
      <Topico title="Como evitar erros de medição?" videoId="12345">
        <ContentContainer>
          <ContentText>
            A administração de medicamentos é um dos principais procedimentos
            realizados nos serviços de saúde. No entanto, erros relacionados a
            esse processo podem causar sérias consequências à sua saúde.
          </ContentText>
          <ContentText bold>
            Conheça um pouquinho sobre os 9 (nove) certos para uma administração
            segura de medicamentos (Anvisa, 2017), conforme a figura abaixo:
          </ContentText>
{/*           <ContentText
            customStyle={styles.rectangleText}
          >
            1. Certo medicamento{"\n"}
            2. Certa dose{"\n"}
            3. Certo paciente{"\n"}
            4. Certa via{"\n"}
            5. Certo horário{"\n"}
            6. Certa documentação{"\n"}
            7. Certa ação{"\n"}
            8. Certa resposta{"\n"}
            9. Certa forma de dispensação
          </ContentText> */}
        </ContentContainer>
        <Animated.Image
          source={require("@/assets/images/admSegura.png")}
          style={[styles.img, { transform: [{ scale: scaleValue }] }]}
          resizeMode="contain"
        />
        <ContentContainer>
          <ContentText bold>
            Para evitar erros relacionados a administração de medicamentos, você
            poderá contribuir realizado as seguintes perguntas (Anvisa, 2017):
          </ContentText>

          <IconText
            icon={"questioncircle"}
            content="“Posso dar uma olhada no rótulo do medicamento?”"
          />
          <IconText
            icon={"questioncircle"}
            content="“Este medicamento é realmente destinado a mim?”"
          />
          <IconText
            icon={"questioncircle"}
            content="“Como é o nome do medicamento?”"
          />
          <IconText icon={"questioncircle"} content="“Para que ele serve?”" />
          <IconText
            icon={"questioncircle"}
            content="“Como devo utilizá-lo e por quanto tempo?”"
          />
          <IconText
            icon={"questioncircle"}
            content="“Qual horário devo tomá-lo?”"
          />
          <IconText
            icon={"questioncircle"}
            content="“Quais efeitos pode causar?”"
          />
          <IconText
            icon={"questioncircle"}
            content="“Você já higienizou suas mãos antes de administrar o medicamento?”"
          />
        </ContentContainer>
      </Topico>
    </>
  );
}

const styles = StyleSheet.create({
  img: {
    maxWidth: "100%",
    alignSelf: "center",
    width: width,
    height: (403 / 612) * width,
    marginBottom: height * 0.025,
  },

  rectangleText: {
    color: "#FFFFFF",
    fontFamily: "GolosText",
    height: "auto",
    alignSelf: 'flex-start',
    fontSize: clamp(width * 0.05, 20),
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.05,
    textAlign: "left",
    lineHeight: height * 0.04
  },
});
