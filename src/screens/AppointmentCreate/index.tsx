import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import { CaracterLimit, Collumn, Divider, Field, FieldContent, Footer, Form, GuildImage, Label, Select, SelectBody, SelectButton, Title } from './styles';
import { theme } from '../../global/styles/theme';


import Header from '../../components/Header';
import Background from '../../components/Background';
import CategorySelect from '../../components/CategorySelect';
import GuildIcon from '../../components/GuildIcon';
import SmallInput from '../../components/SmallInput';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import ModalView from '../../components/ModalView';
import Guilds from '../Guilds';

import { COLLECTION_APPOINTMENTS } from '../../configs/database';
import { GuildProps } from '../../components/Guild';


export default function AppointmentCreate() {

    const { navigate } = useNavigation<any>();

    const [category, setCategory] = useState('');
    const [openGuildsModal, setOpenGuildsModal] = useState(false);
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [description, setDescription] = useState('');

    const handleCategorySelect = (categoryId: string) => {
        setCategory(categoryId);
    };

    const handleOpenGuilds = () => {
        setOpenGuildsModal(true);
    };

    const handleCloseGuilds = () => {
        setOpenGuildsModal(false);
    };

    const handleGuildSelect = (guildSelect: GuildProps) => {
        setGuild(guildSelect);
        setOpenGuildsModal(false);
    };

    const handleSave = async () => {
        const newAppointment = {
            id: uuid.v4(),
            guild,
            category,
            date: `${day}/${month} às ${hour}:${minute}h`,
            description
        }

        const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
        const appointments = storage ? JSON.parse(storage) : [];

        await AsyncStorage.setItem(
            COLLECTION_APPOINTMENTS,
            JSON.stringify([...appointments, newAppointment])
        );

        navigate('Home');
    };



    return(
        <KeyboardAvoidingView 
            style={{flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <Background>
                <ScrollView>
                    <Header 
                        title="Agendar partida"
                    />
                    <Title> Categoria </Title>
                    <CategorySelect 
                        hasCheckBox
                        setCategory={handleCategorySelect}
                        categorySelected={category}
                    />
                    <Form>
                        <SelectButton onPress={handleOpenGuilds}>
                            <Select>
                                { guild.name
                                    ? <GuildIcon guildId={guild.id} iconId={guild.icon} />
                                    : <GuildImage />
                                }
                                <SelectBody>
                                    <Label center > 
                                        { guild.name 
                                            ? guild.name 
                                            : 'Selecione um servidor'
                                        } 
                                    </Label>
                                </SelectBody>
                                <Feather 
                                    name="chevron-right"
                                    color={theme.colors.heading}
                                    size={18}
                                />
                            </Select>
                        </SelectButton>
                        <Field>
                            <FieldContent>
                                <Label> Dia e mês </Label>
                                <Collumn>
                                    <SmallInput 
                                        maxLength={2} 
                                        onChangeText={setDay}
                                    />
                                    <Divider> / </Divider>
                                    <SmallInput 
                                        maxLength={2} 
                                        onChangeText={setMonth}
                                    />
                                </Collumn>
                            </FieldContent>
                            <FieldContent>
                                <Label> Hora e minuto </Label>
                                <Collumn>
                                    <SmallInput 
                                        maxLength={2} 
                                        onChangeText={setHour}
                                    />
                                    <Divider> : </Divider>
                                    <SmallInput 
                                        maxLength={2} 
                                        onChangeText={setMinute}
                                    />
                                </Collumn>
                            </FieldContent>
                        </Field>
                        
                        <Field>
                            <Label> Descrição </Label>
                            <CaracterLimit> Max 100 caracteres </CaracterLimit>
                        </Field>                       
                        <TextArea
                            multiline
                            maxLength={100}
                            numberOfLines={5}
                            autoCorrect={false}
                            onChangeText={setDescription}
                        />
                        <Footer>
                            <Button 
                                title="Agendar"
                                onPress={handleSave} 
                            />
                        </Footer>
                    </Form>
                </ScrollView>
            </Background>
            <ModalView visible={openGuildsModal} closeModal={handleCloseGuilds} >
                <Guilds handleGuildSelect={handleGuildSelect} />
            </ModalView>
        </KeyboardAvoidingView>
    );
};