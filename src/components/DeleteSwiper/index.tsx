import React, { ReactNode, useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useSharedValue, useAnimatedStyle, withTiming} from 'react-native-reanimated';

import { Feather } from '@expo/vector-icons'; 

import { theme } from '../../global/styles/theme';
import ModalDialog from '../ModalDialog';


type Props = {
    children: ReactNode;
    deleteItem: (itemKey:string) => void;
    itemKey: string;
};

export default function DeleteSwiper({ children, deleteItem, itemKey }: Props) {

    const [modalVisible, setModalVisible] = useState(false);

    const { width: screenWidth } = Dimensions.get('window');

    const translateX = useSharedValue(0);
    const itemHeight = useSharedValue(68);
    const itemOpacity = useSharedValue(1);

    const handleModalOpen = () => {
        setModalVisible(true);
    };

    const confirmDelete = () => { 

        deleteItem(itemKey);

        translateX.value = withTiming(-screenWidth);
        itemHeight.value = withTiming(0);
        itemOpacity.value = withTiming(0);   
        setModalVisible(false); 
        
    }

    const cancelDelete = () => { 
        
        translateX.value = withTiming(0);
        setModalVisible(false);

    }

    const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
        onActive: (event) => {
           translateX.value = event.translationX;
           const shouldBeDismissed =  translateX.value < -screenWidth * 0.3;

            if(shouldBeDismissed){
                translateX.value = withTiming(-70);
            } else {
                translateX.value = withTiming(0);
            };
        }
    });

    const rStyle = useAnimatedStyle(() => ({
        transform: [{
            translateX: translateX.value
        }]
    }));

    const rIconContainerStyle = useAnimatedStyle(() => {
        const opacity = withTiming(translateX.value < -screenWidth * 0.1 ? 1 : 0);
        const height = withTiming(translateX.value < -screenWidth * 0.1 ? 10 : screenWidth);
        return {opacity, transform: [{ translateX: height }] }
    });

    const rItemContainer = useAnimatedStyle(() => {
        return {
            height: itemHeight.value,
            opacity: itemOpacity.value
        }
    })

    return(
        <Animated.View style={rItemContainer}>
            <Animated.View style={[styles.trashIcon, rIconContainerStyle]}>
                <Feather name="trash-2" size={30} color={theme.colors.primary} onPress={handleModalOpen}/>
            </Animated.View>
            <PanGestureHandler onGestureEvent={panGesture} >
                <Animated.View style={rStyle} >
                    { children }
                </Animated.View>
            </PanGestureHandler>
            <ModalDialog title="Apagar agendamento?" visible={modalVisible} confirm={confirmDelete} cancel={cancelDelete} isConditional/>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    trashIcon: { 
        position: 'absolute', 
        width: 30, height: 30, 
        right: '10%', 
        top: '20%', 
        justifyContent: 'center', 
        alignItems: 'center'}
});