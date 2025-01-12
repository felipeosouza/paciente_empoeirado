import React from 'react';
import { View } from 'react-native';
import DropdownContent from '../DropdownContent';


export default function Identification(){
return <>
<View>
    <DropdownContent showIcon={true} bold={"PACIENTE CONFIRMOU"} text={"• Identidade\n• Sítio cirúrgico\n• Procedimento\n• Consentimento"} />
    <DropdownContent showIcon={true} bold={"SÍTIO DEMARCADO / NÃO SE APLICA"}/>
    <DropdownContent showIcon={true} bold={"VERIFICAÇÃO DE SEGURANÇA ANESTÉSICA CONCLUÍDA"}/>
    <DropdownContent showIcon={true} bold={"OXÍMETRO DE PULSO NO PACIENTE E EM FUNCIONAMENTO"}/>
    <DropdownContent hideDownBorders={true} showIcon={false} bold={"O PACIENTE POSSUI: \n\n ALERGIA CONHECIDA?"} text={'☐ Não\n☐ Sim'}/>
    <DropdownContent hideVerticalBorders={true} showIcon={false} bold={"VIA AÉREA DIFÍCIL/RISCO DE ASPIRAÇÃO?"} text={'☐ Não\n☐ Sim, e equipamento/assistência disponíveis'}/>
    <DropdownContent hideUpperBorders={true} showIcon={false} bold={"RISCO DE PERDA SANGUÍNEA > 500ML (7ML/KG EM CRIANÇAS)?"} text={'☐ Não\n☐ Sim, e acesso endovenoso adequado e planejamento para fluídos'}/>
</View>
</>
}