import React from "react";
import { StyleSheet, Text } from "react-native";
import {
  ContentContainer,
  ContentText,
} from "@/components/topic/ContentContainer";
import Topico from "@/components/topic/Topico";
import { width, height } from "@/constants/Dimensions";
import { clamp } from "@/functions/clamp";
import IconText from "@/components/topic/IconText";

export default function PrevenindoLesoes() {
  return (
    <>
      <Topico title="Prevenindo lesões por pressão e quedas" videoId="12345">
        <ContentContainer>
          <ContentText>
            Falhas no cuidado podem levar ao aparecimento de lesões e feridas na
            sua pele. Portanto, a identificação de estratégias precoce do risco
            e a implementação de estratégias de prevenção são de fundamental
            importância no serviço de saúde. Já as quedas, são consideradas a
            segunda principal causa de mortes por lesão não intencionais em todo
            o mundo.
          </ContentText>
          <ContentText bold>
            Vamos evitar esses agravos?
          </ContentText>
          <ContentText bold>
            Você poderá observar se os cuidados abaixo estão sendo realizados
            durante a sua assistência (Anvisa, 2017):
          </ContentText>

          <IconText
            icon={"questioncircle"}
            content={
              "“Se você não consegue se mover totalmente, os profissionais de saúde devem mudar sua posição no leito a cada 2 horas.”"
            }
          />
          <IconText
            icon={"questioncircle"}
            content={
              "“Limpar a sua pele sempre que estiver suja ou sempre que necessário com água morna e sabão neutro.”"
            }
          />
          <IconText
            icon={"questioncircle"}
            content={"“Utilizar hidratante na sua pele.”"}
          />
          <IconText
            icon={"questioncircle"}
            content={
              "“Evitar manter a pele úmida, trocando fraldas, quando necessário.”"
            }
          />
        </ContentContainer>
      </Topico>
    </>
  );
}

const styles = StyleSheet.create({
  contentText: {
    color: "#FFFFFF",
    fontFamily: "GolosText",
    alignSelf: "center",
    fontSize: clamp(width * 0.05, 20),
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.04,
    textAlign: "left",
  },

  bold: {
    fontWeight: "700",
    fontSize: clamp(width * 0.05, 24),
  },
});
