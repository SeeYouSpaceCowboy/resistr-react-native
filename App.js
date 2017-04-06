import React from 'react';
import { StyleSheet, Text, View, NativeModules, Navigator, StatusBar } from 'react-native';
import { COLOR, ThemeProvider, Toolbar } from 'react-native-material-ui';

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
        <View style={styles.container}>
					<Toolbar
						leftElement="menu"
						centerElement="Searchable"
						searchable={{
							autoFocus: true,
							placeholder: 'Search',
						}}
          />
          <Text>Open up App.js to start working on your app!</Text>
          <StatusBar backgroundColor="rgba(0, 0, 0, 0.8)" translucent />
        </View>
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
