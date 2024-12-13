import {SafeAreaView, View} from 'react-native';
import React, {useState} from 'react';
import FormField from "@/components/FormField";

export default function SignIn() {
	const [form, setForm] = useState({
		login: '',
		password: '',
	})

	return (
		<SafeAreaView className='bg-slate-900 h-full'>
			<View className='flex top-1/4 h-full px-12'>
				<FormField title='Логин'
						   value={form.login}
						   placeholder={''}
						   handleChangeText={(e: any) => setForm({ ...form, login: e})} />
				<FormField title='Пароль'
						   value={form.password}
						   placeholder={''}
						   handleChangeText={(e: any) => setForm({ ...form, password: e})} />

			</View>
		</SafeAreaView>
	)
}