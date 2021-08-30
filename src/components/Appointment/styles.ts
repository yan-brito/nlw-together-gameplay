import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Container = styled.TouchableOpacity`

`;

export const ContentContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
`;

export const Content = styled.View`
    flex: 1;
`;

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 12px;
`;

export const Title = styled.Text`
    font-family: ${theme.fonts.title700};
    color: ${theme.colors.heading};
    font-size: 18px;
`;

export const Category = styled.Text`
    font-family: ${theme.fonts.text400};
    color: ${theme.colors.highlight};
    font-size: 13px;
    margin-right: 24px;
`;

export const Footer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

export const DateInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Date = styled.Text`
    font-family: ${theme.fonts.text500};
    color: ${theme.colors.heading};
    font-size: 13px;
    margin-left: 7px;
`;


export const PlayersInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Player = styled.Text<{ owner: boolean }>`
    color: ${props => props.owner ? theme.colors.primary : theme.colors.on};
    font-family: ${theme.fonts.text500};
    font-size: 13px;
    margin: 0 24px 0 7px;
`;