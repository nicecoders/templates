import React from 'react';
import { View, Text } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import Demo from '@/components/Demo';
import styles from './index.module.scss';
import { chooseImage } from '@/utils';

const Index: Taro.FC = () => {
  const upload = async () => {
    const res = await chooseImage();
    console.log(res);
  };

  return (
    <View className={styles.container}>
      <Text>Hello world!</Text>
      <Demo />
      <AtButton type="primary" onClick={upload}>
        AtButton
      </AtButton>
    </View>
  );
};

export default Index;
