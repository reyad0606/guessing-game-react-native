import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}> {props.title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 35,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerTitle: {
    color: 'black',
    fontSize: 17,
  },
});

export default Header;
