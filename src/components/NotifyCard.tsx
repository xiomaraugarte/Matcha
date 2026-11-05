import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/colors';
import { fonts } from '../constants/fonts';
import { askNotificationPermission, scheduleOrderReady } from '../notifications/notifications';

type Status = 'idle' | 'scheduled' | 'denied';
<<<<<<< HEAD
=======

>>>>>>> f040b8a11fdebf7dec1591058c2e51f22ef89cc1
export default function NotifyCard() {
    const [status, setStatus] = useState<Status>('idle');
    const handlePress = async () => {
        const allowed = await askNotificationPermission();
        if (!allowed) {
            setStatus('denied');
            return;
        }
        await scheduleOrderReady();
        setStatus('scheduled');
    };
<<<<<<< HEAD
=======

>>>>>>> f040b8a11fdebf7dec1591058c2e51f22ef89cc1
    if (status === 'scheduled') {
        return (
            <View style={styles.card}>
                <Ionicons name="notifications" size={24} color={colors.primary} />
                <Text style={styles.text}>Listo, te avisamos en unos segundos</Text>
            </View>
        );
    }
<<<<<<< HEAD
=======

>>>>>>> f040b8a11fdebf7dec1591058c2e51f22ef89cc1
    if (status === 'denied') {
        return (
            <View style={styles.card}>
                <Ionicons name="notifications-off-outline" size={24} color={colors.textMuted} />
                <Text style={styles.text}>Sin avisos. Puedes activarlos en los ajustes del celular.</Text>
            </View>
        );
    }
<<<<<<< HEAD
=======

>>>>>>> f040b8a11fdebf7dec1591058c2e51f22ef89cc1
    return (
        <View style={styles.card}>
            <Ionicons name="notifications-outline" size={24} color={colors.primary} />
            <View style={styles.info}>
                <Text style={styles.title}>¿Te avisamos cuando esté listo?</Text>
                <Text style={styles.text}>Una sola notificación, nada más.</Text>
            </View>
            <Pressable style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Avísame</Text>
            </Pressable>
        </View>
    );
}
<<<<<<< HEAD
=======

>>>>>>> f040b8a11fdebf7dec1591058c2e51f22ef89cc1
const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        padding: 16,
        borderRadius: 24,
        backgroundColor: colors.card,
    },
    info: { flex: 1, gap: 4 },
    title: { fontSize: 16, fontFamily: fonts.h2, color: colors.text },
    text: { flexShrink: 1, fontSize: 13, fontFamily: fonts.p, color: colors.textMuted },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 999,
        backgroundColor: colors.primary,
    },
    buttonText: { fontSize: 14, fontFamily: fonts.h2, color: colors.onPrimary },
<<<<<<< HEAD
});
=======
});
>>>>>>> f040b8a11fdebf7dec1591058c2e51f22ef89cc1
