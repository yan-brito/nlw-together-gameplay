import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
`;

export const Content = styled.View`

`;

export const Title = styled.Text`
    font-family: ${theme.fonts.title700};
    color: ${theme.colors.heading};
    font-size: 18px;
`;

export const Status = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const StatusText = styled.Text<{status: boolean}>`
    font-family: ${theme.fonts.text400};
    color: ${ props => props.status ? theme.colors.heading : theme.colors.primary};
    font-size: 13px;
`;

export const BulletStatus = styled.View<{status: boolean}>`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: ${ props => props.status ? theme.colors.on : theme.colors.primary };
    margin-right: 9px;
`;