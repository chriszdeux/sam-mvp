"use client";
import { Button, Typography } from "@mui/material";
import CryptoLayout from "../../CryptoLayout";
import { CustomImage } from "@/styled-components/global/images.styled";
import FadeComponent from "@/components/fades/FadeComponent";
import MyImg from "@/public/img/prisma.jpg";
import Link from "next/link";
import ReturnButton from "@/components/news/ReturnButton";

export default function NewCryptoPage() {
  return (
    <CryptoLayout title="Por fin una nueva era comienza">
      <CustomImage src={MyImg} alt="oh god" height={500} />

      <Typography variant="h5" color="primary" align="right">
        Fecha: 1 de marzo de 2025
      </Typography>

      <Typography variant="body1">
        En un giro innovador para el mundo de la simulación y la criptoeconomía,
        <strong> Proyecto Sam </strong> ha alcanzado un hito clave en su
        desarrollo. Esta plataforma, diseñada para emular la dinámica de la
        inversión en criptomonedas y la expansión interplanetaria, ha comenzado
        pruebas avanzadas de su sistema blockchain, donde los jugadores pueden
        realizar transacciones, extraer recursos y construir civilizaciones en
        el espacio. Según el equipo de desarrollo, el sistema implementará un
        modelo de nodos que calcula recompensas en función del tiempo de
        conexión y la potencia de cómputo disponible.
      </Typography>

      <Typography variant="body1">
        Además, el ecosistema contará con una economía basada en criptomonedas
        ficticias, permitiendo a los jugadores invertir, intercambiar activos y
        expandir su influencia en la galaxia. “La idea es ofrecer una
        experiencia lo más cercana posible a una simulación de criptoinversión
        real, pero dentro de un entorno de exploración espacial”, comentó un
        portavoz del proyecto. Las pruebas iniciales han mostrado un gran
        interés por parte de la comunidad, y se espera que en los próximos meses
        se implementen nuevas funciones como la construcción de laboratorios y
        la exploración de planetas en busca de recursos valiosos. ¡El futuro de
        la criptoeconomía interplanetaria está más cerca de lo que imaginamos!
      </Typography>
      <Typography variant="body1">
        Además, el ecosistema contará con una economía basada en criptomonedas
        ficticias, permitiendo a los jugadores invertir, intercambiar activos y
        expandir su influencia en la galaxia. “La idea es ofrecer una
        experiencia lo más cercana posible a una simulación de criptoinversión
        real, pero dentro de un entorno de exploración espacial”, comentó un
        portavoz del proyecto. Las pruebas iniciales han mostrado un gran
        interés por parte de la comunidad, y se espera que en los próximos meses
        se implementen nuevas funciones como la construcción de laboratorios y
        la exploración de planetas en busca de recursos valiosos. ¡El futuro de
        la criptoeconomía interplanetaria está más cerca de lo que imaginamos!
      </Typography>
      <Typography variant="h4">Un nuevo comienzo</Typography>
      <Typography variant="body1">
        Además, el ecosistema contará con una economía basada en criptomonedas
        ficticias, permitiendo a los jugadores invertir, intercambiar activos y
        expandir su influencia en la galaxia. “La idea es ofrecer una
        experiencia lo más cercana posible a una simulación de criptoinversión
        real, pero dentro de un entorno de exploración espacial”, comentó un
        portavoz del proyecto. Las pruebas iniciales han mostrado un gran
        interés por parte de la comunidad, y se espera que en los próximos meses
        se implementen nuevas funciones como la construcción de laboratorios y
        la exploración de planetas en busca de recursos valiosos. ¡El futuro de
        la criptoeconomía interplanetaria está más cerca de lo que imaginamos!
      </Typography>
      <Typography variant="body1">
        Además, el ecosistema contará con una economía basada en criptomonedas
        ficticias, permitiendo a los jugadores invertir, intercambiar activos y
        expandir su influencia en la galaxia. “La idea es ofrecer una
        experiencia lo más cercana posible a una simulación de criptoinversión
        real, pero dentro de un entorno de exploración espacial”, comentó un
        portavoz del proyecto. Las pruebas iniciales han mostrado un gran
        interés por parte de la comunidad, y se espera que en los próximos meses
        se implementen nuevas funciones como la construcción de laboratorios y
        la exploración de planetas en busca de recursos valiosos. ¡El futuro de
        la criptoeconomía interplanetaria está más cerca de lo que imaginamos!
      </Typography>
      <ReturnButton />
    </CryptoLayout>
  );
}
