import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View`
    width: 100%;
    padding: 0 24px 0 24px;
    flex-direction: row;
    justify-content: space-between;
    margin-top: ${getStatusBarHeight() + 26}px;
    margin-bottom: 42px;
`;

export const CategorySelectContainer = styled.View`

`;

export const Content = styled.View`
    margin-top: 42px;
`;