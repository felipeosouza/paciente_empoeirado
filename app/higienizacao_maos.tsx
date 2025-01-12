import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Text, Animated, Easing } from "react-native";
import { ContentContainer, ContentText } from "@/components/topic/ContentContainer";
import Topico from "@/components/topic/Topico";
import { width } from "@/constants/Dimensions";
import { clamp } from "@/functions/clamp";
import IconText from "@/components/topic/IconText";

export default function HigienizacaoMaos() {
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
      <Topico
        videoId="12345"
        title="Higienização das mãos como estratégia para evitar infecções"
      >
        <ContentContainer>
        <ContentText>
          {
            "A higienização das mãos (HM) é a medida mais antiga, simples, de baixo custo e eficaz para prevenir as Infecções Relacionadas à Assistência à Saúde (IRAS).\n\nVocê deve ser o protagonista do seu cuidado!\n\nFique atento e observe se os profissionais de saúde, acompanhantes e visitantes estão higienizando as mãos antes e após os cuidados. A Organização Mundial da Saúde (OMS) e a Agência Nacional de Vigilância Sanitária (Anvisa) recomendam cinco momentos essenciais para a higienização das mãos:"
          }
        </ContentText>
        </ContentContainer>

        <View style={styles.row}>
          <Text style={styles.whenText}>Quando?</Text>
          <Text style={styles.imgTitle}>
            Seus 5 momentos para a higienização das mãos
          </Text>
        </View>

        <Animated.Image
          source={require("@/assets/images/higiene5.png")}
          style={[styles.img, { transform: [{ scale: scaleValue }] }]}
          resizeMode="contain"
        />
        <ContentContainer>
          <ContentText bold>
            {
              "Você poderá realizar as perguntas e observações abaixo aos profissionais de saúde para garantir essa prática (Anvisa, 2017):"
            }
          </ContentText>
          <IconText
            icon={"questioncircle"}
            content="“Você já higienizou suas mãos?”"
          />
          <IconText
            icon={"questioncircle"}
            content="“Eu já te lembrei de higienizar as mãos?”"
          />
          <IconText
            icon={"questioncircle"}
            content='“Obrigado por você ter higienizado as suas mãos antes de me atender!"'
          />
        </ContentContainer>
      </Topico>
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    width: "100%",
    flexDirection: "row",
    gap: width * 0.03,
  },

  img: {
    maxWidth: "100%",
    width: width,
    height: (862 / 1198) * width,
  },

  whenText: {
    color: "#018786",
    fontWeight: "600",
    fontSize: clamp(width * 0.05, 24),
  },

  imgTitle: {
    width: width * 0.7,
    fontWeight: "bold",
    fontSize: clamp(width * 0.05, 24),
  },
});
