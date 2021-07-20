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
              Com a liberação dos dados do <em>Dark Energy Survey</em> (DES-DR2)
              e a entrada de novos projetos, como o{' '}
              <em>Legacy Survey of Space and Time</em>
              (LSST), fica evidente a importância de aumentar o engajamento da
              comunidade no trabalho que vem sendo desenvolvido pelo LIneA com
              apoio do INCT do e-Universo na área de e-Astronomia. Sendo assim,
              nossa equipe vem planejando e desenvolvendo minicursos básicos
              para{' '}
              <strong>
                Introdução a ferramentas computacionais aplicadas à e-Astronomia
              </strong>
              . O objetivo principal é preparar a comunidade para as novas
              ferramentas e serviços que em breve serão disponibilizadas pelo
              LIneA em preparação para a era do{' '}
              <a href="https://www.lsst.org" target="">
                LSST
              </a>
              . Nesse contexto apresentamos os minicursos{' '}
              <strong>LIneA Science Server</strong> e
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
              para os minicursos são estudantes de <strong>graduação</strong>.
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
              <strong>4 de agosto de 2021</strong>. Confirmação e contato com os
              participantes até dia <strong>6 de agosto de 2021</strong>.
            </Typography>
            <br />
            <Typography
              variant="body1"
              className={classes.bodyTextBigger}
              align="justify"
              color="primary"
              gutterBottom
            >
              Os minicursos são <strong>gratuitos</strong> e{' '}
              <strong>online</strong>.
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
