import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container } from './styles';
import { theme } from '../../global/styles/theme';

export default function Load() {
    return(
        <Container>
            <ActivityIndicator 
                size="large"
                color={theme.colors.primary}
            />
        </Container>
    );
};