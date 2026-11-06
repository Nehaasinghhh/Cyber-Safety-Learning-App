
import { DarkTheme, DefaultTheme, ThemeProvider, Stack } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerTintColor: '#172554',
          headerTitleStyle: {
            fontWeight: '700',
          },
          headerShadowVisible: false,
          animation: 'slide_from_right',
          animationDuration: 300,
          contentStyle: {
            backgroundColor: '#F8FAFC',
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="lessons/[id]"
          options={{
            title: 'Learning Module',
          }}
        />

        <Stack.Screen
          name="lessons/module-2"
          options={{
            title: 'Module 2',
          }}
        />

        <Stack.Screen
          name="lessons/module-3"
          options={{
            title: 'Module 3',
          }}
        />

        <Stack.Screen
          name="lessons/module-4"
          options={{
            title: 'Module 4',
          }}
        />

        <Stack.Screen
          name="lessons/module-5"
          options={{
            title: 'Module 5',
          }}
        />

        <Stack.Screen
          name="lessons/module-6"
          options={{
            title: 'Module 6',
          }}
        />

        <Stack.Screen
          name="red-flags"
          options={{
            title: 'Spot the Red Flags',
          }}
        />

        <Stack.Screen
          name="quiz"
          options={{
            title: 'Cyber Safety Quiz',
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
