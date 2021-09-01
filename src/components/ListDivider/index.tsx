import React from 'react';
import { Container } from './styles';

type Props = {
    isCentered?: boolean;
};

export default function ListDivider({ isCentered = false }: Props) {
    return(
        <Container isCentered={ isCentered } />
    );
};