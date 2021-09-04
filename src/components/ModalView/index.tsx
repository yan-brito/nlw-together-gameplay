import React, { ReactNode } from 'react';
import { ModalProps } from 'react-native';

import { Bar, CloseModal, Container, ModalContainer, Overlay } from './styles';

import Background from '../Background';

type Props = ModalProps & {
    children: ReactNode;
    closeModal?: () => void;
    bottom?: boolean;
};

export default function ModalView({ children, closeModal, bottom = false, ...rest }: Props) {
    return(
        <ModalContainer
            transparent
            animationType="slide"
            statusBarTranslucent
            {...rest}
        >
            <CloseModal onPress={closeModal}>
                <Overlay>
                    <Container bottom={bottom}>
                        <Background>
                            {!bottom &&
                                <Bar/>
                            }
                            { children }
                        </Background>
                    </Container>
                </Overlay>
            </CloseModal>
        </ModalContainer>
    );
};