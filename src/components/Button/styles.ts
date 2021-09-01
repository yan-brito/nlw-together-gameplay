import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Container = styled.TouchableOpacity`
    background-color: ${theme.colors.primary};
    width: 100%;
    height: 56px;
    border-radius: 8px;
    flex-direction: row;
    align-items: center;
`;

export const Title = styled.Text`
    flex: 1;
    color: ${theme.colors.heading};
    font-size: 15px;
    text-align: center;
    font-family: ${theme.fonts.text500};
`;