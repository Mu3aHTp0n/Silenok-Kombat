import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {View, Text, SafeAreaView, Image, TouchableHighlight} from 'react-native';

import skins from '../../constants/skins';
import icons from '../../constants/icons';

export default function Mine() {
	const [coin, setCoin] = useState(0)

	return (
		<SafeAreaView className='bg-slate-900 h-full justify-center items-center'>
			<View className='items-center justify-center'>
				<View className='flex-row'>
					<Image className='w-10 h-10 mr-2' source={icons.coin}/>
					<Text className='text-white font-bold text-4xl mb-4'>
						{coin}
					</Text>
				</View>
				<TouchableHighlight className='rounded-full bg-white w-72 h-72 border-8 border-violet-900' 
								  onPress={() => setCoin(coin+1)}>
					<Image className='rounded-full w-full h-full' source={skins.default}/>
				</TouchableHighlight>
			</View>
		</SafeAreaView>
	)
}