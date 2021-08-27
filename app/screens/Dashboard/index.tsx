import React from 'react';
import Profile from 'app/screens/Dashboard/Profile';
import Posts from 'app/screens/Dashboard/Posts';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Svg, { Path } from 'react-native-svg';

type Props = {
  color: string;
};

function SvgPosts(props: Props) {
  return (
    <Svg width="20" height="20" viewBox="0 0 512 512" fill="none">
      <Path
        d="M400 0H112C50.144 0 0 50.144 0 112V400C0 461.856 50.144 512 112 512H400C461.856 512 512 461.856 512 400V112C512 50.144 461.856 0 400 0ZM480 400C480 444.183 444.183 480 400 480H112C67.817 480 32 444.183 32 400V112C32 67.817 67.817 32 112 32H400C444.183 32 480 67.817 480 112V400ZM160 112H128C119.163 112 112 119.163 112 128V160C112 168.837 119.163 176 128 176H160C168.837 176 176 168.837 176 160V128C176 119.163 168.837 112 160 112ZM128 224H160C168.837 224 176 231.163 176 240V272C176 280.837 168.837 288 160 288H128C119.163 288 112 280.837 112 272V240C112 231.163 119.163 224 128 224ZM160 336H128C119.163 336 112 343.163 112 352V384C112 392.837 119.163 400 128 400H160C168.837 400 176 392.837 176 384V352C176 343.163 168.837 336 160 336ZM208 128H400V160H208V128ZM400 240H208V272H400V240ZM208 352H400V384H208V352Z"
        fill={props.color}
      />
    </Svg>
  );
}
function SvgProfile(props: Props) {
  return (
    <Svg width="17" height="17" viewBox="0 0 512 512" fill="none">
      <Path
        d="M437.02 330.98C409.137 303.098 375.949 282.457 339.739 269.962C378.521 243.251 404 198.548 404 148C404 66.393 337.607 0 256 0C174.393 0 108 66.393 108 148C108 198.548 133.479 243.251 172.262 269.962C136.052 282.457 102.864 303.098 74.981 330.98C26.629 379.333 0 443.62 0 512H40C40 392.897 136.897 296 256 296C375.103 296 472 392.897 472 512H512C512 443.62 485.371 379.333 437.02 330.98ZM256 256C196.449 256 148 207.552 148 148C148 88.448 196.449 40 256 40C315.551 40 364 88.448 364 148C364 207.552 315.551 256 256 256Z"
        fill={props.color}
      />
    </Svg>
  );
}

const Dashboard = () => {
  const Tab = createBottomTabNavigator<any>();
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: '#737373',
        labelStyle: {
          marginTop: 3,
          fontSize: 13,
          fontFamily: 'Raleway-Bold',
        },
        style: {
          borderWidth: 0,
          height: 52,
          backgroundColor: '#20212E',
          paddingBottom: 3,
          paddingTop: 8,
        },
      }}>
      <Tab.Screen
        name="Posts"
        component={Posts}
        options={{
          title: 'Posts',
          tabBarIcon: ({ color }) => {
            return <SvgPosts color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => {
            return <SvgProfile color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Dashboard;
