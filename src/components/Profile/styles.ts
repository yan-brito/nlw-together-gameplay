import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Content = styled.View`
    
`;

export const User = styled.View`
flex-direction: row;
`;

export const Greeting = styled.Text`
    font-family: ${theme.fonts.title500};
    font-size: 24px;
    color: ${theme.colors.heading};
    margin-right: 6px;
`;

export const Username = styled.Text`
    font-family: ${theme.fonts.title700};
    font-size: 24px;
    color: ${theme.colors.heading};
`;

export const Message = styled.Text`
    font-family: ${theme.fonts.text400};
    color: ${theme.colors.highlight};
`;

export const SignOutContainer = styled.View`
    width: 100%;
    align-items: center;
`;

export const SignOutTitle = styled.View`
    flex-direction: row;
    height: 45%;
    align-items: center;
`;

export const Game = styled.Text`
    font-family: ${theme.fonts.title700};
    color: ${theme.colors.heading};
    font-size: 20px;
    text-align: center;
`;

export const Play = styled.Text`
    font-family: ${theme.fonts.title700};
    color: ${theme.colors.primary};
    font-size: 20px;
    text-align: center;
`;

export const SignOutButtons = styled.View`
    flex-direction: row;
    width: 100%;
    height: 50%;
    justify-content: space-evenly;
`;

export const ButtonBox = styled.TouchableOpacity`
    width: 160px;
    height: 56px;

`;

export const ButtonTitle = styled.Text`
    font-family: ${theme.fonts.text500};
    color: ${theme.colors.heading};
`;