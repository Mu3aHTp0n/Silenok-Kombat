import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
			<Stack.Screen name="index" options={{ headerShown: false, tabBarIcon: {color: '#FFF', focused: false} }} />
        </Stack>
    )
}
