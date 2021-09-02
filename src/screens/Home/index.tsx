import React, { useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { CategorySelectContainer, Container, Header } from './styles';

import { COLLECTION_APPOINTMENTS } from '../../configs/database';
import Appointment, { AppointmentProps } from '../../components/Appointment';

import Profile from '../../components/Profile';
import ButtonAdd from '../../components/ButtonAdd';
import CategorySelect from '../../components/CategorySelect';
import ListHeader from '../../components/ListHeader';
import ListDivider from '../../components/ListDivider';
import Background from '../../components/Background';
import Load from '../../components/Load';


export default function Home() {

    const { navigate } = useNavigation<any>();

    const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
    const [loading, setLoading] = useState(true);

    const fecthAppointments = async () => {
        const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);

        const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

        if(category){
            setAppointments(storage.filter(item => item.category === category));
        } else {
            setAppointments(storage)
        };

        setLoading(false);
        
    };

    const[category, setCategory] = useState('');

    const handleCategorySelect = (categoryId: string) => {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    };

    const handleAppointmentDetails = (guildSelected: AppointmentProps) => {
        navigate('AppointmentDetails', { guildSelected });
    };

    const handleAppointmentCreate = () => {
        navigate('AppointmentCreate');
    };

    const deleteData = async () => {
        await AsyncStorage.clear();
    };

    useFocusEffect(useCallback(() => {
        fecthAppointments();
    }, [category]));

    return(
        <Background>
            <Container>
                <Header>
                    <Profile/>
                    <ButtonAdd onPress={handleAppointmentCreate} />
                </Header>
                <CategorySelectContainer>
                    <CategorySelect
                        categorySelected={category}
                        setCategory={handleCategorySelect}
                    />
                </CategorySelectContainer>

                {loading            
                    ? <Load />
                    :
                    <>
                        <ListHeader title="Partidas agendadas" subtitle={`Total ${appointments.length}`}/>
                        <FlatList
                            data={appointments}
                            keyExtractor={item => item.id}
                            renderItem={({item}) => (
                                <Appointment data={item} onPress={() => handleAppointmentDetails(item)}/>
                            )}
                            style={{
                                marginTop: 24,
                                marginLeft: 24
                            }}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ paddingBottom: 69 }}
                            ItemSeparatorComponent={() => <ListDivider/>}
                        />
                    </>
                }

            </Container>
        </Background>
    );
};