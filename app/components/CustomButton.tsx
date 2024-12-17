import React from 'react';
import {TouchableOpacity, Text} from "react-native";

interface IComponentProps {
	title: string;
	containerStyles?: string,
	handlePress?: () => void;
}

function CustomButton({title, containerStyles, handlePress}: IComponentProps) {
	return (
		<TouchableOpacity className={`bg-purple-900 rounded-xl p-4 justify-center items-center ${containerStyles}`}
						  onPress={handlePress}>
			<Text className={`text-white text-lg font-bold`}>{title}</Text>
		</TouchableOpacity>
	);
}

export default CustomButton;