import {TextInput, View, Text} from "react-native";
import React, {useState} from 'react';

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
			<Text style={{color: 'gray'}}>{title}</Text>
			<View style={{backgroundColor: '#000200', borderRadius: '12'}} >
				<TextInput className='mb-8 bg-amber-900' style={{color: 'gray'}} value={value}
						   onChangeText={handleChangeText}
						   placeholder={placeholder}
						   placeholderTextColor="#7b7b8b"
						   secureTextEntry={title === 'Пароль' && !showPassword} />
			</View>
		</View>
	);
}

export default FormField;