import React from 'react'
import Text from '../../components/markdown/Text'
import './Analyses.css'

function Analyses() {
  return (
    <div id='analisys_section'>

      <div className='pageTitle' >
        <span> Analise dos Dados </span>
      </div>
      <Text>
        <p>Antes que os dados foram utilizados para gerações dos graficos foram realizados analises exploratoria no conjunto de dados</p>
      </Text>

      <Text>
        <h3>Descrições das Analise</h3>
        Foram analisados os dados de acordo com as suas descrições da forma como foram extruturados.
        para descobrir como os dados estão distribuidos de acordo com os niveis escolar, tipo de trabalho, nivel escolar por aceiitação do 
        produto sim ou não, tipo de trabalho por aceitação do produto sim ou não qunatidades total das chamadas que foram realizadas durente 
        a campanha e qunatidade das chamadas distribuidas entre sim e não para avaliar o quão bem sucedida foi a campanha.
      </Text>

      <Text>
        <h3>Analise da distribuição dos dados por nuvel escolar</h3>
        <table>
          <tr>
            <td>Nivel</td>
            <td>Desrcrição</td>
            <td>Quntidade dos Sim</td>
            <td>Quantidade dos Não</td>
          </tr>
          <tr>
            <td>Primary</td>
            <td>pessoas que possuem ensino primario</td>
            <td>1996</td>
            <td>11305</td>
          </tr>
          <tr>
            <td>Secondary</td>
            <td>pessoas que possuem ensino secundario</td>
            <td>2450</td>
            <td>20750</td>
          </tr>
          <tr>
            <td>Teatry</td>
            <td>pessoas que possuem ensino superior</td>
            <td>591</td>
            <td>1605</td>
          </tr>
          <tr>
            <td>Unknow</td>
            <td>pessoas cujo o nivel escolar é desconhecido</td>
            <td>591</td>
            <td>6260</td>
          </tr>
        </table>

      </Text>

      <Text>
        São as previas das analises feitas antes de partir para visualização dos dados.
      </Text>
    </div>
  )
}

export default Analyses