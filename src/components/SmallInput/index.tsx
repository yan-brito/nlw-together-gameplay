import React from 'react';
import { TextInputProps } from 'react-native';

import { Input } from './styles';

export default function SmallInput({ ...rest }: TextInputProps) {
    return(
        <Input
            keyboardType="numeric"
            {...rest}
        />
    );
};