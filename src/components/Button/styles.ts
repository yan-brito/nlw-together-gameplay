import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Container = styled.TouchableOpacity<{ transparent?: boolean }>`
    width: 100%;
    height: 56px;
    border-radius: 8px;
    flex-direction: row;
    align-items: center;
    ${props => props.transparent 
        ? `
            border-width: 1px;
            border-color: ${theme.colors.secondary50};
        `
        : `
            background-color: ${theme.colors.primary};
        `
    }
`;

export const Title = styled.Text`
    flex: 1;
    color: ${theme.colors.heading};
    font-size: 15px;
    text-align: center;
    font-family: ${theme.fonts.text500};
`;