import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Button, Input } from '@rneui/base';

const URL_IMAGE = 'assets/logo-sosit.png';

interface State {
  email: string;
  senha: string;
  message: string;
}

export default function App() {
  const [state, setState] = useState<State>({
    email: '',
    senha: '',
    message: '',
  });

  const handleChangeEmail = (text: string) => {
    setState({ ...state, email: text });
  };

  const handleChangeSenha = (text: string) => {
    setState({ ...state, senha: text });
  };

  const handleClick = () => {
    const { email, senha } = state;
    console.log("Email", email);
    console.log("Senha", senha);
    if (!email || !senha) {
      setState({ ...state, message: 'Preencha todos os campos.' });
    } else if (email === "adm" && senha === "1234") {
      setState({ ...state, message: 'Autenticado com sucesso.' });
    } else {
      setState({ ...state, message: 'E-mail e/ou Senha incorreto(s).' });
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.card, styles.elevation]}>
        <Image
          style={styles.image}
          source={{
            uri: './assets/icon.png',
          }}
        />
        <Input
          placeholder="E-mail"
          onChangeText={handleChangeEmail}
          value={state.email}
        />
        <Input
          placeholder="Senha"
          onChangeText={handleChangeSenha}
          value={state.senha}
          secureTextEntry={true}
        />
        <Button 
          onPress={handleClick} 
          title="Enviar" />
        <Text style={styles.textLink} >
          Esqueceu sua senha?
        </Text>
        <Text
          style={styles.textMensagem}
        >
          {state.message}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'lightblue',

    alignItems: 'center',
    justifyContent: 'center',

    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 10,
  },
  elevation: {
    elevation: 20,
    shadowColor: '#52006A',
  },
  textLink: {
    textAlign: 'center',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  textMensagem: {
    textAlign: 'center',
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 300
  },
});
