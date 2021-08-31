import React from 'react';
import { Container, Title } from './styles';
import { TouchableOpacityProps } from 'react-native';


type Props = TouchableOpacityProps & {
    title: string;
};

export default function Button({ title, ...rest } : Props) {
    return (
        <Container {...rest} >
            <Title>
                { title }
            </Title>
        </Container>
    );
};
