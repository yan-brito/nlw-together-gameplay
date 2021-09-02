import React from 'react';
import { TextInputProps } from 'react-native';

import { Input } from './styles';

export default function TextArea({ ...rest }: TextInputProps) {
    return(
        <Input
            {...rest}
        />
    );
};