import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { Container, Title } from './styles';
import { theme } from '../../global/styles/theme';
import { useNavigation } from '@react-navigation/native';

type Props = {
    title: string,
    action?: ReactNode;
};

export default function Header({ title, action }: Props) {
    const { heading, secondary100, secondary40 } = theme.colors;

    const { goBack } = useNavigation<any>();

    const handleGoBack = () => {
        goBack();
    };

    return(
        <LinearGradient 
            colors={[secondary100, secondary40]}
            style={{
                width: '100%',
                height: 104,
                paddingTop: getStatusBarHeight(),
                paddingHorizontal: 24,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <BorderlessButton onPress={handleGoBack}>
                <Feather name="arrow-left" size={24} color={heading} />
            </BorderlessButton>

            <Title> { title } </Title>

            { action &&
                <Container>
                    { action }
                </Container>
            }
        </LinearGradient>
    );
};