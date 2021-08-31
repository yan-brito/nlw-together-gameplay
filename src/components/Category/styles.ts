import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';


export const Container = styled.TouchableOpacity`

`;

export const Content = styled.View<{ checked: boolean }>`
    width: 100px;
    height: 116px;
    opacity: ${props => props.checked ? 1 : 0.4};
    border-radius: 8px;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0 20px 0;
`;

export const Check = styled.View<{ checked: boolean }>`
    position: absolute;
    top: 7px;
    right: 7px;
    border-radius: 3px;

    ${props => props.checked ? 
    `
        width: 10px;
        height: 10px;
        background-color: ${theme.colors.primary};        

    ` : 
    `
        width: 12px;
        height: 12px;
        background-color: ${theme.colors.secondary100};     
        border: ${theme.colors.secondary50} solid 2px;
    `}
`;

export const Title = styled.Text`
    font-family: ${theme.fonts.title700};
    color: ${theme.colors.heading};
    font-size: 15px;
    margin-top: 15px;
`;