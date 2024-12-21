import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { useEffect, useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, Text, SafeAreaView, Image, TouchableHighlight} from 'react-native';

import { useIsFocused } from '@react-navigation/native';

import skins from '../../constants/skins';
import icons from '../../constants/icons';

export default function Mine() {
	const isFocused = useIsFocused();
	const [coin, setCoin] = useState(0);
	const [tempCoin, setTempCoin] = useState(0);
	const intervalRef = useRef();
	const tempCoinRef = useRef(tempCoin);


	function incrementScore() {
		setCoin(prev => prev + 1);
    	setTempCoin(prev => prev + 1);
	}

	async function getCoins() {
		axios.get('https://silenok.containerapps.ru/demo/getCoin', {
			headers: {
				'Authorization': 'Bearer ' + SecureStore.getItem('userToken')
			}
		})
			.then(response => {
				const playerCoin = response.data.coin;
				setCoin(playerCoin);
			})
	}

	async function sendCoin (tempCoins: number) {
		if (tempCoin > 0) {
			axios.put('https://silenok.containerapps.ru/demo/changeCoin', { coin: tempCoins },
				{ headers: { Authorization: 'Bearer ' + (SecureStore.getItem('userToken')) } })
				.then(() => setTempCoin(0));
			clearInterval(intervalRef.current)
		}
	}

	// Получение монет
	useEffect(() => {
		getCoins()
	}, [])

	// Обновление состояния
	useEffect(() => {
        tempCoinRef.current = tempCoin;
    }, [tempCoin]);

	// Отправка при потере фокуса, очистка и установка интервала
	useEffect(() => {
        if (isFocused) {
            intervalRef.current = setInterval(() => {
                sendCoin(tempCoinRef.current);
            }, 30000);
			getCoins()
        } else {
            sendCoin(tempCoinRef.current);
            clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current);
    }, [isFocused]);
	
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
								  onPress={() => incrementScore()}>
					<Image className='rounded-full w-full h-full' source={skins.default}/>
				</TouchableHighlight>
			</View>
		</SafeAreaView>
	)
}