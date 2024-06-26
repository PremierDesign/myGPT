import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatScreen from "../screens/ChatScreen";
import ImageScreen from "../screens/ImageScreen";
import SettingScreen from "../screens/SettingScreen";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { Settings } from "react-native";
import { OPENAI_API } from "@env";

const Tab = createBottomTabNavigator();
const apiKey = OPENAI_API;

export default function MainNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        r
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="chat" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Image"
        component={ImageScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Entypo name="image" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons name="settings-outline" size={size} color={color} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
