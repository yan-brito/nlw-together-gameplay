import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Illustration = styled.Image`
    width: 100%;
    height: 360px;
`;

export const Content = styled.View`
    margin-top: -65px;
    padding: 50px;
    width: 100%;
`;

export const Title = styled.Text`
    color: ${theme.colors.heading};
    font-size: 40px;
    text-align: center;
    margin-bottom: 16px;
    font-family: ${theme.fonts.title700};
    line-height: 40px;
`;

export const Subtitle = styled.Text`
    color: ${theme.colors.heading};
    font-size: 15px;
    text-align: center;
    margin-bottom: 64px;
    font-family: ${theme.fonts.title500}
    line-height: 25px;
`;