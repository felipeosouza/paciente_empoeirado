import React from 'react';
import { StyleSheet, View } from 'react-native';
import Topico from '@/components/topic/Topico';
import { ContentContainer, ContentText } from '@/components/topic/ContentContainer';

export default function EmpoderamentoSegurancaPaciente() {
    return <>
        <View style={styles.screenContainer}>
            <Topico
                title="Empoderamento e segurança do paciente"
                videoId="syY77NpBIU0"
            >
                <ContentContainer>
        <ContentText customStyle={{alignSelf: 'flex-start'}}>
          {
            "Querido paciente,"
          }
        </ContentText>
        <ContentText bold customStyle={{textAlign: 'center'}}>
          {
            "Você sabe o que é empoderamento e segurança do paciente?"
          }
        </ContentText>
        <ContentText>
          {
            "De forma simples, os serviços de saúde devem garantir que seu cuidado seja ofertado de forma segura e livre de danos. Isso significa evitar que incidentes ocorram durante a sua internação ou mesmo após sua alta hospitalar. Isso é o que chamamos de segurança do paciente! "
          }
        </ContentText>
        <ContentText bold customStyle={{textAlign: 'center'}}>
          {
            "E por que o empoderamento do paciente é importante?"
          }
        </ContentText>
        <ContentText>
          {
            "Diversos estudos mostram que o empoderamento do paciente é uma estratégia fundamental para tornar a gestão do cuidado mais participativa. Assim, enquanto os profissionais de saúde têm a obrigação de zelar pela sua saúde, você também é corresponsável por ela. Participar ativamente no manejo do seu próprio cuidado ajuda a reforçar que a segurança do paciente seja garantida de forma plena."
          }
        </ContentText>
        </ContentContainer>
            </Topico>
        </View>
    </>
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: '#DFF8FC',
    },
})