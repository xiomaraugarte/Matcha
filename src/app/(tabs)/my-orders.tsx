import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../constants/colors';
import { fonts } from '../../constants/fonts';

export default function MyOrders() {
    return (
        <SafeAreaView style={styles.screen}>
            <Text style={styles.title}>Mis pedidos</Text>
            <View style={styles.empty}>
                <Ionicons name="receipt-outline" size={64} color={colors.primarySoft} />
                <Text style={styles.emptyText}>Todavía no pediste nada</Text>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    screen: { flex: 1, padding: 24, backgroundColor: colors.background },
    title: { fontSize: 18, fontFamily: fonts.h2, color: colors.text },
    empty: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12 },
    emptyText: { fontSize: 16, fontFamily: fonts.p, color: colors.textMuted },
});
