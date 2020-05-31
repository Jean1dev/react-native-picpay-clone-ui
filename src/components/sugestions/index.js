import React from 'react';
import { Container, Option, Img, Label } from './styles';
import img1 from '../../../assets/01.png'
import img2 from '../../../assets/02.png'
import img3 from '../../../assets/03.png'
import img4 from '../../../assets/04.png'
import img5 from '../../../assets/05.png'
import img6 from '../../../assets/06.png'
import img7 from '../../../assets/07.png'

const items = [
  {
    key: String(Math.random()),
    igm: img1,
    label: 'Recarga'
  },
  {
    key: String(Math.random()),
    igm: img2,
    label: 'Uber'
  },
  {
    key: String(Math.random()),
    igm: img3,
    label: 'Transporte'
  },
  {
    key: String(Math.random()),
    igm: img4,
    label: 'Sky'
  },
  {
    key: String(Math.random()),
    igm: img5,
    label: 'Doações'
  },
  {
    key: String(Math.random()),
    igm: img6,
    label: 'Boleto'
  },
  {
    key: String(Math.random()),
    igm: img7,
    label: 'Pagar amigo'
  }
]

const Sugestions = () => {
  return (
    <Container>
      {items.map(item => (
        <Option key={item.key}>
          <Img source={item.igm} />
          <Label>{item.label}</Label>
        </Option>
      ))}
    </Container>
  )
}

export default Sugestions;