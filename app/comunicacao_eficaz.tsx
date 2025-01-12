import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Topico from "@/components/topic/Topico";
import IconText from "@/components/topic/IconText";
import { ContentContainer } from "@/components/topic/ContentContainer";

export default function ComunicacaoEficaz() {
  return (
    <>
      <View style={styles.screenContainer}>
        <Topico title="Comunicação eficaz" videoId="12345">
          <ContentContainer>
            <IconText
              icon={"checkcircle"}
              content="Diversas formas de comunicação precisam ocorrer adequadamente para garantir o entendimento entre as pessoas."
            />
            <IconText
              icon={"checkcircle"}
              content="Todo profissional de saúde que realizar seu atendimento deve registrar as informações no prontuário e comunicá-las à equipe do próximo plantão."
            />
            <IconText
              icon={"exclamationcircle"}
              content="Por exemplo: a equipe de enfermagem que trabalha das 7h às 19h precisa informar todas as intervenções, ocorrências e observações relacionadas à sua assistência para a equipe do plantão noturno, que trabalha das 19h às 7h."
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
});
