import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';
import Svg, { Path } from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg width={27} height={23} viewBox="0 0 27 23" fill="none">
      <Path
        d="M26.854 9.781H5.583l7.719-7.719L11.239 0 0 11.24l11.24 11.239 2.062-2.062-7.72-7.72h21.272V9.782z"
        fill="#fff"
      />
    </Svg>
  );
}

const Header: React.FC<{
  navigation: { navigate: (param: string) => void; goBack: () => void };
}> = ({ navigation }) => {
  const goBackFunc = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => goBackFunc()}>
          <View style={styles.button}>
            <SvgComponent />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
