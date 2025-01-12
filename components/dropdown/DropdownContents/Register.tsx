import React from 'react';
import DropdownContent from '../DropdownContent';

export default function Register() { 
    return <>
    <DropdownContent hideDownBorders={true} showIcon={false} bold={"O PROFISSIONAL DA EQUIPE DE ENFERMAGEM OU DA EQUIPE MÉDICA CONFIRMA VERBALMENTE COM A EQUIPE:"} text={"\n☐ REGISTRO COMPLETO DO PROCEDIMENTO INTRA-OPERATÓRIO, INCLUINDO PROCEDIMENTO EXECUTADO\n\n☐ SE AS CONTAGENS DE INSTRUMENTAIS CIRÚRGICOS, COMPRESSAS E AGULHAS ESTÃO CORRETAS (ou não se aplicam)\n\n☐ COMO A AMOSTRA PARA ANATOMIA PATOLÓGICA ESTÁ IDENTIFICADA (incluindo o nome do paciente)\n\n☐ SE HÁ ALGUM PROBLEMA COM EQUIPAMENTO PARA SER RESOLVIDO"}/>
        <DropdownContent showIcon={false} bold={"O CIRURGIÃO, ANESTESIOLOGISTA E A EQUIPE DE ENFERMAGEM REVISAM PREOCUPAÇÕES ESSENCIAIS PARA A RECUPERAÇÃO E O MANEJO DO PACIENTE (especificar critérios mínimos a serem observados, ex.:dor) "} />
    </>
}