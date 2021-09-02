import React from 'react';

import { Container, Subtitle, Title } from './styles';

type Props = {
    title: string;
    subtitle: string;
};

export default function ListHeader({ title, subtitle }: Props) {
    return(
        <Container>
            <Title> { title } </Title>
            <Subtitle> { subtitle } </Subtitle>
        </Container>
    );
};