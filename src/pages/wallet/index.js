import React, { useState } from 'react';
import {
  Container,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  ActionButton,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  CardBody,
  AddButton,
  AddLabel,
  TicketButton,
  UseTicketContainer
} from './styles';
import { Feather, MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons'
import { Switch } from 'react-native';
import img from '../../../assets/credit-card.png'

const Wallet = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [useBalance, setUseBalance] = useState(true)

  return (
    <Container>
      <Header 
        colors={
          useBalance
          ? ['#52e78c', '#1ab563']
          : ['#D3D3D3', '#868686']
        }
      >
        <HeaderContainer>
          <Title>Saldo PicPay</Title>
          <BalanceContainer>
            <Value>
              R$ <Bold>{ isVisible? '0,00' : '----' }</Bold>
            </Value>
            <EyeButton onPress={() => setIsVisible(!isVisible)} >
              <Feather name={ isVisible ? 'eye' : 'eye-off' } size={28} color="#fff"></Feather>
            </EyeButton>
          </BalanceContainer>
          <Info> Seu saldo esta rendendo 100% do CDI</Info>

          <Actions>
            <ActionButton>
              <MaterialCommunityIcons name="cash" size={28} color="#FFF" />
              <ActionLabel>Adicionar</ActionLabel>
            </ActionButton>

            <ActionButton>
              <FontAwesome name="bank" size={20} color="#FFF" />
              <ActionLabel>Retirar</ActionLabel>
            </ActionButton>
          </Actions>

        </HeaderContainer>
      </Header>

      <UseBalance>
        <UseBalanceTitle> Usar saldo ao pagar</UseBalanceTitle>
        <Switch value={useBalance} onValueChange={() => setUseBalance(!useBalance)}>

        </Switch>
      </UseBalance>
      <PaymentMethods>
        <PaymentMethodsTitle>Formas de Pagametno</PaymentMethodsTitle>
        <Card>
          <CardBody>
            <CardDetails>
              <CardTitle>Cadastre seu cartao de credito</CardTitle>
              <CardInfo>Cadastre um cartao de credito para poder fazer pagamento mesmo quando nao tiver saldo na sua carteira</CardInfo>
            </CardDetails>
            <Img resizeMode="contain" source={img}></Img>
          </CardBody>
          <AddButton>
            <AntDesign name="pluscircleo" size={20} color="#0db060"></AntDesign>
            <AddLabel>Adicionar Cartao de credito</AddLabel>
          </AddButton>
        </Card>

        <UseTicketContainer>
          <TicketButton>
            <MaterialCommunityIcons name="ticket-outline" size={20} color="#0db060"></MaterialCommunityIcons>
            <AddLabel>Usar codigo promocional</AddLabel>
          </TicketButton>
        </UseTicketContainer>
      </PaymentMethods>
    </Container>
  )
}

export default Wallet;