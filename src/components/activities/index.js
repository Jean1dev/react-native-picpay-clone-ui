import React from 'react';
import {
    Container,
    Header,
    Title,
    Card,
    CardHeader,
    Avatar,
    Description,
    Bold,
    CardBody,
    UserName,
    CardFooter,
    Details,
    Value,
    Divider,
    Date,
    Actions,
    Option,
    OptionLabel
} from './styles';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'
import avatar from '../../../assets/avatar.png'

const Activities = () => {
    return (
        <Container>
            <Header>
                <Title> Atividades </Title>
            </Header>
            <Card>
                <CardHeader>
                    <Avatar source={avatar}></Avatar>
                    <Description>
                        <Bold>voce</Bold> pagou a <Bold>@jeanlucafp</Bold>
                    </Description>
                </CardHeader>
                <CardBody>
                    <UserName>@Jeanlucafp</UserName>
                </CardBody>
                <CardFooter>
                    <Details>
                        <Value>R$ 18,00</Value>
                        <Divider></Divider>
                        <Feather name="lock" size={14} color="#fff"></Feather>
                        <Date> Há dois dias </Date>

                    </Details>

                    <Actions>
                        <Option>
                            <MaterialCommunityIcons name="comment-outline" size={14} color="#FFF"/>
                            <OptionLabel>0</OptionLabel>
                        </Option>

                        <Option>
                            <AntDesign name="hearto" size={14} color="#FFF"/>
                            <OptionLabel>1</OptionLabel>
                        </Option>
                    </Actions>

                </CardFooter>
            </Card>
        </Container>
    )
}

export default Activities;