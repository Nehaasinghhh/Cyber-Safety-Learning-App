
import { DarkTheme, DefaultTheme, ThemeProvider, Stack } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="lessons/[id]"
          options={{ title: 'Learning Module' }}
        />

        <Stack.Screen
          name="lessons/module-3"
          options={{ title: 'Module 3' }}
        />

        <Stack.Screen
          name="lessons/module-4"
          options={{ title: 'Module 4' }}
        />

        <Stack.Screen
          name="lessons/module-5"
          options={{ title: 'Module 5' }}
        />

        <Stack.Screen
          name="lessons/module-6"
          options={{ title: 'Module 6' }}
        />

        <Stack.Screen
          name="red-flags"
          options={{ title: 'Spot the Red Flags' }}
        />

        <Stack.Screen
          name="quiz"
          options={{ title: 'Cyber Safety Quiz' }}
        />
      </Stack>
    </ThemeProvider>
  );
}
