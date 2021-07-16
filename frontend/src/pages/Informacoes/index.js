import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import useStyles from './styles';

function Informacoes() {
  const classes = useStyles();
  // Change dynamically the page title:
  document.title = 'LIneA Minicurso | Informações Adicionais';

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
              gutterBottom
            >
              Informações Adicionais
            </Typography>
            <br />
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
              gutterBottom
            >
              Com a liberação dos dados do Dark Energy Survey (DES-DR2) e a
              entrada de novos projetos, como o{' '}
              <em>Large Synoptic Survey Telescope</em> (LSST), fica evidente a
              importância de aumentar o engajamento da comunidade no trabalho
              que vem sendo desenvolvido pelo LIneA com apoio do INCT do
              e-Universo na área de e-Astronomia. Sendo assim, nossa equipe vem
              planejando e desenvolvendo o minicurso básico intitulado:
              <strong>
                Introdução a ferramentas computacionais aplicadas à e-Astronomia
              </strong>
              . O objetivo principal é preparar a comunidade para as novas
              ferramentas e serviços que em breve serão disponibilizadas pelo
              LIneA em preparação para a era do LSST. Nesse contexto
              apresentamos os módulos <strong>LIneA Science Server</strong> e{' '}
              <strong>Jupyter Notebook</strong>.
            </Typography>
            <br />
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
              gutterBottom
            >
              Nesta edição,{' '}
              <strong>
                o público alvo <u>prioritário</u>*
              </strong>{' '}
              para o minicurso são estudantes de graduação, com um número
              limitado de <strong>15 vagas</strong>.
            </Typography>
            <br />
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
              gutterBottom
            >
              <em>
                *Outras titulações poderão ser aceitas a depender do número de
                interessados do grupo prioritário.
              </em>
            </Typography>
            <br />
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
              gutterBottom
            >
              O período de inscrição acontece até{' '}
              <strong>04 de agosto de 2021</strong>. Confirmação e contato com
              os participantes até dia <strong>06 de agosto de 2021</strong>.
            </Typography>
            <br />
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
              gutterBottom
            >
              O minicurso é <strong>gratuito</strong> e <strong>online</strong>.
            </Typography>
            <br />
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
              gutterBottom
            >
              Serão emitidos certificados àqueles que solicitaram no momento da
              inscrição.
            </Typography>
            <br />
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
              gutterBottom
            >
              Ao finalizar o minicurso um questionário será aplicado a fim de
              termos um feedback dos participantes. Pretendemos com isso
              melhorar cada vez mais nossas práticas educacionais e de
              engajamento com a comunidade.
            </Typography>
            <br />
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
              gutterBottom
            >
              Contato: <a href="mailto:cde@linea.gov.br">cde@linea.gov.br</a>
            </Typography>
            <br />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Informacoes;
