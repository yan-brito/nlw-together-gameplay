import React from 'react';
import { Alert, ActivityIndicator } from 'react-native';

import { theme } from '../../global/styles/theme';
import { Container, Content, Illustration, Subtitle, Title } from './styles';

import { useAuth } from '../../hooks/auth';

import illustrationImage from '../../assets/illustration.png';
import ButtonIcon from '../../components/ButtonIcon';
import Background from '../../components/Background';


export default function SignIn() {

    const { loading, signIn } = useAuth();

    const handleSignIn = async () => {
        try {
            await signIn();
        } catch (error) {
            Alert.alert(error);
        }
    }


    return (
        <Background>
            <Container>
                <Illustration source={illustrationImage} resizeMode="stretch" />
                <Content>
                    <Title>
                        Conecte-se {'\n'}
                        organize suas {'\n'}
                        jogatinas
                    </Title>
                    <Subtitle>
                        Crie grupos para jogar seus games {'\n'}
                        favoritos com seus amigos
                    </Subtitle>
                    {   loading
                        ?
                        <ActivityIndicator color={theme.colors.primary} />
                        :
                        <ButtonIcon 
                            title="Entrar com o Discord" 
                            activeOpacity={0.7} 
                            onPress={handleSignIn}
                        />                        
                    }
                </Content>
            </Container>
        </Background>
    );
};