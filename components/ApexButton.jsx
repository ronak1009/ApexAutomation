import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react';
import Colors from '../constants/Colors';

const ApexButton = ({title, onPress, disabled, width}) => {
    const noButtonAction = () => {};
  return (
    <TouchableOpacity style={
        disabled? styles.buttonDisabled : styles.button
        } 
        onPress={disabled ? noButtonAction  : onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.light.tint,
        padding: 10,
        width: 120,
        borderRadius: 5,
        alignItems: 'center', 
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    buttonDisabled: {
        backgroundColor: 'grey',
        opacity: 0.8,
        padding: 10,
        borderRadius: 5,
        width: 150,
        alignItems: 'center', 
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    text: {
        color: Colors.light.background,
        padding:5
    }
});

export default ApexButton;