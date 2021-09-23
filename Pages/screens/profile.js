import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {Divider} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = props => {
  const [profileData, setProfileData] = useState({});
  useEffect(() => {
    let uid = auth().currentUser.uid;
    database()
      .ref(`/user/${uid}`)
      .once('value')
      .then(snapshot => {
        setProfileData(snapshot.val());
      });
  }, []);
  return (
    <>
      <View style={{flex: 1, alignItems: 'center'}}>
        {profileData ? (
          <>
            <View
              style={{
                backgroundColor: '#2c2c54',
                padding: 10,
                borderBottomColor: '#706fd3',
                borderBottomWidth: 4,
                width: '100%',
              }}>
              <Text style={{color: '#fff', textAlign: 'center', fontSize: 20}}>
                {profileData.name}'s Profile
              </Text>
            </View>

            <Image
              style={{height: 150, width: 150, marginTop: 50}}
              source={{
                uri: 'https://o.remove.bg/downloads/034854ac-ebea-42b3-8f3c-afe92f6916ab/pngtree-user-vector-avatar-png-image_1541962-removebg-preview.png',
              }}
            />
            <Text
              style={{fontSize: 25, marginVertical: 10, fontWeight: 'bold'}}>
              {profileData.name}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                padding: 12,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Icon
                name="envelope"
                size={25}
                color="#2c2c54"
                style={{marginHorizontal: 10}}
              />

              <Text style={styles.Description}>{profileData.email}</Text>
            </View>
            <Divider />
            <View
              style={{
                flexDirection: 'row',
                padding: 12,
                justifyContent: 'space-between',
              }}>
              <Icon
                name="address-book"
                size={25}
                color="#2c2c54"
                style={{marginHorizontal: 10}}
              />
              <Text style={styles.Description}>{profileData.address}</Text>
            </View>
            <Divider />
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#2c2c54',
                padding: 12,
              }}>
              ---------PAYMENT DETAILS---------
            </Text>
            <Divider />
            <View style={{flexDirection: 'row', padding: 12}}>
              <Icon
                name="id-card-o"
                size={25}
                color="#2c2c54"
                style={{marginHorizontal: 10}}
              />

              <Text style={styles.Description}>{profileData.cardno}</Text>
            </View>
            <Divider />
            <View style={{flexDirection: 'row', padding: 12}}>
              <Icon
                name="exclamation"
                size={25}
                color="#2c2c54"
                style={{marginHorizontal: 10}}
              />
              <Text style={styles.Description}>{profileData.expireydate}</Text>
            </View>
          </>
        ) : (
          <Text>Loading</Text>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Heading: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  Description: {
    fontSize: 22,
  },
  btn: {
    width: '62%',
    borderRadius: 2,
    marginTop: 90,
    backgroundColor: '#2d98da',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Profile;