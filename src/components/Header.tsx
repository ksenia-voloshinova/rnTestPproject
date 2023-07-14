import { Button, Image, StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { AuthScreenNavigationType, UserDataTypes } from "../types";
import {useNavigation} from "@react-navigation/native";
import LogoutService from "../services/logoutService";

export const Header: React.FC <UserDataTypes> = ({ userData }) => {
  const navigation = useNavigation<AuthScreenNavigationType>();
  const handleLogout = async () => {
    await LogoutService();
    navigation.navigate('AuthScreen', {});
  };

  return (
  <View style={styles.container}>
    <View style={styles.userContainer}>
      <Image
        style={styles.avatar}
        source={{ uri : userData.avatar  }}
      />
      <Text style={styles.username}>{userData.username}</Text>
    </View>
    <Button title="Выйти" onPress={handleLogout} />
  </View>
);}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '97%'
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
