import React from 'react';
import { FlatList } from 'react-native';
import Guild, { GuildProps } from '../../components/Guild';
import ListDivider from '../../components/ListDivider';
import { Container } from './styles';

type Props = {
    handleGuildSelect: (guild: GuildProps) => void;
};

export default function Guilds({ handleGuildSelect }: Props) {

    const guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: 'img.png',
            owner: true
        },
        {
            id: '2',
            name: 'Galera do game',
            icon: 'img.png',
            owner: true
        }
    ];

    return(
        <Container>
            <FlatList
                data={guilds}
                keyExtractor={ item => item.id }
                renderItem={({item}) => (
                    <Guild 
                        data={item}
                        onPress={() => handleGuildSelect(item)} 
                    />
                )}
                contentContainerStyle={{ paddingTop: 103, paddingBottom: 68 }}
                ListHeaderComponent={ () => <ListDivider isCentered /> }
                ItemSeparatorComponent={ () => <ListDivider isCentered /> }
                showsVerticalScrollIndicator={false}
                style={{ width: '100%' }}
            />
            
        </Container>
    );
};