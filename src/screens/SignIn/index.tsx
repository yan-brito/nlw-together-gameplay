import React from 'react';
import { Container, Content, Illustration, Subtitle, Title } from './styles';
import { useNavigation } from '@react-navigation/native';

import illustrationImage from '../../assets/illustration.png';
import ButtonIcon from '../../components/ButtonIcon';
import Background from '../../components/Background';

export default function SignIn() {
    const {navigate} = useNavigation<any>();

    const handleSignIn = () => {
        navigate('Home');
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
                    <ButtonIcon 
                        title="Entrar com o Discord" 
                        activeOpacity={0.7} 
                        onPress={handleSignIn}
                    />
                </Content>
            </Container>
        </Background>
    );
};