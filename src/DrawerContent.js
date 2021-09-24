import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
  ToggleButton,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/AntDesign';
//import {Icon2} from 'react-native-elements';
import {StarOutlined, StarFilled, StarTwoTone} from '@ant-design/icons';

export function DrawerContent(props) {
  const paperTheme = useTheme();
  const [isDarkTheme, setDarkTheme] = React.useState(false);
  //const {signOut, toggleTheme} = React.useContext(AuthContext);

  const toggleTheme = () => {
    setDarkTheme(isDarkTheme);
  };
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.DrawerContent}>
          <View style={styles.useInfor}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri: 'https://st2.depositphotos.com/1104517/11965/v/600/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg',
                }}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>My propfile Name</Title>
                <Caption style={styles.caption}>@caption</Caption>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  80
                </Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  80
                </Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.bottomDrawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="user" color={color} size={size} />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate('Profile');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="laptop" color={color} size={size} />
              )}
              label="Bookmark"
              onPress={() => {
                props.navigation.navigate('Bookmark');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="setting" color={color} size={size} />
              )}
              label="Settings"
              onPress={() => {
                props.navigation.navigate('SettingsScreen');
              }}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}>
              <View style={styles.preference}>
                <Text>Dark Them</Text>
                <View pointerEvents="none">
                  <Switch value={paperTheme.dark} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="logout" color={color} size={size} />
          )}
          label="Sing Out"
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  DrawerContent: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  useInfor: {
    paddingLeft: 20,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
