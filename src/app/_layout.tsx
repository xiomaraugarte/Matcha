import { colors } from '@/constants/colors';
import { Inder_400Regular } from '@expo-google-fonts/inder';
import { Lexend_600SemiBold } from '@expo-google-fonts/lexend';
import { ZalandoSansSemiExpanded_800ExtraBold } from '@expo-google-fonts/zalando-sans-semiexpanded';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { fonts } from '../constants/fonts';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    ZalandoSansSemiExpanded_800ExtraBold,
    Lexend_600SemiBold,
    Inder_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        title: '',
        headerShadowVisible: false,
        headerTintColor: colors.text,
        headerStyle: { backgroundColor: colors.background },
        contentStyle: { backgroundColor: colors.background },
        headerTitleStyle: { fontFamily: fonts.h2 },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="product/[id]"
        options={{ headerStyle: { backgroundColor: colors.primary }, headerTintColor: colors.onPrimary }}
      />
      <Stack.Screen name="order" options={{ title: 'Tu pedido' }} />
      <Stack.Screen name="order-confirmed" options={{ headerShown: false }} />
    </Stack>
  );
}
