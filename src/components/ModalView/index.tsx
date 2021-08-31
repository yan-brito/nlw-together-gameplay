import React, { ReactNode } from 'react';
import { ModalProps } from 'react-native';

import { Bar, Container, ModalContainer, Overlay } from './styles';

import Background from '../Background';

type Props = ModalProps & {
    children: ReactNode;
};

export default function ModalView({ children, ...rest }: Props) {
    return(
        <ModalContainer
            transparent
            animationType="slide"
            {...rest}
        >
            <Overlay>
                <Container>
                    <Background>
                        <Bar/>
                        { children }
                    </Background>
                </Container>
            </Overlay>
        </ModalContainer>
    );
};