import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Container = styled.View`

`;

export const Title = styled.Text`
    flex: 1;
    text-align: center;
    font-family: ${theme.fonts.title700};
    font-size: 20px;
    color: ${theme.colors.heading};
`;