/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, View, Text, Alert, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

//Default react native imports
// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

function SignUpButton(props: {
  css: Object,
  text: string,
  platform: string,
  type: string,
  accessibilityLabel: string,
  onPress: () => void,
}) {
  function showIcon(platform, type) {
    if (platform) {
      return <Icon name={platform} type={type} color="#FFF" />;
    }
  }

  return (
    <>
      <Icon.Button
        name={props.platform}
        style={[styles.buttonStyles, props.css]}
        onPress={props.onPress}
        backgroundColor=" rgba(0, 122, 255, 0)">
        {/*Background color set to invisible cause if not default is blue*/}
        <Text
          style={styles.buttonText}
          accessibilityLabel={props.accessibilityLabel}>
          {props.text}
        </Text>
      </Icon.Button>
    </>
  );
}

const App: () => React$Node = () => {
  // console.log('React native debugging');
  function getLog() {
    console.log('Text pressed');
    Alert.alert('text pressed!', 'you should have pressed the text');
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.LoginText} onPress={() => getLog()}>
        {' '}
        Login{' '}
      </Text>
      <SignUpButton
        text="Sign up with Facebook"
        platform="facebook-square"
        type="font-awesome-5"
        accessibilityLabel="Sign up with Facebook button"
        css={styles.buttonFacebook}
        onPress={() => {
          console.log('FB Button pressed');
        }}
      />
      <SignUpButton
        text="Sign up with LinkedIn"
        platform="linkedin"
        type="font-awesome-5"
        accessibilityLabel="Sign up with LinkedIn button"
        css={styles.buttonLinkedIn}
        onPress={() => {
          console.log('LinkedIn Button pressed');
        }}
      />

      <View style={[styles.buttonStyles, styles.row]}>
        <View style={styles.dividerLine} />
        <View>
          <Text style={styles.dividerText}>or</Text>
        </View>
        <View style={styles.dividerLine} />
      </View>

      <SignUpButton
        text="Sign up with Email"
        platform="envelope"
        type="font-awesome-5"
        accessibilityLabel="Sign up with Email button"
        css={styles.buttonEmail}
        onPress={() => {
          console.log('Email Button pressed');
        }}
      />
    </SafeAreaView>
  );
};

export default App;
