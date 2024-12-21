import { useState, useEffect } from "react";
import { Text, SafeAreaView, View, TouchableHighlight } from "react-native";
import {Redirect, router} from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as SecureStore from 'expo-secure-store';

import { useIsFocused } from "@react-navigation/native";

import CustomButton from "@/components/CustomButton";
import "../global.css";

export default function Index() {
    // const { checkToken, isShow } = useAuth();
    const isFocused = useIsFocused();
    const [isShow, setIsShow] = useState(false)

    async function checkToken() {
        const storedToken = await SecureStore.getItemAsync('userToken');
        setIsShow(!!storedToken); // Устанавливаем isShow в true, если storedToken существует
    }

    useEffect(() => {
        checkToken();
    }, [isFocused]);

    function deleteToken() {
        SecureStore.deleteItemAsync('userToken');
        checkToken();
    }

    return (
        <View className="bg-cyan-950">
            <SafeAreaView className='justify-center items-center h-full bg-gray-900' >
                <Text className="text-purple-600 font-bold text-3xl">ヴラディレーナ・ミリーゼ</Text>
                <Text className="text-purple-600 font-bold text-3xl pb-8">死にたい</Text>
                <StatusBar style='auto'/>
                <View className="flex">
                    {
                        isShow ? (
                            <View className="flex gap-8">
                                <CustomButton title={'Тапаем シレノク'}
                                              handlePress={() => {
                                                setTimeout(() => router.push('/mine'), 500)
                                                }}/>
                                <CustomButton title={"Выйти из аккаунта"}
                                              handlePress={() => deleteToken()}/>
                            </View>
                        ) : (
                            <View className="flex gap-8">
                                <CustomButton title={'Авторизоваться'}
                                              handlePress={() => router.push('/sign-in')}/>
                                <CustomButton title={'Зарегистрироваться'}
                                              handlePress={() => router.push('/sign-up')}/>
                            </View>
                        )
                    }
                </View>
            </SafeAreaView>
        </View>
    );
}