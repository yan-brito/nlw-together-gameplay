import React, { useState, useEffect } from 'react';
import { ModalProps } from 'react-native';
import { ButtonsContainer, ButtonTitle, CancelButton, ConditionalContainer, Container, Divider, ModalContainer, Button, Overlay, Title } from './styles';

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
                                <Button onPress={confirm}>
                                    <ButtonTitle > Sim </ButtonTitle>
                                </Button>
                                <CancelButton onPress={cancel}>
                                    <ButtonTitle> Cancelar </ButtonTitle>
                                </CancelButton>  
                            </ConditionalContainer> 
                            :
                            <ConditionalContainer>
                                <Button activeOpacity={0.7} onPress={() => setModalVisible(false)}>
                                    <ButtonTitle> Ok </ButtonTitle>
                                </Button>
                            </ConditionalContainer>
                            
                        }
                        
                    </ButtonsContainer>
                </Container>
            </Overlay>
        </ModalContainer>
    );
};