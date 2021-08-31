import React from 'react';
import { Input } from './styles';
import { TextInputProps } from 'react-native';

export default function TextArea({ ...rest }: TextInputProps) {
    return(
        <Input
            {...rest}
        />
    );
};