import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowBanner: true,
        shouldShowList: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
});

export async function askNotificationPermission(): Promise<boolean> {
    if (Platform.OS === 'web') {
        return false;
    }
    if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('default', {
            name: 'Avisos',
            importance: Notifications.AndroidImportance.MAX,
        });
    }
    const current = await Notifications.getPermissionsAsync();
    if (current.granted) {
        return true;
    }
    const answer = await Notifications.requestPermissionsAsync();
    return answer.granted;
}
export async function scheduleOrderReady() {
    if (Platform.OS === 'web') {
        return;
    }
    await Notifications.scheduleNotificationAsync({
        content: {
            title: '¡Tu pedido está listo!',
            body: 'Te espera en la barra ',
        },
        trigger: {
            type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
            seconds: 10,
        },
    });
}
