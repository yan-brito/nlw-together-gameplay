import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Container = styled.View<{isCentered: boolean}>`
    width: 78%;
    height: 1px;
    background-color: ${theme.colors.secondary40};
    margin: ${ props => props.isCentered ? '12px 0 12px 0' : '2px 0 31px 0'};
    align-self: flex-end;
`;