import React from "react";
import { StyleSheet, View, Linking } from "react-native";
import Topico from "@/components/topic/Topico";
import IconText from "@/components/topic/IconText";
import { ContentContainer } from "@/components/topic/ContentContainer";

export default function ComunicacaoEficaz() {
  return (
    <>
      <View style={styles.screenContainer}>
        <Topico title="Referências">
          <ContentContainer>
            <IconText
              icon={"book"}
              content="ALVIM, A. L. S. et al. Segurança do paciente em serviços de saúde. Curitiba: Editora CRV, 2022."
            />
            <IconText
              icon={"book"}
              content="BRASIL. Agência Nacional de Vigilância Sanitária. Pacientes pela segurança do paciente em serviços de saúde: como posso contribuir para aumentar a segurança do paciente? Orientações aos pacientes, familiares e acompanhantes. Brasília: Anvisa, 2017."
            />
            <IconText
              icon={"book"}
              content="BRASIL. Agência Nacional de Vigilância Sanitária. Segurança do paciente: higienização das mãos. Brasília: Anvisa, 2007."
            />
            <IconText
              icon={"book"}
              content="CASTRO, E. M. et al. Patient empowerment, patient participation and patient-centeredness in hospital care: a concept analysis based on a literature review. Patient Education and Counseling, v. 99, n. 12, p. 1923-1939, 2016."
            />
            <IconText
              icon={"book"}
              content="HALVORSEN, K. et al. Empowerment in healthcare: a thematic synthesis and critical discussion of concept analyses of empowerment. Patient Education and Counseling, v. 103, n. 7, p. 1263-1271, 2020."
            />
            <IconText
              icon={"book"}
              content="WORLD HEALTH ORGANIZATION (WHO). World Alliance for Patient Safety. Forward programme – First Edition, 2008-2009. Geneva: WHO, 2008."
            />
            <IconText
              onPress={() =>
                Linking.openURL(
                  "http://bvsms.saude.gov.br/bvs/saudelegis/anvisa/2013/rdc0036_25_07_2013.html"
                )
              }
              icon={"book"}
              content="BRASIL. Agência Nacional de Vigilância Sanitária. RDC nº 36, de 25 de julho de 2013. Disponível em: http://bvsms.saude.gov.br/bvs/saudelegis/anvisa/2013/rdc0036_25_07_2013.html. Acesso em: 18 dez. 2024."
            />
            <IconText
              onPress={() =>
                Linking.openURL(
                  "https://www.who.int/news-room/fact-sheets/detail/falls"
                )
              }
              icon={"book"}
              content="WORLD HEALTH ORGANIZATION (WHO). Falls. 26 April 2021. Disponível em: https://www.who.int/news-room/fact-sheets/detail/falls. Acesso em: 18 dez. 2024."
            />
            <IconText
              onPress={() =>
                Linking.openURL(
                  "https://www.who.int/news-room/fact-sheets/detail/falls"
                )
              }
              icon={"book"}
              content="WORLD HEALTH ORGANIZATION (WHO). Falls. 16 January 2018. Disponível em: https://www.who.int/news-room/fact-sheets/detail/falls. Acesso em: 18 dez. 2024."
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
