import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import { Container } from './styles';

import { api } from '../../services/api';

import Guild, { GuildProps } from '../../components/Guild';
import ListDivider from '../../components/ListDivider';
import Load from '../../components/Load';


type Props = {
    handleGuildSelect: (guild: GuildProps) => void;
};

export default function Guilds({ handleGuildSelect }: Props) {

    const [guilds, setGuilds] = useState<GuildProps[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchGuilds = async () => {
        const response = await api.get('/users/@me/guilds');

        setGuilds(response.data);
        setLoading(false);
    };

    useEffect(() => {
        fetchGuilds();
    }, []);

    return(
        <Container>
            { loading ? <Load />
                :
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
            }
        </Container>
    );
};