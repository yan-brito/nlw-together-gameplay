import React, { useState, useEffect } from 'react';
import { ModalProps } from 'react-native';

import { ButtonsContainer, ConditionalContainer, Container, Divider, ModalContainer, Overlay, Title, ButtonBox } from './styles';

import Button from '../Button';

type Props = ModalProps &{
    title: string;
    isConditional?: boolean;
    confirm?: () => void;
    cancel?: () => void;
    visible: boolean;
};

export default function ModalDialog({ title, isConditional = false, visible, confirm, cancel, ...rest }: Props) {

    const [modalVisible, setModalVisible] = useState(false);


    useEffect(() => {
        setModalVisible(visible);
    }, [visible])

    return(
        <ModalContainer
            transparent
            animationType="fade"
            statusBarTranslucent
            visible={modalVisible}      
            {...rest}  
        >
            <Overlay>
                <Container>
                    <Title> { title } </Title>
                    <ButtonsContainer>
                        {isConditional
                            ?
                            <ConditionalContainer>
                                <ButtonBox >
                                    <Button title="Sim" onPress={confirm ? confirm : () => setModalVisible(false)} />
                                </ButtonBox>
                                <ButtonBox>
                                    <Button title="Cancelar" onPress={cancel ? cancel : () => setModalVisible(false)} transparent />
                                </ButtonBox>  
                            </ConditionalContainer> 
                            :
                            <ConditionalContainer>
                                <ButtonBox>
                                    <Button title="Ok" onPress={() => setModalVisible(false)} />
                                </ButtonBox>
                            </ConditionalContainer>
                            
                        }
                        
                    </ButtonsContainer>
                </Container>
            </Overlay>
        </ModalContainer>
    );
};