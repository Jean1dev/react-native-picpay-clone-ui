import React from 'react';
import { Container, Option, Title, Image } from './styles';
import img from '../../../assets/08.png'
import img2 from '../../../assets/09.png'
import img3 from '../../../assets/10.png'
import img4 from '../../../assets/11.png'
import img5 from '../../../assets/12.png'

const items = [
    {
        key: Math.random(),
        title: 'Pague suas contas sem sair de casa',
        img: img,
        color: '#172c4a'
    },
    {
        key: Math.random(),
        title: 'Pague suas contas sem sair de casa',
        img: img2,
        color: '#6a0159'
    },
    {
        key: Math.random(),
        title: 'Pague suas contas sem sair de casa',
        img: img3,
        color: '#4139c8'
    },
    {
        key: Math.random(),
        title: 'Pague suas contas sem sair de casa',
        img: img4,
        color: '#00ab4b'
    },
    {
        key: Math.random(),
        title: 'Pague suas contas sem sair de casa',
        img: img5,
        color: '#ba2f76'
    }
]

const Tips = () => {
    return (
        <Container>
            {items.map(item => (
                <Option key={item.key} color={item.color}>
                    <Title> {item.title} </Title>
                    <Image source={item.img} />
                </Option>
            ))}
        </Container>
    )
}

export default Tips;