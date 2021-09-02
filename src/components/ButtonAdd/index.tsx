import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Container } from './styles';
import { theme } from '../../global/styles/theme';


export default function ButtonAdd({ onPress }: TouchableOpacityProps) {
    return (
        <Container onPress={onPress}>
            <MaterialCommunityIcons 
                name="plus"
                color={theme.colors.heading}
                size={24}
            />
        </Container>
    );
};
