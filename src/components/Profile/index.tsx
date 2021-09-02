import React from 'react';

import { Container, Content, Greeting, Message, User, Username } from './styles';

import Avatar from '../Avatar';

import { useAuth } from '../../hooks/auth';

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