import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import {SafeAreaView, View, Text, FlatList} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useIsFocused } from '@react-navigation/native';

interface Player {
	rank: number,
	playerId: number,
	name: string,
	count: number,
}
let timer;

export default function leaderboard() {
	const isFocused = useIsFocused();
	const [leaders, setLeaders] = useState<Player[]>([])

	function getLeaderboard() {
		axios.get('https://silenok.containerapps.ru/demo/getLeaderboard')
		.then((response) => {
			setLeaders(response.data)
		})
	}

	
	useEffect(() => {
		if (isFocused) {
			getLeaderboard();			
			timer = setTimeout(() => {getLeaderboard()}, 200)
		}
	}, [isFocused])
	
	function Leader({ item }: { item: Player }) {
		return (
			<View className="rounded-xl w-full bg-purple-950 mb-2 px-2 py-4 flex flex-row justify-between">
				<Text className="font-bold text-2xl w-10 mr-2 text-white">{ item.rank }</Text>
				<Text className="font-bold text-2xl flex-1 text-white">{ item.name }</Text>
				<Text className="font-bold text-2xl text-yellow-400">{ item.count }</Text>
			</View>
		)
	}

	return (
		<SafeAreaView className="bg-slate-900 h-full px-5 pt-12">
			<FlatList data={leaders}
					  renderItem={Leader} 
					  keyExtractor={(item) => item.playerId.toString()}/>
		</SafeAreaView>
	)
}