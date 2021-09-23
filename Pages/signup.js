import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView
} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/FontAwesome5';
const image = {
  uri: 'https://earthsky.org/upl/2012/09/moon_8-31-2012_Priya_Kumar_Muscat_Masqat_Oman.jpeg',
};

const Signup = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [cardno, setCardno] = useState('');
  const [expireydate, setExpireydate] = useState('');
  const Auth = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({user}) => {
        console.log('User account created & signed in!');
        database().ref(`/user/${user.uid}`).set({
          name,email,address,cardno,expireydate
        }).then(()=>alert("data save"));
        props.navigation.navigate('All')
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  }
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <ScrollView style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.4)' }}>
        <View >
          <TouchableWithoutFeedback
            onPress={() => {
              Keyboard.dismiss();
            }}
          >
            <View style={styles.view}>
              <Text style={styles.signupHeading}>SignUp</Text>
              <View>
                <Image
                  style={styles.logo}
                  source={require('../image/user.png')}
                />
              </View>
              <View style={styles.viewText}>
                <TextInput
                  onChangeText={(text) => setName(text)}
                  style={styles.input}
                  placeholder="Enter Username"
                  placeholderTextColor="#ccc"
                />
              </View>

              <View style={styles.viewText}>
                <Icon name="user-alt" size={20} color="#86BFFD" />
                <TextInput
                  keyboardType='email-address'
                  onChangeText={(text) => setEmail(text)}
                  style={styles.input}
                  placeholder="Enter Email"
                  placeholderTextColor="#ccc"
                />
              </View>

              <View style={styles.viewText}>
                <Icon name="lock" size={20} color="#86BFFD" />
                <TextInput
                  onChangeText={(text) => setPassword(text)}
                  style={styles.input}
                  placeholder="Enter Password"
                  secureTextEntry={true}
                  placeholderTextColor="#ccc"
                />
              </View>
              <View style={styles.viewText}>
                <TextInput
                  onChangeText={(text) => setAddress(text)}
                  style={styles.input}
                  placeholder="Address"
                  placeholderTextColor="#ccc"
                />
              </View>
              <View style={styles.viewText}>
                <TextInput
                  onChangeText={(text) => setCardno(text)}
                  style={styles.input}
                  placeholder="Card Number"
                  placeholderTextColor="#ccc"
                />
              </View>
              <View style={styles.viewText}>
                <TextInput
                  onChangeText={(text) => setExpireydate(text)}
                  style={styles.input}
                  placeholder="Expiry date"
                  placeholderTextColor="#ccc"
                />
              </View>



              <TouchableOpacity style={styles.btn} onPress={Auth}>
                <Text style={{ color: '#000' }} >SignUp</Text>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 14,
                }}>
                <Text
                  style={{ color: '#fff', fontSize: 12, paddingHorizontal: 10 }}>
                  Already have an account?{' '}
                </Text>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('Login')}>
                  <Text
                    style={{
                      color: '#7ed6df',
                      fontSize: 14,
                      paddingHorizontal: 10,
                    }}>
                    Login Here
                  </Text>
                </TouchableOpacity>
              </View>
              <Text style={{ color: '#fff', paddingVertical: 12, fontSize: 20 }}>
                ___________OR___________
              </Text>
              <TouchableOpacity style={styles.btnGoogle}>
                <Text style={{ color: '#fff', fontSize: 17 }}>
                  Signup With Google
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  view: {
    // backgroundColor: '#192a56',
    flex: 1,
    alignItems: 'center',
  },
  signupHeading: {
    fontSize: 38,
    letterSpacing: 1,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 10,
    marginTop: 60,
  },
  btn: {
    width: '62%',
    borderRadius: 2,
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnGoogle: {
    width: '62%',
    borderRadius: 2,
    marginTop: 10,
    backgroundColor: '#86BFFD',
    padding: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    color: '#fff',
    fontSize: 16,
    paddingHorizontal: 10,
  },
  forgetPassword: {
    color: '#7ed6df',
    marginTop: 10,
    marginLeft: 110,
  },
  logo: {
    height: 120,
    width: 120,
    marginTop: 15,
    marginBottom: 15,
  },
  header: {
    width: '100%',
    backgroundColor: '#fff',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    color: '#222',
  },
  viewText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#86BFFD',
    width: '60%',
    marginTop: 12,
  },
});

export default Signup;