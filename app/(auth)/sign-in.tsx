import {SafeAreaView, ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import FormField from "@/components/FormField";

export default function SignIn() {
	const [form, setForm] = useState({
		login: '',
		password: '',
	})

	return (
		<SafeAreaView style={{backgroundColor: "#161622", height: '100%'}}>
			<ScrollView>
				<View>


					<FormField title='Логин'
							   value={form.login}
							   placeholder={''}
							   handleChangeText={(e: any) => setForm({ ...form, login: e})} />
					<FormField title='Пароль'
							   value={form.password}
							   placeholder={''}
							   handleChangeText={(e: any) => setForm({ ...form, password: e})} />
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}