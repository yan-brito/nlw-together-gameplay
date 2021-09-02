import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Check, Container, Content, Title } from './styles';
import { theme } from '../../global/styles/theme';

import { SvgProps } from 'react-native-svg';

type Props = TouchableOpacityProps & {
    title: string;
    icon: React.FC<SvgProps>;
    hasCheckBox?: boolean;
    checked?: boolean;
};

export default function Category({ title, icon: Icon, checked = false, hasCheckBox = false, ...rest }: Props) {

    const { secondary50, secondary70 } = theme.colors;

    return (
        <Container {...rest} >
            <LinearGradient 
            style={{
                width: 104,
                height: 120,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
                marginRight: 8
            }}
            colors={[secondary50, secondary70]}
            >
                <Content checked={checked}>
                    { hasCheckBox &&
                        <Check  checked={checked}/>
                    }
                    <Icon 
                        width={48}
                        height={48}                        
                        />
                    <Title> {title} </Title>
                </Content>

            </LinearGradient>
        </Container>
    );
};