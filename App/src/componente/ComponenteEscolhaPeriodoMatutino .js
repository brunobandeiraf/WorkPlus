import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const CheckboxMatutino = ({ label }) => {
  const [isMatutino, setIsMatutino] = useState(false);

  const escolhaMatutino = () => {
    setIsMatutino(!isMatutino);
  };

  return (
    <TouchableOpacity onPress={escolhaMatutino}>
       <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View
          style={{
            width: 20,
            height: 20,
            borderRadius: 10,
            borderWidth: 6,
            borderColor: isChecked ? '#082253' : 'white',
            marginRight: 2,
          }}
        />
        <Text style={{ fontWeight: 'bold' }}>{label}</Text>
        </View>
    </TouchableOpacity>
  );
};

export default CheckboxMatutino;