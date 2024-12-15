import {TextInput, View, Text, Image, TouchableOpacity} from "react-native";
import React, {useState} from 'react';
import icons from "../../constants/icons";
import axios from "axios";

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
	const [isError, setIsError] = useState(false);

	function codeRequest() {
		if (value !== '') {
			setIsError(false);
			axios.post('demo/sendCode', {
				email: value
			})
				.then(response => {
					console.log(response)
				})
				.catch(error => {
					console.log(error)
				})
		} else {
			setIsError(true);
		}
	}

	return (
		<View className={`space-y-2 ${otherStyles}`}>
			<Text className='text-gray-400 text-xl'>{title}</Text>
			<View className={`rounded-2xl h-16 w-full bg-purple-900 px-4 border-2 justify-center items-center flex-row border-fuchsia-950 ${isError ? 'border-red-600' : ''} ${isFocused ? 'border-white' : 'border-fuchsia-950'}`}>
				<TextInput className='flex-1 text-white text-base'
						   value={value}
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
							   className='w-8 h-8'
							   resizeMode='contain'/>
					</TouchableOpacity>
				)}
				{title === 'Электронная почта' && (
					<TouchableOpacity onPress={() => {
						codeRequest()
					}}>
						<Image source={icons.email}
							   className='w-10 h-10'
							   resizeMode='contain'/>
					</TouchableOpacity>
				)}
			</View>
			{isError && <Text className="text-red-600">Заполните поле</Text>}
		</View>
	);
}

export default FormField;