import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';


export const Container = styled.TouchableOpacity`

`;

export const Content = styled.View<{ checked: boolean }>`
    width: 100px;
    height: 116px;
    opacity: ${props => props.checked ? 1 : 0.4};
    background-color: ${theme.colors.secondary40};
    border-radius: 8px;
    justify-content: space-between;
    align-items: center;
    padding: 7px 0 7px 0;
`;

export const Check = styled.View<{ checked: boolean }>`
    ${props => props.checked ? 
    `
        width: 10px;
        height: 10px;
        background-color: ${theme.colors.primary};
        align-self: flex-end;
        margin-right: 7px;
        border-radius: 3px;

    ` : 
    `
        width: 12px;
        height: 12px;
        background-color: ${theme.colors.secondary100};
        align-self: flex-end;
        margin-right: 7px;
        border: ${theme.colors.secondary50} solid 2px;
        border-radius: 3px;

    `}
`;

export const Title = styled.Text`
    font-family: ${theme.fonts.title500};
    color: ${theme.colors.heading};
    font-size: 15px;
`;