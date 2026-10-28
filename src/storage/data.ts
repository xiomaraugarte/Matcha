import AsyncStorage from '@react-native-async-storage/async-storage';
export type Item = {
    id: string;
    title: string;
};
export type LogEntry = {
    id: string;
    itemId: string;
    date: string;
};
const ITEMS_KEY = 'items';
const LOG_KEY = 'log';
export async function loadItems(): Promise<Item[]> {
    const saved = await AsyncStorage.getItem(ITEMS_KEY);
    if (saved === null) {
        return [];
    }
    return JSON.parse(saved);
}
export async function saveItems(items: Item[]) {
    await AsyncStorage.setItem(ITEMS_KEY, JSON.stringify(items));
}
export async function loadLog(): Promise<LogEntry[]> {
    const saved = await AsyncStorage.getItem(LOG_KEY);
    if (saved === null) {
        return [];
    }
    return JSON.parse(saved);
}
export async function saveLog(log: LogEntry[]) {
    await AsyncStorage.setItem(LOG_KEY, JSON.stringify(log));
}
export function today() {
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return now.getFullYear() + '-' + month + '-' + day;
}
