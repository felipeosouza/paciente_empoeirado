import React from "react";
import {
  StyleSheet,
} from "react-native";
import { ContentContainer, ContentText } from "@/components/topic/ContentContainer";
import { clamp } from "@/functions/clamp";
import { height, width } from "@/constants/Dimensions";
import Dropdown from "@/components/dropdown/Dropdown";
import Identification from "@/components/dropdown/DropdownContents/Identification";
import Register from "@/components/dropdown/DropdownContents/Register";
import Confirmation from "@/components/dropdown/DropdownContents/Confirmation";
import Topico from "@/components/topic/Topico";

export default function CirurgiaSegura() {
  return (
    <>
      <Topico title="Cirurgia Segura" videoId="12345">
        <ContentContainer>
          <ContentText>{"Em 2008, foi lançado o Segundo Desafio Global dentro da campanha de segurança do paciente, com o lema “Cirurgias Seguras Salvam Vidas”. O objetivo é elevar os padrões de qualidade e segurança nos cuidados cirúrgicos.\n\nSe você for submetido a algum procedimento cirúrgico, os profissionais de saúde aplicarão um checklist (lista de verificação) para assegurar a sua segurança, prevenir incidentes e garantir a qualidade do cuidado prestado.\n\nConheça o checklist de verificação cirúrgica proposto pela Organização Mundial da Saúde (2009):"}</ContentText>
        </ContentContainer>
        <Dropdown
          title={"Antes da indução anestésica"}
          text={"IDENTIFICAÇÃO"}
          children={<Identification />}
        />
        <Dropdown
          title={"Antes da incisão cirúrgica"}
          text={"CONFIRMAÇÃO"}
          children={<Confirmation />}
        />
        <Dropdown
          title={"Antes de o paciente sair da sala de operações"}
          text={"REGISTRO"}
          children={<Register />}
        />
</Topico>
    </>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#DFF8FC",
    marginBottom: height * 0.02,
  },

  dropdownContainer: {
    width: '100%',
    backgroundColor: "#0073B5",
    paddingVertical: height * 0.02,
    alignSelf: "center",
    justifyContent: "space-between",
  },

  dropdownText: {
    color: "#FFFFFF",
    fontFamily: "GolosText",
    fontSize: clamp(width * 0.05, 24),
  },
});
