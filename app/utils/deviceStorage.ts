import AsyncStorage from '@react-native-community/async-storage';

const deviceStorage = {
  async getItem(key: string) {
    return await AsyncStorage.getItem(key);
  },
  async saveItem(key: string, value: any) {
    try {
      await AsyncStorage.setItem(key, value);
      return true;
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
      return error;
    }
  },
  async removeItem(key: string) {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (error) {
      return error;
    }
  },
};

export default deviceStorage;
