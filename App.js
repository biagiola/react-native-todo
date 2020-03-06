import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {

  const [todos, settodos] = useState([
      { test:'buy coffee' , key: '1'},
      { test:'create an app' , key: '2'},
      { test:'play on the switch' , key: '3'}
  ]);

  return (
    <View style={styles.container}>
        <header/>
        <View style={styles.content}>
            {/* add todo form */}
            <View style={styles.list}>
                <FlatList
                    data={todos}
                    renderItem={ ({item}) => (
                        <Text>{item.text}</Text>
                    )}
                />
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
      padding: 40,
  },
  list: {
      marginTop: 20,
  },
});
