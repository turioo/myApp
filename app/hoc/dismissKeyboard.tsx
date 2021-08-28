import React from 'react';
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native';

const DismissKeyboardHOC = (Comp: React.ComponentType) => {
  return ({ children, ...props }: { children: React.ReactNode }) => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Comp {...props}>{children}</Comp>
    </TouchableWithoutFeedback>
  );
};

const DismissKeyboardView = DismissKeyboardHOC(View);

export default DismissKeyboardView;
