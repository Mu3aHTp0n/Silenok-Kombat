import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { useEffect, useState } from 'react';
import {View, Text, SafeAreaView, Image, TouchableHighlight} from 'react-native';

import skins from '../../constants/skins';
import icons from '../../constants/icons';

export default function Mine() {
	const [coin, setCoin] = useState(0)
	const [tempCoin, setTempCoin] = useState(0)

	useEffect(() => {
		axios.get('https://silenok.containerapps.ru/demo/getCoin', {
			headers: {
				'Authorization': 'Bearer ' + SecureStore.getItem('userToken')
			}
		})
			.then(response => {
				const playerCoin = response.data.coin;
				setCoin(playerCoin);
			})
	}, [])

	useEffect(() => {
		const intervalId = setInterval(() => {
			axios.put('https://silenok.containerapps.ru/demo/changeCoin', 
			{ 
				coin: tempCoin 
			}, 
			{ 
				headers: {'Authorization': 'Bearer ' + SecureStore.getItem('userToken')} 
			})
			.then(() =>
				setTempCoin(0)
			)
		  }, 60000);

		  return () => clearInterval(intervalId);
	}, [])
	


	return (
		<SafeAreaView className='bg-slate-900 h-full pt-12 justify-center'>
			<View className='items-center justify-center'>
				<View className='flex-row'>
					<Image className='w-10 h-10 mr-2' source={icons.coin}/>
					<Text className='text-white font-bold text-4xl mb-4'>
						{coin}
					</Text>
				</View>
				<TouchableHighlight className='rounded-full bg-white w-72 h-72 border-8 border-violet-900' 
								  onPress={() => {
									setCoin(coin+1)
									setTempCoin(tempCoin+1)
									}}>
					<Image className='rounded-full w-full h-full' source={skins.default}/>
				</TouchableHighlight>
			</View>
		</SafeAreaView>
	)
}