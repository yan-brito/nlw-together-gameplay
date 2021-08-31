import React from 'react';
import { Input } from './styles';
import { TextInputProps } from 'react-native';

export default function SmallInput({ ...rest }: TextInputProps) {
    return(
        <Input
            keyboardType="numeric"
            {...rest}
        />
    );
};