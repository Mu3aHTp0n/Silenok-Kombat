import {SafeAreaView, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import {Link} from "expo-router";
import axios from "axios";

export default function SignUp() {
	const [form, setForm] = useState({
		username: "",
		password: "",
		confirmPassword: "",
		code: "",
		email: "",
	})

	function registration() {
		// TODO: проверка ключей на пустую строку
		axios.post('demo/registration', {
			username: form.username,
			password: form.password,
			confirmPassword: form.password,
			code: form.code,
			email: form.email,
		})
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
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
				<CustomButton title={'Войти'}
							  handlePress={() => registration}
							  containerStyles={'mt-12'}/>
				<View className="pt-5 flex-row justify-items-center">
					<Text className='text-lg text-gray-100 w-42'>Уже есть аккаунт? </Text>
					<Link className='text-lg text-purple-800 font-bold underline' href={"/sign-in"}>Авторизуйтесь</Link>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}