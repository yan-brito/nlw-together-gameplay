import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Input = styled.TextInput`
    width: 48px;
    height: 48px;
    font-family: ${theme.fonts.text400};
    font-size: 13px;
    background-color: ${theme.colors.secondary40};
    color: ${theme.colors.heading};
    border-radius: 8px;
    margin-right: 4px;
    text-align: center;
`;