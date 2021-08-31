import React from 'react';
import { BulletStatus, Container, Content, Status, StatusText, Title } from './styles';

import Avatar from '../Avatar';

export type MemberProps = {
    id: string,
    username: string,
    avatar_url: string,
    status: string
};

type Props = {
    data: MemberProps;
};

export default function Member({ data }: Props) {

    const isOnline = data.status === 'online';

    return(
        <Container>
            <Avatar urlImage={ data.avatar_url }/>
            <Content>
                <Title> { data.username } </Title>
                <Status>
                    <BulletStatus status={isOnline} />
                    <StatusText status={isOnline} > 
                        { isOnline ? 'Online' : 'Ocupado' }
                    </StatusText>
                </Status>
            </Content>
        </Container>
    );
};