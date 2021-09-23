import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Headline from '../screens/headline';
import Popular from '../screens/popular';
import sports from '../screens/sports';
import Allnews from './Allnews';
import Profile from './profile';
// import Search from './search';

const Tab = createMaterialTopTabNavigator();
function All() {
    return (
        <Tab.Navigator
        tabBarOptions={{
          
            activeTintColor: '#fff',
            style: {
              backgroundColor: '#2c2c54',
            },
            'scrollEnabled': true,
            indicatorStyle: {
              backgroundColor: '#0fb9b1',
            },
          }}
        >
            <Tab.Screen name="All" component={Allnews} />
            <Tab.Screen name="Headline" component={Headline} />
            <Tab.Screen name="popular" component={Popular} />
            <Tab.Screen name="sports" component={sports} />
            {/* <Tab.Screen name="search" component={Search} /> */}
            <Tab.Screen name="profile" component={Profile} />
        </Tab.Navigator>

    );
}

export default All