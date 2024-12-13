import {TextInput, View, Text, Image, TouchableOpacity} from "react-native";
import React, {useState} from 'react';
import icons from "../../constants/icons";

interface IComponentProps {
	title: string,
	value: string,
	placeholder: any,
	handleChangeText: any,
}

function FormField({title, value, placeholder, handleChangeText}: IComponentProps) {
	const [showPassword, setShowPassword] = useState(false)

	return (
		<View>
			<Text className='text-gray-400 text-xl mt-8'>{title}</Text>
			<View className='rounded-2xl h-16 w-full bg-purple-900 px-4 border-2 border-black-200 justify-center items-center flex-row active:border-sky-800'>
				<TextInput className='flex-1 text-neutral-300' value={value}
						   onChangeText={handleChangeText}
						   placeholder={placeholder}
						   placeholderTextColor="#7b7b8b"
						   secureTextEntry={title === 'Пароль' && !showPassword} />
				{title === 'Пароль' && (
					<TouchableOpacity onPress={() => {
						setShowPassword(!showPassword);
					}}>
						<Image source={!showPassword ? icons.eye : icons.closedEye}
							   className='w-6 h-6'
							   resizeMode='contain'/>
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
}

export default FormField;