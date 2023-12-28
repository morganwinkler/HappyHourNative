import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import Header from './Header';

const App = () => {
  const bars = [
    {
      id: 1,
      name: 'The Rooftop',
      image_url:
        'https://images.unsplash.com/photo-1556911899-5df3026220fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cm9vZnRvcCUyMGJhcnxlbnwwfHwwfHx8MA%3D%3D',
      specials: '$9 Aperol Spritz',
    },
    {
      id: 2,
      name: 'The One with the Plants',
      image_url:
        'https://images.unsplash.com/photo-1622758235004-51977c5863f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cm9vZnRvcCUyMGJhcnxlbnwwfHwwfHx8MA%3D%3D',
      specials: '$7 Mojitos',
    },
    {
      id: 3,
      name: 'The Dive',
      image_url:
        'https://images.unsplash.com/photo-1456743625079-86a97ff8bc86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGl2ZSUyMGJhcnxlbnwwfHwwfHx8MA%3D%3D',
      specials: '$3 Jager',
    },
    {
      id: 4,
      name: 'The Speakeasy',
      image_url:
        'https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFyfGVufDB8fDB8fHww',
      specials: '$10 Negronis',
    },
    {
      id: 5,
      name: 'The Neighbood Bar',
      image_url:
        'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRpdmUlMjBiYXJ8ZW58MHx8MHx8fDA%3D',
      specials: '$5 Bud Light',
    },
  ];

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Image source={{uri: item.image_url}} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.cardSpecials}>{item.specials}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={bars}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    margin: 10,
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardSpecials: {
    fontSize: 16,
  },
});

export default App;
