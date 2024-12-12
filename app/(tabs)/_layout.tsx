import { Tabs, Redirect } from 'expo-router';
import { View, Image, Text, StyleSheet } from 'react-native'

import icons from '../../constants/icons';
import React from 'react';

interface IComponentProps {
	icon: any,
	color: string,
	name: string,
	focused: boolean,
}

const TabIcon = ({ icon, color, name, focused }: IComponentProps) => {
	return (
		<View className="justify-center items-center gap-2">
			<Image source={icon}
				   resizeMode='contain'
				   style={styles.iconImg}
				   tintColor={color}
					className="w-6 h-6"/>
			<Text className='text-' style={{color: color, }}>
				{name}
			</Text>
		</View>
	)
}

export default function TabsLayout() {
	return (
		<>
			<Tabs screenOptions={{
				tabBarShowLabel: false,
				tabBarActiveTintColor: '#8d2dc5',
				tabBarStyle: {
					backgroundColor: '#161622',
					borderTopWidth: 1,
					borderTopColor: '#232533',
					height: 96,
					paddingTop: 15,
				}
			}}>
				<Tabs.Screen
					name={"mine"}
					options={{
						title: 'Mine',
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<TabIcon
								icon={icons.mine}
								color={color}
								name="Mine"
								focused={focused}
							/>
						)
					}}
				/>
				<Tabs.Screen
					name={"leaderboard"}
					options={{
						title: 'Leaderboard',
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<TabIcon
								icon={icons.leaderboards}
								color={color}
								name="Leaderboard"
								focused={focused}
							/>
						)
					}}
				/>
				<Tabs.Screen
					name={"skins"}
					options={{
						title: 'Skins',
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<TabIcon
								icon={icons.skins}
								color={color}
								name="Skins"
								focused={focused}
							/>
						)
					}}
				/>
			</Tabs>
		</>
	)
}

const styles = StyleSheet.create({
	iconImg: {
		width: 24,
		height: 24,
	}
})