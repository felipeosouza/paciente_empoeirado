import React from 'react';
import { StyleSheet, View, ScrollView, Pressable } from 'react-native';
import HomeButton from '@/components/buttons/HomeButton';
import TitleSection from '@/components/TitleSection';
import { height } from '@/constants/Dimensions';
import { router } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import HelpButton from '@/components/buttons/HelpButton';
import { ContentContainer } from '@/components/topic/ContentContainer';


const handlePress = () => {

}

export default function Home() {
  return <View style={styles.screenContainer}>
    <ScrollView contentContainerStyle={styles.contentContainer}>
    <TitleSection title="Metas de Segurança"/>
    <View style={styles.buttonsContainer}>
    <HomeButton
      content="EMPODERAMENTO E SEGURANÇA DO PACIENTE"
      onPress={() => router.push('/Empoderamento_seguranca_paciente')}
    />

    <HomeButton
      content="VOCÊ POSSUI UMA PULSEIRA DE IDENTIFICAÇÃO?"
      onPress={() => router.push('/Voce_possui_uma_pulseira_identificacao')}  
    />

    <HomeButton
      content="COMUNICAÇÃO EFICAZ"
      onPress={() => router.push('/comunicacao_eficaz')}  
    />

    <HomeButton
      content="COMO EVITAR ERROS DE MEDIÇÃO?"
      onPress={() => router.push('/evitar_erros')}    
    />

    <HomeButton
      content="CIRURGIA SEGURA"
      onPress={() => router.push('/cirurgia_segura')}    
    />

    <HomeButton
      content="HIGIENIZAÇÃO DAS MÃOS COMO ESTRATÉGIA PARA EVITAR INFECÇÕES"
      onPress={() => router.push('/higienizacao_maos')}    
    />

    <HomeButton
      content="PREVENINDO LESÕES POR PRESSÃO E QUEDAS"
      onPress={() => router.push('/prevenindo_lesoes')}    
    />
    </View>
    </ScrollView>
    <HelpButton/>
  </View>
}



const styles = StyleSheet.create({
  screenContainer: {
    height: '100%',
    //paddingBottom: '10%',
    backgroundColor: '#DFF8FC',
  },
  contentContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: height * 0.78,
    overflow: 'visible',
  },
  buttonsContainer: {
    gap: height * 0.02,
  }
});
