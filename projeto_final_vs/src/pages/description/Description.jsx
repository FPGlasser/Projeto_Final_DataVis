import React from 'react'
import Text from '../../components/markdown/Text'
import './Description.css'


function Description() {
  return (
    <>
    <div className='pageTitle' >
      <span> Descrição do Projeto </span>
    </div>

    <div className="projectDescription">
      <Text>
        <h3>Sobre Projeto</h3>
        <p className='textParagraphM'>
          O presente projeto final de visualização de dados tem por objetivo consolidação dos conhecimentos, tecnicas e uso de ferramentas para visualização de dados.
          Os refereridos conhecimentos, tecnicas para  uso de ferramentas foram adequiridos no decorrer do curso da cadeira de visualização de Dados  oferecida pelo 
          departamento da Computação da Universidade Federal do Ceará no semestre 2022.2.<br/>
          A cadeira de Visualização de Dados possui carga horaria de 64 horas, com duração de um (1) semestre. é ministrada pela Professora Doutora Emanuele Santos. 
        </p>
        <br/>
        Foram utilizados as seguintes feramentas para execussão deste projeto final.
          <ul>
            <li>-React js <span style={{fontSize: '0.9rem'}}>(Biblioteca JavaScript para construção de intetrfaces graficas)</span></li>
            <li>-React Router Dom v6 <span style={{fontSize: '0.9rem'}}>(para criação de rotas)</span></li>
            <li>-Apex Chart React <span style={{fontSize: '0.9rem'}}>(Biblioteca js para visualização de dados)</span></li>
            <li>-Arquivo no formato json contendo conjunto de dados</li>
          </ul>
      </Text>

      <Text>
        <h3>Sobre Dados</h3>
        <p className='textParagraphM'>
          O conjunto de dados utilizado para analise e visualização neste projeto é um conjunto de dados de uma campanha de marketing de uma instituição bancaria portuguesa.
          Para ooferecimento de um novo produto bancario deposito à Prazo.
          A campanha foi baseada na telefonema onde a instituição telefonava para cliente oferecendo o produto o clinte pode aceitar ou recusar o produto.
          <br/>
          <br />
          <h5>Descrição dos Dados</h5>
          <p>
            O conjunto de  dado possui 17 colunas demostrados abaixo: 
            <br/>
            <br/>
            <table>
              <tr>
                <td>age</td>
                <td>job</td>
                <td>marital</td>
                <td>education</td>
                <td>default</td>
                <td>balance</td>
                <td>housing</td>
                <td>loan</td>
                <td>contact</td>
                <td>day</td>
                <td>month</td>
                <td>duration</td>
                <td>campaign</td>
                <td>pdays</td>
                <td>previous</td>
                <td>poutcome</td>
                <td>Target</td>
              </tr>
            </table>
          </p>
        </p>
      </Text>

      <Text>
      <h3>Analise de como os dados estão estruturados</h3>
        <p className='textParagraphM'>
          Como descrito na analise o conjunto de dados possui 17 campos que são:
          <br/>
          <table>
              <th>
                <td>age</td>
                <td>job</td>
                <td>marital</td>
                <td>education</td>
                <td>default</td>
                <td>balance</td>
                <td>housing</td>
                <td>loan</td>
                <td>contact</td>
                <td>day</td>
                <td>month</td>
                <td>duration</td>
                <td>campaign</td>
                <td>pdays</td>
                <td>previous</td>
                <td>poutcome</td>
                <td>Target</td>
              </th>
            </table>
            <br />
            E os campos estão divididos em variaveis categoriacas e não categoricas.
        </p>
      </Text>

      <Text>
        <h3>Dicionario de Dado</h3>
        <p className='textParagraphM'>
          Para descrever e especificar as variaveis do conjunto de dados foi criado um dicionario de de dados dividida em variaveis categoricas e variaveis não categoricas.
        </p>
        <br/>
        <h5>Variaveis Categoricas</h5>
        <table>
          <tr>
            <td>Variavel</td>
            <td>Tipo de Variavel</td>
            <td>Descrição</td>
            <td>Restrição de Valores</td>
            <td>Valores Nulos</td>
          </tr>
          <tr>
            <td>Job</td>
            <td>categorica</td>
            <td>Tipo de Trabalho</td>
            <td></td>
            <td>não</td>
          </tr>
          <tr>
            <td>Marital</td>
            <td>categorica</td>
            <td>Estado Cívil</td>
            <td>(solteiro,  casado ou divorciado)</td>
            <td>não</td>
          </tr>
          <tr>
            <td>Education</td>
            <td>categorica</td>
            <td>Nivel Escolar</td>
            <td></td>
            <td>não</td>
          </tr>
          <tr>
            <td>Default</td>
            <td>categorica</td>
            <td>tem crédito inadimplante?</td>
            <td>(sim, não, desconhecido)</td>
            <td>não</td>
          </tr>
          <tr>
            <td>Housing</td>
            <td>categorica</td>
            <td>Tem credito habitação ?</td>
            <td>(sim, não, desconhecido)</td>
            <td>não</td>
          </tr>
          <tr>
            <td>Loan</td>
            <td>categorica</td>
            <td>Tem emprestimo pessoal?</td>
            <td>(sim, não, desconhecido)</td>
            <td>não</td>
          </tr>
          <tr>
            <td>Contact</td>
            <td>categorica</td>
            <td>tipo de contacto</td>
            <td>(celular, telefone)</td>
            <td>não</td>
          </tr>
          <tr>
            <td>Poutcome</td>
            <td>categorica</td>
            <td>Resultado da campanha de anterior</td>
            <td>(fracasso, sucesso, inexistente)</td>
            <td>não</td>
          </tr>
          <tr>
            <td>Target</td>
            <td>categorica</td>
            <td>no final da campanha o cliente aceitou o produto ou não</td>
            <td>(sim, não)</td>
            <td>não</td>
          </tr>
        </table>

        <br />
        <br />

        <h5>Variaveis não categoricas</h5>
        <table>
          <tr>
            <td>Variavel</td>
            <td>Tipo de Variavel</td>
            <td>Descrição</td>
            <td>Restrição de Valores</td>
            <td>Valores Nulos</td>
          </tr>

          <tr>
            <td>Age</td>
            <td>numerico</td>
            <td>idade do cliente</td>
            <td> </td>
            <td>não</td>
          </tr>
          <tr>
            <td>Balance</td>
            <td>numerico</td>
            <td>Saldo médio anual</td>
            <td> </td>
            <td>não</td>
          </tr>
          <tr>
            <td>Day</td>
            <td>numerico</td>
            <td>Ultimo dia de contacto do mês</td>
            <td> </td>
            <td>não</td>
          </tr>
          <tr>
            <td>Duration</td>
            <td>numerico</td>
            <td>duração do ultimo contacto em segundos</td>
            <td> </td>
            <td>não</td>
          </tr>
          <tr>
            <td>Campaign</td>
            <td>numerico</td>
            <td>qunatidades de contactos realizados nesta campanha</td>
            <td> </td>
            <td>não</td>
          </tr>

          <tr>
            <td>PDays</td>
            <td>numerico</td>
            <td>quntidade de dias passados apos o ultimo contacto</td>
            <td> </td>
            <td>não</td>
          </tr>
          <tr>
            <td>Previous</td>
            <td>numerico</td>
            <td>qunatidades de contactos realizzados antes desta campanha</td>
            <td> </td>
            <td>não</td>
          </tr>
          </table>
          
        <p className='textParagraphM'>
          Os dados foram analisados tratados antes de serem utilizados para geração de graficos para visualização.<br />
        </p>
      </Text>
    </div>
    </>
  )
}

export default Description