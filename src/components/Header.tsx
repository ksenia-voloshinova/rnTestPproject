import {Button, Image, StyleSheet, Text, View} from 'react-native';
import * as React from 'react';
import {UserDataTypes} from '../types';
import LogoutService from '../services/logoutService';

export const Header: React.FC<UserDataTypes> = ({userData, isFlexUpdated}) => {
  const handleLogout = async () => {
    await LogoutService();
  };

  const containerStyle = isFlexUpdated
    ? {...styles.container, flex: 0.9}
    : styles.container;

  return (
    <View style={containerStyle}>
      <View style={styles.userContainer}>
        <Image style={styles.avatar} source={{uri: userData.avatar}} />
        <Text style={styles.username}>{userData.username}</Text>
      </View>
      <Button title="Выйти" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '97%',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
  },
});
export default Header;
