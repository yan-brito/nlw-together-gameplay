import React from 'react';
import Avatar from '../Avatar';
import { Container, Content, Greeting, Message, User, Username } from './styles';

export default function Profile() {
    return(
        <Container>
            <Avatar urlImage="https://github.com/yan-brito.png" />
            <Content>
                <User>
                    <Greeting>Olá,</Greeting>
                    <Username>Yan</Username>
                </User>
                <Message>Hoje é dia de vitória</Message>
            </Content>
        </Container>
    );
};