import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title } from './styles';


type Props = TouchableOpacityProps & {
    title: string;
    transparent?: boolean;
};

export default function Button({ title, transparent, ...rest } : Props) {
    return (
        <Container {...rest} transparent={transparent} >
            <Title>
                { title }
            </Title>
        </Container>
    );
};
