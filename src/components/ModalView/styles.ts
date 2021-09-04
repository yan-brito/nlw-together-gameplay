import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';


export const ModalContainer = styled.Modal`

`;

export const CloseModal = styled.TouchableWithoutFeedback`
  
`;

export const Overlay = styled.View`
    flex: 1;
    background-color: ${theme.colors.overlay};
    justify-content: flex-end;
`;

export const Container = styled.View<{ bottom: boolean }>`
    width: 100%;
    ${ props => props.bottom ? 'height: 170px;' : 'flex: 1; padding-top: 100px'};
`;

export const Bar = styled.View`
    width: 39px;
    height: 2px;
    border-radius: 2px;
    background-color: ${theme.colors.secondary30};
    align-self: center;
    margin-top: 13px;
`;
