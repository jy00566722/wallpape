import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {
  Provider,
  Button,
  Dialog,
  DialogHeader,
  DialogContent,
  DialogActions,
  Text,
} from '@react-native-material/core';

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <SafeAreaView>
        <Button
          title="Open Alert Dialog"
          // eslint-disable-next-line react-native/no-inline-styles
          style={{margin: 16}}
          onPress={() => setVisible(true)}
        />
        <Dialog visible={visible} onDismiss={() => setVisible(false)}>
          <DialogHeader title="Dialog Header" />
          <DialogContent>
            <Text>这里是一段测试文本哟,哈哈哈哈哈,这是真的吗</Text>
          </DialogContent>
          <DialogActions>
            <Button
              title="Cancel"
              compact
              variant="text"
              onPress={() => setVisible(false)}
            />
            <Button
              title="Ok"
              compact
              variant="text"
              onPress={() => setVisible(false)}
            />
          </DialogActions>
        </Dialog>
      </SafeAreaView>
    </>
  );
};

const AppProvider = () => (
  <Provider>
    <App />
  </Provider>
);

export default AppProvider;
