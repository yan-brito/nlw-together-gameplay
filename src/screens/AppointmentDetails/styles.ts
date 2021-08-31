import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Banner = styled.ImageBackground`
    width: 100%;
    height: 234px;
    margin-bottom: 30px;
`;

export const BannerContent = styled.View`
    flex: 1;
    justify-content: flex-end;
    padding: 0 24px 30px 24px;
`;

export const Title = styled.Text`
    font-size: 28px;
    font-family: ${theme.fonts.title700};
    color: ${theme.colors.heading}
`;

export const Subtitle = styled.Text`
    font-size: 13px;
    font-family: ${theme.fonts.text400};
    color: ${theme.colors.heading}
`;

export const Footer = styled.View`
    padding: 20px 24px 20px 24px;
    margin-bottom: ${getBottomSpace()}px;
`;