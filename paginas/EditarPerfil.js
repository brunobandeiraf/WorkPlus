import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function EditarPerfil({navigation}) {
  const [imageUri, setImageUri] = useState('https://via.placeholder.com/150');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleChoosePhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      setImageUri(result.uri);
    }
  };

  const handleSaveChanges = () => {
    // TODO: handle saving changes to profile
    console.log('Changes saved!');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.photoContainer} onPress={handleChoosePhoto}>
        <Image source={{ uri: imageUri }} style={styles.photo} />
        <Text style={styles.changePhotoText}>Mudar Foto</Text>
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Endereço"
          value={address}
          onChangeText={setAddress}
        />
        <TextInput
          style={styles.input}
          placeholder="Data de Nascimento"
          value={birthday}
          onChangeText={setBirthday}
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
        <Text style={styles.saveButtonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#f2f2f2',
  },
 photoContainer: {
    alignItems: 'center',
    width: '80%',
    height: '25%',
    marginTop: '10%',
  },
  photo: {
    width: '56.6%',
    height: '75%',
    borderRadius: 100,
    marginBottom: '5%',
  },
  changePhotoText: {
    color: '#3498db',
    fontSize: '22%',
  },
  inputContainer: {
    width: '80%',
    marginTop: '5%',
  },
  input: {
    borderBottomWidth: 1.2,
    borderBottomColor: '#ccc',
    fontSize: 22,
    marginBottom: '15%',
  },
 saveButton: {
    backgroundColor: '#3498db',
    paddingHorizontal: '10%',
    paddingVertical: '3%',
    borderRadius: 30,
    marginTop: '5%',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 22,
  },
});