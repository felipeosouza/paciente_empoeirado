import React from 'react';
import DropdownContent from '../DropdownContent';

export default function Confirmation() { 
    return <>
    <DropdownContent showIcon={true} bold={"CONFIRMAR QUE TODOS OS MEMBROS DA EQUIPE SE APRESENTARAM PELO NOME E FUNÇÃO"}/>
        <DropdownContent showIcon={true} bold={"CIRURGIÃO, ANESTESIOLOGISTA E A EQUIPE DE ENFERMAGEM CONFIRMAM VERBALMENTE:"} text={"• Identidade\n• Sítio cirúrgico\n• Procedimento"}/>
        <DropdownContent hideVerticalBorders={true} showIcon={true} bold={"REVISÃO DO CIRURGIÃO:"} text={"Quais são as etapas críticas ou inesperadas, duração da operação, perda sanguínea prevista?"}/>
        <DropdownContent hideVerticalBorders={true} showIcon={true} bold={"REVISÃO DA EQUIPE DE ANESTESIOLOGIA:"} text={"Há alguma preocupação específica em relação ao paciente?"}/>
        <DropdownContent hideUpperBorders={true} showIcon={true} bold={"REVISÃO DA EQUIPE DE ENFERMAGEM:"} text={"Os materiais necessários (Ex. instrumentais, próteses) estão presentes e dentro do prazo de esterilização (incluindo resultados do indicador)? Há questões relacionadas a equipamentos ou quaisquer preocupações?"}/>
        <DropdownContent hideVerticalBorders={true} showIcon={false} bold={"A PROFILAXIA ANTIMICROBIANA FOI REALIZADA NOS ÚLTIMOS 60 MINUTOS?"} text={"☐ Sim\n☐ Não se aplica"} />
        <DropdownContent hideUpperBorders={true} showIcon={false} bold={"AS IMAGENS ESSENCIAIS ESTÃO DISPONÍVEIS?"} text={"☐ Sim\n☐ Não se aplica"} />
    </>
}