import React from 'react';
import { Container, Details, Image, Title, Description } from './styles';
import img from '../../../assets/13.png'

const Banner = () => {
  return (
      <Container>
          <Details>
            <Title>Cobre um amigo </Title>
            <Description>Mantenha suas parcerias em dia, use o Picpay para fazer cobrancas</Description>
          </Details>
          <Image source={img}/>
      </Container>
  )
}

export default Banner;