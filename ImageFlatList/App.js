import React, { useState } from 'react';
import { View, FlatList, Image, StyleSheet, Text, Button, TextInput, Pressable} from 'react-native';

const App = () => {
  const [imageData, setImageData] = useState([
    { id: '1', title: 'Hillside', url: 'https://picsum.photos/id/1018/400/300' },
    { id: '2', title: 'Bear', url: 'https://picsum.photos/id/1020/400/300' },
    { id: '3', title: 'Mist', url: 'https://picsum.photos/id/1021/400/300' },
    { id: '4', title: 'Bird', url: 'https://picsum.photos/id/1024/400/300' },
    { id: '5', title: 'Vacation', url: 'https://picsum.photos/id/1025/400/300' },
  ]);

  const [titleInput, setTitleInput] = useState('');

  const addImage = () => {
    if (titleInput.trim() === '') return;

    const newImage = {
      id: Date.now().toString(),
      title: titleInput,
      url: `https://picsum.photos/400/300?random=${Math.floor(Math.random() * 1000)}`,
    };

    setImageData([...imageData, newImage]);
    setTitleInput('');
  };

  const removeImage = (id) => {
    const filtered = imageData.filter((item) => item.id !== id);
    setImageData(filtered);
  };

  const renderItem = ({ item }) => (
    <Pressable onPress={() => removeImage(item.id)}>
      <View style={styles.card}>
        <Image source={{ uri: item.url }} style={styles.image} />
        <Text style={styles.caption}>{item.title}</Text>
        <Text style={styles.removeNote}>Tap to remove</Text>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Image Feed</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter image title"
          value={titleInput}
          onChangeText={setTitleInput}
        />
        <Button title="Add Image" onPress={addImage} />
      </View>

      <FlatList
        data={imageData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 10,
    flex: 1,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
    gap: 10,
  },
  input: {
    flex: 1,
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
  },
  card: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
  },
  image: {
    width: '100%',
    height: 200,
  },
  caption: {
    padding: 10,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Arial',
  },
  removeNote: {
    textAlign: 'center',
    fontSize: 12,
    color: 'gray',
    paddingBottom: 10,
  },
});

export default App;
