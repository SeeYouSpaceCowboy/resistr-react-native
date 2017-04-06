import React from 'react';
import { StyleSheet, Text, View, NativeModules, Navigator, StatusBar } from 'react-native';
import { COLOR, ThemeProvider, Toolbar, ActionButton, Drawer, Avatar, Card, ListItem } from 'react-native-material-ui';

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
          <Card>
              <ListItem
                  leftElement={<Avatar text="MW" />}
                  centerElement={{
                      primaryText: 'Donald Trump',
                      secondaryText: 'POTUS',
                  }}
              />
              <View style={styles.textContainer}>
                  <Text>
                      45th President of the United States and star of the Apprentice and author of The Art of the Deal and owner of several toupees and the best dude in the world. And also need to make this text very long
                  </Text>
              </View>
          </Card>
          <Card>
              <ListItem
                  leftElement={<Avatar text="MW" />}
                  centerElement={{
                      primaryText: 'Mike Pence',
                      secondaryText: 'Vice President',
                  }}
              />
              <View style={styles.textContainer}>
                  <Text>
                      Vice President of the United States and star of the Apprentice and author of The Art of the Deal and owner of several toupees and the best dude in the world. And also need to make this text very long
                  </Text>
              </View>
          </Card>          
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
