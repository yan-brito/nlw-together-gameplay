import React, { useState } from 'react';
import { RectButton } from 'react-native-gesture-handler';

import { Container, Content, Game, Greeting, Message, SignOutContainer, SignOutTitle, User, Username, Play, SignOutButtons, ButtonBox } from './styles';

import Avatar from '../Avatar';

import { useAuth } from '../../hooks/auth';

import ModalView from '../ModalView';
import Button from '../Button';


export default function Profile() {

    const [modalVisible, setModalVisible] = useState(false);

    const { user, signOut } = useAuth();

    const handleOpenSignOut = () => {
        setModalVisible(true);
    };

    const handleCloseSignOut = () => {
        setModalVisible(false)
    };

    return(
        <Container>
            <RectButton onPress={handleOpenSignOut}>
                <Avatar urlImage={user.avatar} />
            </RectButton>
            <Content>
                <User>
                    <Greeting>Olá,</Greeting>
                    <Username>{user.firstName}</Username>
                </User>
                <Message>Hoje é dia de vitória</Message>
            </Content>
            <ModalView visible={modalVisible} bottom>
                <SignOutContainer>
                    <SignOutTitle>
                        <Game>Deseja sair do Game</Game>
                        <Play>Play</Play>
                        <Game>?</Game>
                    </SignOutTitle>
                    <SignOutButtons>
                            <ButtonBox>
                                <Button title="Sim" onPress={signOut} />
                            </ButtonBox>
                            <ButtonBox>
                                <Button title="Não" transparent onPress={handleCloseSignOut}/>
                            </ButtonBox>
                    </SignOutButtons>
                </SignOutContainer>
            </ModalView>
        </Container>
    );
};