import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

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
import { GuildProps } from '../../components/Guild';


export default function AppointmentCreate() {

    const [category, setCategory] = useState('');
    const [openGuildsModal, setOpenGuildsModal] = useState(false);
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

    const handleCategorySelect = (categoryId: string) => {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    };

    const handleOpenGuilds = () => {
        setOpenGuildsModal(true);
    };

    const handleGuildSelect = (guildSelect: GuildProps) => {
        setGuild(guildSelect);
        setOpenGuildsModal(false);
    };

    return(
        <KeyboardAvoidingView 
            style={{flex: 1}}
            behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}
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
                                { guild.icon 
                                    ? <GuildIcon />
                                    : <GuildImage />
                                }
                                <SelectBody>
                                    <Label> 
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
                                    <SmallInput maxLength={2} />
                                    <Divider> / </Divider>
                                    <SmallInput maxLength={2} />
                                </Collumn>
                            </FieldContent>
                            <FieldContent>
                                <Label> Hora e minuto </Label>
                                <Collumn>
                                    <SmallInput maxLength={2} />
                                    <Divider> : </Divider>
                                    <SmallInput maxLength={2} />
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
                        />
                        <Footer>
                            <Button title="Agendar" />
                        </Footer>
                    </Form>
                </ScrollView>
            </Background>
            <ModalView visible={openGuildsModal} >
                <Guilds handleGuildSelect={handleGuildSelect} />
            </ModalView>
        </KeyboardAvoidingView>
    );
};