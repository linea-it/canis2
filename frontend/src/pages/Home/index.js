import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';

function Home() {
  // Change dynamically the page title:
  document.title = 'LIneA Minicurso | Início';

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
              Minicurso
            </Typography>
            <Typography variant="h6" align="center" color="primary">
              (Edição Piloto)
            </Typography>
            <br />
            <Typography variant="h4" align="center" color="primary">
              <strong>
                Introdução a ferramentas computacionais aplicadas à e-Astronomia
              </strong>
            </Typography>
            <br />
            <br />
            <Typography variant="h5" align="center" color="primary">
              Módulos LIneA Science Server & Jupyter Notebook
            </Typography>
            <Typography variant="h5" align="center" color="primary">
              Responsáveis: Adriano Pieres e Julia Gschwend
            </Typography>
            <Typography variant="h5" align="center" color="primary">
              Público alvo: estudantes de Graduação
            </Typography>
            <Typography variant="h5" align="center" color="primary">
              Inscrição: até 04 de agosto de 2021
            </Typography>
            <Typography variant="h5" align="center" color="primary">
              Curso gratuito e online
            </Typography>
            <Typography variant="h5" align="center" color="primary">
              Total de vagas: 15
            </Typography>
            <Typography variant="h5" align="center" color="primary">
              Duração: 2 horas por aula
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
