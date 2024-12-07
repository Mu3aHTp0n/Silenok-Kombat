import { Tabs, Redirect } from 'expo-router';
import { View, Image, Text, StyleSheet } from 'react-native'

import icons from '../../constants/icons';
import React from 'react';

const TabIcon = ({ icon, color, name, focused }: { icon: any; color: string; name: string; focused: boolean }) => {
	return (
		<View style={{display: 'flex', justifyContent: 'center', gap: 2, alignItems: 'center'}}>
			<Image source={icon}
				   resizeMode='contain'
				   style={styles.iconImg}
				   tintColor={color} />
			<Text style={{color: color, }}>
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