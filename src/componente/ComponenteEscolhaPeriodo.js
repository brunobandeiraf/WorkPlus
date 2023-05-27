import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const CustomCheckbox = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <TouchableOpacity onPress={handleToggle}>
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

export default CustomCheckbox;