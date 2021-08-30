import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { UserAvatar } from './styles';
import { theme } from '../../global/styles/theme';

type Props = {
    urlImage: string;
};

export default function Avatar({ urlImage }: Props) {
    const { secondary50, secondary70} = theme.colors;

    return(
        <LinearGradient
            style={{
                width: 49,
                height: 49,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 22
            }}
            colors={[secondary50, secondary70]}
        >

            <UserAvatar source={{ uri: urlImage }} />

        </LinearGradient>
    );
};