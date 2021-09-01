import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Content = styled.View`

`;

export const Title = styled.Text`
    font-size: 18px;
    font-family: ${theme.fonts.title700};
    color: ${theme.colors.heading};
    margin: 36px 0 18px 24px;
`;

export const Label = styled.Text<{ center?: boolean; }>`
    font-size: 18px;
    font-family: ${theme.fonts.title700};
    color: ${theme.colors.heading};
    ${props => props.center ? '' :  'margin-bottom: 12px'};
`;

export const Form = styled.View`
    padding: 0 24px 0 24px;
    margin-top: 32px;
`;

export const SelectButton = styled.TouchableOpacity`

`;

export const Select = styled.View`
    width: 100%;
    height: 68px;
    flex-direction: row;
    border-color: ${theme.colors.secondary50};
    border-width: 1px;
    border-radius: 8px;
    align-items: center;
    padding-right: 25px;
    overflow: hidden;
`;

export const SelectBody = styled.View`
    flex: 1;
    align-items: center;
`;

export const GuildImage = styled.View`
    width: 64px;
    height: 68px;
    background-color: ${theme.colors.secondary40};
    border-color: ${theme.colors.secondary50};
    border-width: 1px;
    border-radius: 8px;
`;

export const  Field = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 30px;
`;

export const FieldContent = styled.View`

`;

export const Collumn = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 5px;
`;

export const Divider = styled.Text`
    margin-right: 4px;
    font-size: 15px;
    font-family: ${theme.fonts.text500};
    color: ${theme.colors.highlight};
`;

export const CaracterLimit = styled.Text`
    font-family: ${theme.fonts.text400};
    color: ${theme.colors.highlight};
    font-size: 13px;
    margin-bottom: 12px;
`;

export const Footer = styled.View`
    margin: 20px 0 56px 0;
`;