import React from 'react';
import { useAuth } from '../../hooks/auth';
import Avatar from '../Avatar';
import { Container, Content, Greeting, Message, User, Username } from './styles';

export default function Profile() {

    const { user } = useAuth();

    return(
        <Container>
            <Avatar urlImage={user.avatar} />
            <Content>
                <User>
                    <Greeting>Olá,</Greeting>
                    <Username>{user.firstName}</Username>
                </User>
                <Message>Hoje é dia de vitória</Message>
            </Content>
        </Container>
    );
};