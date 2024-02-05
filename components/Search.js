import React, {useState} from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

export default function Search({executeSearch}) {
    const [search, setSearch] = useState('');

    return (
        <View style={styles.searchBox}>
            <TextInput
                value={search}
                placeholder="Search..."
                onChangeText={text => setSearch(text)}
                returnKeyType="search"
                onSubmitEditing={() => executeSearch(search)}
            />
            <Button title="Search" onPress={executeSearch}/>
        </View>
    );
}

const styles = StyleSheet.create({
    searchBox: {
        marginBottom: 20,
        flexDirection: 'row',
        padding: 5,
        borderColor: '#333',
        borderWidth: 1,
    },
});