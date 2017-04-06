import React from 'react';
import { StyleSheet, Text, View, NativeModules, Navigator, StatusBar } from 'react-native';
import { COLOR, ThemeProvider, Toolbar, ActionButton } from 'react-native-material-ui';

const UIManager = NativeModules.UIManager;

const uiTheme = {
    palette: {
        primaryColor: COLOR.green500,
    },
    toolbar: {
        container: {
            height: 50,
        },
    },
};

export default class App extends React.Component {
	componentWillMount() {
			if (UIManager.setLayoutAnimationEnabledExperimental) {
					UIManager.setLayoutAnimationEnabledExperimental(true);
			}
	}

  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <ActionButton
            actions={[
                { icon: 'call', label: 'phone call' },
                { icon: 'voicemail', label: 'voice message' },
                { icon: 'keyboard', label: 'email' },
                { icon: 'mail-outline', label: 'letter' },
                { icon: 'people', label: 'demonstration' },
                { icon: 'account-balance', label: 'town hall' },
                { icon: 'business', label: 'office visit' },
                { icon: 'scanner', label: 'fax' },
            ]}
            transition="speedDial"
            onPress={(action) => console.log('pressed',action)}
        />
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
