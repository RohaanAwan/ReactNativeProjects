import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function CustomButton({ title, onPress }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

function FeedHome({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Feed Page</Text>
      <CustomButton title="Go to New Post" onPress={() => navigation.navigate('NewPost')} />
    </View>
  );
}

function NewPost({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>New Post Page</Text>
      <CustomButton title="Go to New Message" onPress={() => navigation.navigate('NewMessage')} />
    </View>
  );
}

function NewMessage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>New Message Page</Text>
      <CustomButton title="Go to Profile Settings" onPress={() => navigation.navigate('ProfileSettings')} />
    </View>
  );
}

function ProfileSettingScreen() {
  return (
    <View style={styles.container}>
      <Text>Profile Settings Page</Text>
    </View>
  );
}

function MessagesScreen() {
  return (
    <View style={styles.container}>
      <Text>Message Page</Text>
    </View>
  );
}

function NotificationScreen() {
  return (
    <View style={styles.container}>
      <Text>Notifications Page</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>Profile Information Page</Text>
    </View>
  );
}

const FeedStack = createNativeStackNavigator();
function FeedStackScreen() {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen name="FeedHome" component={FeedHome} options={{ title: 'Feed' }} />
      <FeedStack.Screen name="NewPost" component={NewPost} />
      <FeedStack.Screen name="NewMessage" component={NewMessage} />
      <FeedStack.Screen name="ProfileSettings" component={ProfileSettingScreen} />
    </FeedStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function MyApp() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Feed Screen" component={FeedStackScreen} />
        <Tab.Screen name="Messages Screen" component={MessagesScreen} />
        <Tab.Screen name="Notification Screen" component={NotificationScreen} />
        <Tab.Screen name="Profile Screen" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
    paddingVertical: 14,
    paddingHorizontal: 28,
    backgroundColor: '#000000',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
