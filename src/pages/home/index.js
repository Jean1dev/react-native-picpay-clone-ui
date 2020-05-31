import React from 'react';
import {
  Container,
  Header,
  BalanceContainer,
  Balance,
  BalanceTitle,
  ScrollView
} from './styles';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'
import Sugestions from '../../components/sugestions';
import Activities from '../../components/activities';
import Tips from '../../components/tips';
import Banner from '../../components/banner';

const Home = () => {
  return (
    <Container>
      <ScrollView>
        <Header>
          <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />

          <BalanceContainer>
            <BalanceTitle> Meu saldo</BalanceTitle>
            <Balance> R$, 0,00 </Balance>
          </BalanceContainer>

          <AntDesign name="gift" size={30} color="#10c86e" />
        </Header>

        <Sugestions/>
        <Activities/>
        <Tips/>
        <Banner/>
      </ScrollView>
    </Container>
  )
}

export default Home;