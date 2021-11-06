import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const HeaderTabs = () => {
  const [activeTab, setactiveTab] = useState('Delivery');

  return (
    <View style={styles.headerButton}>
      <HeaderButton
        text="Delivery"
        btnColor="black"
        textColor="white"
        activeTab={activeTab}
        setactiveTab={setactiveTab}
      />
      <HeaderButton
        text="Pick Up"
        btnColor="white"
        textColor="black"
        activeTab={activeTab}
        setactiveTab={setactiveTab}
      />
    </View>
  );
};

const HeaderButton = props => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.activeTab == props.text ? 'black' : 'white',
        paddingHorizontal: 18,
        paddingVertical: 6,
        borderRadius: 30,
        marginTop: 5,
      }}
      onPress={() => props.setactiveTab(props.text)}>
      <View>
        <Text
          style={{
            color: props.activeTab == props.text ? 'white' : 'black',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          {props.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default HeaderTabs;

const styles = StyleSheet.create({
  headerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
