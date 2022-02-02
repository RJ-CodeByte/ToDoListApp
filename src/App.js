/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Splash from './screens/Splash';
import ToDo from './screens/ToDo';
import Done from './screens/Done';
import Task from './screens/Task';
import Camera from './screens/Camera';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Provider} from 'react-redux';
import { Store } from "./Redux/Store";



const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name == 'To-Do') {
            iconName = 'clipboard-list';
            size = focused ? 25 : 20;
          } else if (route.name == 'Done') {
            iconName = 'clipboard-check';
            size = focused ? 25 : 20;
          }
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#0080ff',
        tabBarInactiveTintColor: '#777777',
        tabBarLabelStyle: {fontSize: 15, fontWeight: 'bold'},
      })}>
      <Tab.Screen name={'To-Do'} component={ToDo} options={{
            headerShown: false,
          }}
          />
      <Tab.Screen name={'Done'} component={Done}  options={{
            headerShown: false,
          }}
          />
    </Tab.Navigator>
  );
}

const RootStack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={Store}>
    <NavigationContainer>
      <RootStack.Navigator
      initialRouteName='Splash'
      screenOptions={{
        headerTitleAlign:'center',
        headerStyle:{
          backgroundColor:'#0080ff'
        },
        headerTintColor:'#ffffff',
        headerTitleStyle:{
          fontSize:25,
          fontWeight:'bold'
        }
      }}
      
      
      
      >
        <RootStack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="My Tasks"
          component={HomeTabs}
        />
        <RootStack.Screen
          name="Task"
          component={Task}
        />
        <RootStack.Screen
          name="Camera"
          component={Camera}
        />
      </RootStack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

// const styles = StyleSheet.create({

// });

export default App;
