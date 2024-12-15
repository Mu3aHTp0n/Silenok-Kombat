import {SafeAreaView, View, Text} from 'react-native';
import React, {useState} from 'react';
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import {Link} from "expo-router";
import axios from "axios";

export default function SignIn() {
	const [form, setForm] = useState({
		login: '',
		password: '',
	})

	function auth() {
		// Проверка на наличие пустых полей
		const isFormValid = Object.values(form).every(value => value !== '');
		if (isFormValid) {
			axios.post('demo/auth', {
				username: form.login,
				password: form.password,
			})
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
		}
	}

	return (
		<SafeAreaView className='bg-slate-900 h-full'>
			<View className='flex top-1/4 h-full px-12'>
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
				<CustomButton title={'Войти'}
							  handlePress={() => auth}
							  containerStyles={'mt-12'}/>
				<View className="pt-5 flex-row justify-items-center">
					<Text className='text-lg text-gray-100 w-32'>Нет аккаунта? </Text>
					<Link className='text-lg text-purple-800 font-bold underline' href={"/sign-up"}>Зарегистрируйтесь</Link>
				</View>
			</View>
		</SafeAreaView>
	)
}