import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { height, width } from "@/constants/Dimensions";
import Topico from "@/components/topic/Topico";
import IconText from "@/components/topic/IconText";
import { clamp } from "@/functions/clamp";
import { ContentContainer, ContentText } from "@/components/topic/ContentContainer";

export default function VocePossuiUmaPulseiraIdentificacao() {
  return (
    <>
      <View style={styles.screenContainer}>
        <Topico
          title="Você possui uma pulseira de identificação?"
          videoId="12345"
        >
          <ContentContainer>
            <ContentText>{"O serviço de saúde deve realizar a sua identificação corretamente. Verifique se você está utilizando uma pulseira de identificação no pulso. Se sim, parabéns! Afinal, a presença desse dispositivo ajuda a evitar diversos erros, tais como:"}</ContentText>
            <IconText
              icon={"exclamationcircle"}
              content="Administração incorreta de medicamentos;"
            />
            <IconText
              icon={"exclamationcircle"}
              content="Cirurgias realizadas em locais errados;"
            />
            <IconText
              icon={"exclamationcircle"}
              content="Troca de exames laboratoriais;"
            />
            <IconText
              icon={"exclamationcircle"}
              content="Troca de bolsas de sangue, entre outros."
            />

            <Text style={[styles.rectangleText, styles.bold]}>
              {
                "Você pode fazer as seguintes perguntas aos profissionais de saúde para garantir uma identificação correta (Anvisa, 2017): "
              }
            </Text>

            <IconText
              icon={"questioncircle"}
              content='"Você conferiu meu nome antes de prestar este cuidado?"'
            />
            <IconText
              icon={"questioncircle"}
              content='"Este medicamento é realmente destinado a mim?"'
            />
            <IconText
              icon={"questioncircle"}
              content='"Podemos conferir o nome descrito na etiqueta do tubo de coleta de sangue?"'
            />
            <IconText
              icon={"questioncircle"}
              content='"Você percebeu que o paciente no leito ao lado tem um nome muito parecido com o meu? O meu é Ronaldo da Silva Junior, e o dele é Roberto da Silva Junior."'
            />
          </ContentContainer>
        </Topico>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#DFF8FC",
  },
  rectangleText: {
    color: "#FFFFFF",
    fontFamily: "GolosText",
    alignSelf: "center",
    fontSize: clamp(width * 0.05, 20),
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.04,
    textAlign: "left",
  },

  bold: {
    fontWeight: "bold",
  },
});
