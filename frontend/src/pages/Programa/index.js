import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import styles from './styles';

function Programa() {
  const classes = styles();
  // Change dynamically the page title:
  document.title = 'LIneA Minicurso | Programa';

  return (
    <div>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              component="h1"
              align="center"
              color="primary"
            >
              Programa
            </Typography>
            <br />
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
            >
              O módulo inicial do minicurso apresenta as funcionalidades do{' '}
              <a
                href="scienceserver.linea.gov.br"
                target="_blank"
                rel="noreferrer"
              >
                LIneA Science Server
              </a>
              , plataforma criada para que o usuário tenha acesso aos dados dos
              seis anos de observação pelo Dark Energy Survey (DES) - que fazem
              parte do release público DR2 -, podendo visualizar todas as
              imagens do levantamento ou apenas uma região selecionada, sobrepor
              o catálogo extraído a partir destas imagens, fazer o upload de uma
              lista de objetos de interesse, analisar pequenas regiões do céu e
              submeta consultas ao banco de dados, além da possibilidade de
              sobrepor objetos disponíveis em outros catálogos públicos.
            </Typography>
            <br />
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
            >
              <strong>Aula 1:</strong> Introdução à Astronomia (sistema de
              magnitudes e filtros) e ao levantamento fotométrico Dark Energy
              Survey, conduzido ao longo de seis anos e cobrindo 5 mil graus
              quadrados no Hemisfério Sul em 5 bandas (grizY). Apresentação da
              plataforma Science Server e ferramentas Sky Viewer e Target
              Viewer.
            </Typography>
            <br />
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
            >
              <strong>Aula 2:</strong> Revisão do encontro anterior e
              apresentação das ferramentas Tile Viewer e User Query. Discussão
              sobre a proposta de atividades utilizando a plataforma LIneA
              Science Server. Início das atividades pelos alunos utilizando as
              ferramentas. Sessão de tira-dúvidas sobre as atividades.
            </Typography>
            <br />
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
            >
              <strong>Aula 3:</strong> Em grupos, a turma irá apresentar as
              atividades propostas. Os grupos terão tutores para auxiliar na
              realização das tarefas durante o curso.
            </Typography>
            <br />
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
            >
              O módulo seguinte apresenta a ferramenta{' '}
              <a href="https://jupyter.org/" target="_blank" rel="noreferrer">
                Jupyter Notebook
              </a>{' '}
              e faz uma introdução à linguagem de programação Python com
              exemplos de uso das bibliotecas Numpy, Matplotlib, Pandas e
              Seaborn. Uma pequena introdução à linguagem SQL também será
              apresentada para auxiliar no acesso aos dados através da
              plataforma Science Server.
            </Typography>
            <br />
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
            >
              <strong>Aula 1:</strong> Na primeira aula o participante vai
              acessar JupyterHub do LIneA, navegar pelo Jupyter Notebook
              clássico e Jupyter Lab, irá criar e executar um notebook e
              aprender a alimentar um notebook com texto formatado, equações,
              arquivos anexos e código Python.
            </Typography>
            <br />
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
            >
              <strong>Aula 2:</strong> Na segunda aula serão apresentados
              conceitos básicos de Python e como utilizar a biblioteca numpy
              para realizar operações com matrizes.
            </Typography>
            <br />
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
            >
              <strong>Aula 3:</strong> Na terceira aula, após uma pequena
              introdução da linguagem SQL, os participantes irão acessar o LIneA
              Science Server, fazer consultas e download do banco de dados. Em
              seguida usarão o Jupyter Notebook para ler os arquivos, criar um
              DataFrame e imprimir estatísticas básicas com a biblioteca Pandas.
            </Typography>
            <br />
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
            >
              <strong>Aula 4:</strong> Na última aula os participantes vão
              aprender a criar e customizar plots com as bibliotecas Matplotlib
              e Seaborn, aplicando esses conhecimentos na construção de um
              diagrama cor-magnitude para uma amostra de galáxias.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Programa;
