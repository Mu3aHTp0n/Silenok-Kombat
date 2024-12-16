import { Text, SafeAreaView, View } from "react-native";
import {Redirect, router} from "expo-router";
import { StatusBar } from "expo-status-bar";

import CustomButton from "@/components/CustomButton";
import "../global.css";

export default function Index() {
    return (
        <View className="bg-cyan-950">
            <SafeAreaView className='justify-center items-center h-full bg-gray-900' >
                <Text className="text-purple-600 font-bold text-3xl">ヴラディレーナ・ミリーゼ</Text>
                <Text className="text-purple-600 font-bold text-3xl pb-8">死にたい</Text>
                <StatusBar style='auto'/>
                <View className="flex gap-12">
                    <CustomButton title={'Авторизоваться'}
                                  handlePress={() => router.push('/sign-in')}  containerStyles={''}/>
                    <CustomButton title={'Зарегистрироваться'}
                                  handlePress={() => router.push('/sign-up')}  containerStyles={''}/>
                    <CustomButton title={'Тапаем シレノク'}
                                  handlePress={() => router.push('/mine')}  containerStyles={''}/>
                </View>
            </SafeAreaView>
        </View>
    );
}