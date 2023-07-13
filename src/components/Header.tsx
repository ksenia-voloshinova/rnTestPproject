import {  Button, Image, Text, View } from "react-native";
import * as React from "react";
import { AuthScreenNavigationType, RootStackParamList, StorageData } from "../types";
import {useNavigation} from "@react-navigation/native";
import LogoutService from "../services/logoutService";
import RootNavigator from "../navigation/RootNavigator";

export const Header: React.FC = ({ userData }) => {
  const navigation = useNavigation<AuthScreenNavigationType>();
  const handleLogout = async () => {
    await LogoutService();
    navigation.navigate('AuthScreen', {});
  };

  return (
  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' } }>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image
        style={{ width: 50, height: 50, borderRadius:25, marginRight: 10 }}
        source={{ uri: userData.avatar }}
      />
      <Text>{userData.username}</Text>
    </View>


    <Button
      title="Выйти"
      onPress={handleLogout}
    />
  </View>
);}


export default Header;
