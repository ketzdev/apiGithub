import { StyleSheet, Text, View } from 'react-native';
import api from './services/api';
import {useState, useEffect} from 'react';

export default function App() {
  const [user, setUser] = useState();
  useEffect(()=>{
    api.get("/users/romulo27")
      .then((response) => setUser(response.data))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);

    });
  },[]);


  return (
    <View style={styles.container}>
      <Text>Usuário: {user?.login} </Text>
      <Text>Biográfia: {user?.bio} </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
