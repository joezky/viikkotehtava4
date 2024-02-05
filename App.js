import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { DATA } from './Data';
import Row from './components/Row';
import Search from './components/Search';

export default function App() {
  const [items, setItems] = useState([]);
  const renderItem = ({ item }) => {
    return (
        <Text>{item.lastname}</Text>
    );
  };

  const executeSearch = (search) => {
    const searchArray = DATA.filter((item) => item.lastname.startsWith(search));
    setItems(searchArray);
    }
    useEffect(() => {
      setItems(DATA);
    }
    , []);

  return (
    <SafeAreaView style={styles.container}>
      <Search executeSearch={executeSearch} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <Row person={item} />
        )}
      />
      <Text></Text>
    </SafeAreaView>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    backgroundColor: 'lightblue',
  },
});