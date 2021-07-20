import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';

function Home() {
  // Change dynamically the page title:
  document.title = 'LIneA Minicurso | Início';

  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              component="h1"
              align="center"
              color="primary"
            >
              Minicursos
            </Typography>
            <br />
            <Typography variant="h4" align="center" color="primary">
              <strong>
                Introdução a ferramentas computacionais aplicadas à e-Astronomia
              </strong>
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h5" align="center" color="primary">
              Minicurso LIneA Science Server
            </Typography>
            <Typography variant="h5" align="center" color="primary">
              Responsável: Adriano Pieres
            </Typography>
            <Typography variant="h5" align="center" color="primary">
              Duração: três aulas de 2 horas
            </Typography>
            <Typography variant="h5" align="center" color="primary">
              Total de vagas: 15
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" align="center" color="primary">
              Minicurso Jupyter Notebook
            </Typography>
            <Typography variant="h5" align="center" color="primary">
              Responsável: Julia Gschwend
            </Typography>
            <Typography variant="h5" align="center" color="primary">
              Duração: quatro aulas de 2 horas
            </Typography>
            <Typography variant="h5" align="center" color="primary">
              Total de vagas: 15
            </Typography>
          </Grid>

          <Grid xs={12}>
            <br />
            <br />
            <Typography variant="h5" align="center" color="primary">
              Público alvo: estudantes de Graduação
            </Typography>
            <Typography variant="h5" align="center" color="primary">
              Inscrições até 4 de agosto de 2021
            </Typography>
            <Typography variant="h5" align="center" color="primary">
              Minicursos gratuitos e online
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
