import { Text, SafeAreaView, View } from "react-native";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

import "../global.css";

export default function Index() {
    return (
        <View className="bg-cyan-950">
            <SafeAreaView className='justify-center items-center h-full bg-gray-900' >
                <Text className="text-purple-600 font-bold text-3xl">ヴラディレーナ・ミリーゼ</Text>
                <Text className="text-purple-600 font-bold text-3xl pb-8">死にたい</Text>
                <StatusBar style='auto'/>
                <View className="flex-row gap-12">
                    <Link className='color-purple-800 bg-neutral-200 text-2xl px-6 py-2 rounded-lg' href='/(auth)/sign-in'>Sing-in</Link>
                    <Link className='color-purple-800 bg-neutral-200 text-2xl px-6 py-2 rounded-lg' href='/(tabs)/mine'>Mine</Link>
                </View>
            </SafeAreaView>
        </View>
    );
}