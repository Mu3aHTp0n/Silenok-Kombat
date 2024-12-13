import {TextInput, View, Text, Image, TouchableOpacity} from "react-native";
import React, {useState} from 'react';
import icons from "../../constants/icons";

interface IComponentProps {
	title: string,
	value: string,
	placeholder: string,
	handleChangeText: any,
	otherStyles: string,
}

function FormField({title, value, placeholder, handleChangeText, otherStyles}: IComponentProps) {
	const [showPassword, setShowPassword] = useState(false)
	const [isFocused, setIsFocused] = useState(false);

	return (
		<View className={`space-y-2 ${otherStyles}`}>
			<Text className='text-gray-400 text-xl'>{title}</Text>
			<View className={`rounded-2xl h-16 w-full bg-purple-900 px-4 border-2 justify-center items-center flex-row border-fuchsia-950 ${isFocused ? 'border-white' : 'border-fuchsia-950'}`}>
				<TextInput className='flex-1 text-white text-base' value={value}
						   placeholder={placeholder}
						   placeholderTextColor="#7b7b8b"
						   onChangeText={handleChangeText}
						   onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}
						   secureTextEntry={(title === 'Пароль' || title === 'Подтверждение пароля') && !showPassword} />
				{(title === 'Пароль' || title === 'Подтверждение пароля') && (
					<TouchableOpacity onPress={() => {
						setShowPassword(!showPassword);
					}}>
						<Image source={!showPassword ? icons.eye : icons.closedEye}
							   className='w-6 h-6'
							   resizeMode='contain'/>
					</TouchableOpacity>
				)}
				{title === 'Электронная почта' && (
					<TouchableOpacity onPress={() => {
						null
					}}>
						<Image source={icons.email}
							   className='w-8 h-8'
							   resizeMode='contain'/>
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
}

export default FormField;