import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

export const ModalContainer = styled.Modal`

`;

export const CloseModal = styled.TouchableWithoutFeedback`
  
`;

export const Overlay = styled.View`
    flex: 1;
    background-color: ${theme.colors.overlay};
    justify-content: center;
    align-items: center;
`;

export const Container = styled.View`
    width: 70%;
    height: 200px;
    background-color: ${theme.colors.secondary80};
    border-radius: 10px;
    align-items: center;
    padding: 40px 12px 0 12px;
    overflow: hidden;
`;

export const Title = styled.Text`
    height: 60%;
    font-family: ${theme.fonts.title700};
    color: ${theme.colors.heading};
    font-size: 20px;
    text-align: center;
`;

export const ButtonsContainer = styled.View`
    width: 100%;
    height: 40%;
    padding-bottom: 15px;
`;

export const ConditionalContainer = styled.View`
    flex-direction: row;
    flex: 1;
    justify-content: space-around;
`;

export const Divider = styled.View`
    width: 1px;
    height: 100%;
    background-color: ${theme.colors.highlight};
`;

export const Button = styled.TouchableOpacity`
    width: 42%;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primary};
    border-radius: 8px;
`;

export const CancelButton = styled.TouchableOpacity`
    width: 42%;
    align-items: center;
    justify-content: center;
    border: 1px solid ${theme.colors.highlight};
    border-radius: 8px;
`;


export const ButtonTitle = styled.Text`
    font-family: ${theme.fonts.text500};
    color: ${theme.colors.heading};
    font-size: 14px;
`;
