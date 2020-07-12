import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import * as Yup from 'yup';

import useAuth from '../../auth/useAuth';
import Auth from '../../api/auth'
import colors from '../../utils/colors';
import images from '../../utils/images';
import { AppForm, AppFormInput, SubmitButton, ErrorMessage } from '../../components/forms'



const validationSchema = Yup.object().shape({
  email: Yup.string().required().label("Email"),
  password: Yup.string().required().label("Password")
});


const LoginScreen = ({ navigation }) => {

  const auth = useAuth();

  const [loginState, setloginState] = useState({
    hasLoginError: false,
    loginError: null,
    loginLoader: false,
  });

  const hadleLogin = async ({ email, password }) => {
    setloginState({ loginLoader: true });
    const result = await Auth.login(email, password);
    setloginState({ loginLoader: false });
    if (!result.ok) return setloginState({ hasLoginError: true, loginError: "Login failed try again..." });
    // console.log(result);
    auth.logIn(result.headers['x-auth-token']);
  }


  navigation.dispatch(state => {
    // Remove the Loading route from the stack
    const routes = state.routes.filter(r => r.name !== 'Loading');

    return CommonActions.reset({
      ...state,
      routes,
      index: routes.length - 1,
    });
  });

  return (
    <View>
      <ImageBackground source={images.LOGING_BACKGROUND} style={styles.backgroundImage} >
        <Image
          style={styles.topImage}
          source={images.LOGO}
          resizeMode="contain"
        />
        <Text style={styles.headText}>LOGIN</Text>
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={hadleLogin}
          validationSchema={validationSchema}
        >
          <AppFormInput
            name="email"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            label="Email"
            mode="outlined"
            keyboardType='email-address'
          />
          <AppFormInput
            name="password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            style={styles.input}
            label="Password"
            mode="outlined"
          />
          <ErrorMessage style={{ marginTop: 10, alignSelf: "center" }} visible={loginState.hasLoginError} error={loginState.loginError} />

          <SubmitButton
            loading={loginState.loginLoader}
            style={styles.button}
            color={colors.primary}
            contentStyle={styles.buttonContent}
            title="Login"
          />


        </AppForm>


        <View>
          <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
            <Text style={{ fontSize: 16, alignSelf: "center", color: '#94076e', marginTop: 20 }}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableWithoutFeedback onPress={() => navigation.navigate('Dashboard')}>
            <Text style={{ fontSize: 14, alignSelf: "center", color: '#94076e', marginTop: 20 }}>Dashbard</Text>
          </TouchableWithoutFeedback>


        </View>
      </ImageBackground>
    </View>
  );
}

export default LoginScreen


const styles = StyleSheet.create({
  backgroundImage: {
    resizeMode: 'contain', // or 'stretch'
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: 'center'
  },
  button: {
    marginVertical: 20,
    alignSelf: 'center',
  },
  buttonContent: {
    height: 40,
    width: 150,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    margin: 15,
    justifyContent: 'center',
  },
  input: {
    height: 45,
    marginTop: 10,
    width: 300
  },
  headText: {
    fontSize: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'purple'
  },
  image: {
    paddingHorizontal: 10,
  },
  topImage: {
    width: 200, height: 100,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20
  },
  textSocial: {
    fontSize: 15,
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'grey'
  },
  textUnder: {
    fontSize: 15,
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'grey'
  }
});