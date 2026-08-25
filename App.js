import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import * as Location from 'expo-location';

export default function App() {
  const [users, setUsers] = useState([
    { id: '1', name: 'Local User 1', km: '2.3km', lang: 'Telugu' },
    { id: '2', name: 'Local User 2', km: '5.1km', lang: 'Hindi' },
    { id: '3', name: 'Local User 3', km: '12km', lang: 'Telugu' },
  ]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Location permission needed for 30KM connect');
        return;
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}><Text style={{color:'#0D47A1'}}>WE</Text><Text style={{color:'#FF6F00'}}>LOOP</Text></Text>
        <Text style={styles.sub}>Local Connect - 30KM</Text>
      </View>

      <Text style={styles.title}>30KM Lo - Users:</Text>
      <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.km} - {item.lang}</Text>
            <TouchableOpacity style={styles.btn}><Text style={{color:'white'}}>Chat</Text></TouchableOpacity>
          </View>
        )}
      />
      <Text style={styles.footer}>WELOOP - No Screenshot - Full DP Privacy - 22 Languages</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 50, padding: 15 },
  header: { alignItems: 'center', marginBottom: 20 },
  logo: { fontSize: 40, fontWeight: 'bold' },
  sub: { color: '#673AB7', fontSize: 16 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  card: { backgroundColor: '#f5f5f5', padding: 15, borderRadius: 10, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  name: { fontWeight: 'bold' },
  btn: { backgroundColor: '#0D47A1', padding: 8, borderRadius: 5 },
  footer: { textAlign: 'center', marginTop: 20, color: 'gray', fontSize: 12 }
});