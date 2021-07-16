import React from 'react';
import { Container, Grid, Typography, Divider } from '@material-ui/core';

function Horario() {
  return (
    <Container>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item xs={12}>
          <Typography
            variant="h3"
            component="h1"
            align="center"
            color="primary"
            gutterBottom
          >
            Horário
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={5} style={{ width: '100%' }}>
          <Typography variant="h5" component="h2" color="primary" gutterBottom>
            Módulo LIneA Science Server - Adriano Pieres
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={5} style={{ width: '100%' }}>
          <Typography variant="h6" color="primary">
            10/08/21 | 18:00h às 20:00h
          </Typography>
          <Typography variant="subtitle1" color="primary">
            <strong>Aula 1</strong>: Introdução e apresentação da plataforma,
            suas ferramentas e métodos de uso
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={5} style={{ width: '100%' }}>
          <Typography variant="h6" color="primary">
            12/08/21 | 18:00h às 20:00h
          </Typography>
          <Typography variant="subtitle1" color="primary">
            <strong>Aula 2</strong>: Introdução e apresentação da plataforma,
            suas ferramentas e métodos de uso
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={5} style={{ width: '100%' }}>
          <Typography variant="h6" color="primary">
            17/08/21 | 18:00h às 20:00h
          </Typography>
          <Typography variant="subtitle1" color="primary">
            <strong>Aula 3</strong>: Hands on - Utilização das ferramentas
            através de atividades
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={5} style={{ width: '100%' }}>
          <Divider />
        </Grid>

        <Grid item xs={12} sm={6} md={5} style={{ width: '100%' }}>
          <Typography variant="h5" component="h2" color="primary" gutterBottom>
            Módulo Jupyter Notebook - Julia Gschwend
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={5} style={{ width: '100%' }}>
          <Typography variant="h6" color="primary">
            19/08/21 | 18:00h às 20:00h
          </Typography>
          <Typography variant="subtitle1" color="primary">
            <strong>Aula 1</strong>: Introdução ao Jupyter e Python Básico
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={5} style={{ width: '100%' }}>
          <Typography variant="h6" color="primary">
            24/08/21 | 18:00h às 20:00h
          </Typography>
          <Typography variant="subtitle1" color="primary">
            <strong>Aula 3</strong>: Python básico (cont.) e operações com
            arrays usando Numpy
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={5} style={{ width: '100%' }}>
          <Typography variant="h6" color="primary">
            26/08/21 | 18:00h às 20:00h
          </Typography>
          <Typography variant="subtitle1" color="primary">
            <strong>Aula 2</strong>: SQL básico, Pandas Series & DataFrame
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={5} style={{ width: '100%' }}>
          <Typography variant="h6" color="primary">
            31/08/21 | 18:00h às 20:00h
          </Typography>
          <Typography variant="subtitle1" color="primary">
            <strong>Aula 4</strong>: Exploração e visualização dos dados com
            Matplotlib e Seaborn
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Horario;
