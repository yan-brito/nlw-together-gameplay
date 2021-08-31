import React from 'react';
import { Container } from './styles';

import { categories } from '../../utils/category';
import Category from '../Category';

type Props = {
    categorySelected: string;
    setCategory: (categoryId: string) => void;
    hasCheckBox?: boolean;
}

export default function CategorySelect({ categorySelected, setCategory, hasCheckBox = false }: Props) {
    return (
        <Container
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingRight: 40}}
        >
            {
                categories.map(category => (
                    <Category
                        key={category.id}
                        title={category.title}
                        icon={category.icon}
                        hasCheckBox={hasCheckBox}
                        checked={category.id === categorySelected}
                        onPress={() => setCategory(category.id)}
                    />
                ))
            }
        </Container>
    );
};