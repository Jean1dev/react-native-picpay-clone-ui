import React from 'react';
import { MaterialIcons } from '@expo/vector-icons'
import { Container, Label } from './styles';
import { TouchableWithoutFeedback } from 'react-native';


const PayButton = ({ onPress, focused }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Container colors={
                focused
                ? ['#fff', '#ccc']
                : ['#00fc6c', '#00ac4a']
            } 
            start={[1, 0.2]}>
                <MaterialIcons 
                    name="attach-money" 
                    size={30} 
                    color={focused ? '#000' : '#fff'}/>
                <Label focused>Pagar</Label>
            </Container>
        </TouchableWithoutFeedback>
    )
}

export default PayButton;