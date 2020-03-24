import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import { Divider } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function InfoScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.headerText}>How do I use this app?</Text>
      <Text style={styles.paraText}>During times of social distancing, use it to track your daily "human connections" and "digital connections." </Text>

      <Divider style={styles.divider}/>

      <Text style={styles.headerText}>Human Connections?</Text>
      <Text style={styles.paraText}>Add to the count when you happen to cross a 6ft bubble with another human while out and about. (not including folks you live with). </Text>
      <Text style={styles.paraText}>KEEP THIS COUNT LOW!</Text>
      <Text style={styles.paraText}>Count unique humans. While out, try to keep a mental note and update the app as often as possible. </Text>

      <Divider style={styles.divider}/>

      <Text style={styles.headerText}>Digital Connections?</Text>
      <Text style={styles.paraText}>A partial cure for all of this isolation. Call a loved one. Text a friend to catch up. Video chat with a colleague!</Text>
      <Text style={styles.paraText}>For this count, high numbers are encouraged!</Text>

      <Divider style={styles.divider}/>

      <Text style={styles.headerText}>So... is it automatic?</Text>
      <Text style={styles.paraText}>Nope. We wanted to deliver this to folks as soon as possible with the least amount of app permissions. So just use it to manually keep track of your counts each day.</Text>

      <Divider style={styles.divider}/>

      <Text style={styles.headerText}>But, why?</Text>
      <Text style={styles.paraText}>Social distancing is a critical tool to flatten the curve. Many experts recommend staying 6ft away from other humans in order to slow the spread.</Text>
      <Text style={styles.paraText}>This app can help you track your own progress. And, if you share your progress, perhaps it can inspire your friends and family.</Text>

      <Divider style={styles.divider}/>

      <Text style={styles.headerText}>Who built this?</Text>
      <Text style={styles.paraText}>And... What are their motives? Are they tracking me?</Text>
      <Text style={styles.paraText}>PHX Devs, as part of their Humanity Driven Development initiative.</Text>
      <Text style={styles.paraText}>It's completely free and there is no server. All of your data stays on your device.</Text>
      <Text style={styles.paraText}>More about PHX Devs and Humanity Driven Development here...</Text>
      <TouchableOpacity onPress={() => Linking.openURL('https://phxdevs.com')}>
      <Text style={[{color: 'blue'},styles.paraText]}>
        https://phxdevs.com
      </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/pulse/humanity-driven-development-john-zechlin')}>
      <Text style={[{color: 'blue'},styles.paraText]}>
        Humanity Driven Development
      </Text>
      </TouchableOpacity>

      <Divider style={styles.divider}/>

      <Text style={styles.headerText}>What about the name?</Text>
      <Text style={styles.paraText}>Patient 31. South Korea. A stark reminder about the impact one person can make when their Human Connection number is high.</Text>

    </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  headerText: {
    fontSize: 29,
    paddingHorizontal: 15,
    textDecorationLine: 'underline',
  },
  paraText: {
    fontSize: 18,
    paddingHorizontal: 15,
  },
  divider: {
    marginTop: 7,
    marginBottom: 5,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
