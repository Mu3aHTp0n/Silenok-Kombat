import {SafeAreaView, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';

import { router } from 'expo-router';

import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import {Link} from "expo-router";
import axios from "axios";

export default function SignUp() {
	const [isError, setIsError] = useState('')
	const [message, setMessage] = useState('')
	const [form, setForm] = useState({
		username: "",
		password: "",
		confirmPassword: "",
		code: "",
		email: "",
	})

	function registration() {
		// Проверка на наличие пустых полей
		const isFormValid = Object.values(form).every(value => value !== '');
		if (isFormValid) {
			axios.post(`https://silenok.containerapps.ru/demo/registration`, {
				username: form.username,
				password: form.password,
				confirmPassword: form.confirmPassword,
				code: form.code,
				email: form.email,
			})
			.then(response => {
				setIsError('')
				setForm({...form, 
					username: "",
					password: "",
					confirmPassword: "",
					code: "",
					email: "",
				})
				setMessage(response.data.message)
				setTimeout(() => router.push('/'), 2000)	
			})
			.catch(error => {
				if (axios.isAxiosError(error)) {
					const axiosError = error;
					if (axiosError.response) {
						let errorMessage
						if (axiosError.response.data?.code != undefined) {
							errorMessage = axiosError.response.data.code;
						}
						if (axiosError.response.data?.passwordMatch != undefined) {
							errorMessage = errorMessage + " " + axiosError.response.data.passwordMatch;
						}
						if (axiosError.response.data?.username != undefined) {
							errorMessage = errorMessage + " " + axiosError.response.data.username;
						}
					    setIsError(errorMessage);
					}
				}
			})
		} else setIsError('Не все поля заполнены')
	}

	return (
		<SafeAreaView className='bg-slate-900 h-full'>
			<ScrollView className='flex h-full pt-12 px-12'>
				<FormField title='Логин'
						   value={form.username}
						   placeholder={''}
						   otherStyles={'mt-7'}
						   handleChangeText={(e: any) => setForm({ ...form, username: e})} />
				<FormField title='Электронная почта'
						   value={form.email}
						   placeholder={''}
						   otherStyles={'mt-7'}
						   handleChangeText={(e: any) => setForm({ ...form, email: e})} />
				<FormField title='Код'
						   value={form.code}
						   placeholder={''}
						   otherStyles={'mt-7'}
						   handleChangeText={(e: any) => setForm({ ...form, code: e})} />
				<FormField title='Пароль'
						   value={form.password}
						   placeholder={''}
						   otherStyles={'mt-7'}
						   handleChangeText={(e: any) => setForm({ ...form, password: e})} />
				<FormField title='Подтверждение пароля'
						   value={form.confirmPassword}
						   placeholder={''}
						   otherStyles={'mt-7'}
						   handleChangeText={(e: any) => setForm({ ...form, confirmPassword: e})} />
				{ isError && <Text className='text-red-700 font-bold text-xl'>{ isError }</Text>}
				{ message && <Text className='text-green-600 font-bold text-xl'>{ message }</Text> }
				<CustomButton title={'Войти'}
							  handlePress={() => registration()}
							  containerStyles={'mt-12'}/>
				<View className="pt-5 flex-row justify-items-center">
					<Text className='text-lg text-gray-100 w-42'>Уже есть аккаунт? </Text>
					<Link className='text-lg text-purple-800 font-bold underline' href={"/sign-in"}>Авторизуйтесь</Link>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}