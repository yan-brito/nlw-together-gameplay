import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';


export const Container = styled.TouchableOpacity`
    height: 48px;
    width: 48px;
    background-color: ${theme.colors.primary};
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`;
