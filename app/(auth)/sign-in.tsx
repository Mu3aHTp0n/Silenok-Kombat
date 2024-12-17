import React, {useState} from 'react';
import axios from "axios";
import * as SecureStore from 'expo-secure-store';

import {SafeAreaView, View, ScrollView, Text} from 'react-native';
import {Link} from "expo-router";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";

export default function SignIn() {
	const [form, setForm] = useState({
		login: '',
		password: '',
	})
	const [isError, setIsError] = useState('')
	const [token, setToken] = useState('')
	

	function auth() {
		// Проверка на наличие пустых полей
		const isFormValid = Object.values(form).every(value => value !== '');
		if (isFormValid) {
			axios.post(`https://silenok.containerapps.ru/demo/auth`, {
				username: form.login,
				password: form.password,
			})
			.then(response => {
				const token = response.data.token;
			
				if (token) {
					SecureStore.setItemAsync('userToken', token)
						.then(() => {
							setForm({...form, login: '', password: ''});
						})
				} else {
					console.error('Токен не найден в ответе:', response.data);
				}
			})
			.catch(error => {
				if (axios.isAxiosError(error)) {
					const axiosError = error;
					if (axiosError.response) {
					  const errorMessage = axiosError.response.data.message;
					  setIsError(errorMessage);
					}
				}
			})
		}
	}

	return (
		<SafeAreaView className='bg-slate-900 pt-10 h-full'>
			<View className='flex h-full px-12 justify-center'>
				<FormField title='Логин'
						   value={form.login}
						   placeholder={''}
						   otherStyles={'mt-7'}
						   handleChangeText={(e: any) => setForm({ ...form, login: e})} />
				<FormField title='Пароль'
						   value={form.password}
						   placeholder={''}
						   otherStyles={'mt-7'}
						   handleChangeText={(e: any) => setForm({ ...form, password: e})} />
				{ isError && <Text className='font-bold text-red-700'>{isError}</Text> }
				<Text></Text>
				<CustomButton title={'Войти'}
							  handlePress={() => auth()}
							  containerStyles={'mt-12'}/>
				<View className="pt-5 flex-row justify-items-center">
					<Text className='text-lg text-gray-100 w-32'>Нет аккаунта? </Text>
					<Link className='text-lg text-purple-800 font-bold underline' href={"/sign-up"}>Зарегистрируйтесь</Link>
				</View>
			</View>
		</SafeAreaView>
	)
}