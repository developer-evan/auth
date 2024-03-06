import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = (props) => {
  return (
    <View>
      <Text style={{fontWeight:'bold', fontSize:28, color:'#ffffff'}}>
        {props.name}
        </Text>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({})