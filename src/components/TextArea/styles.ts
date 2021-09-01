import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Input = styled.TextInput`
    width: 100%;
    height: 95px;
    font-family: ${theme.fonts.text400};
    font-size: 13px;
    background-color: ${theme.colors.secondary40};
    color: ${theme.colors.heading};
    border-radius: 8px;
    border-width: 1px;
    border-color: ${theme.colors.secondary50};
    margin-right: 4px;
    padding: 16px;
`;