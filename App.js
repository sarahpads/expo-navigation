import { Text, SafeAreaView, Image } from 'react-native';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native-unistyles';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const [result, setResult] = useState()
  useEffect(() => {
    Image.prefetch('https://images.unsplash.com/photo-1736580602800-0d455b2d4b49?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
    // Image.getSize('https://images.unsplash.com/photo-1736580602800-0d455b2d4b49?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
    //   .then(() => setResult(result))
    //   .catch(console.log)
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Width: {result?.width}
      </Text>
      <Text style={styles.paragraph}>
        Height: {result?.height}
      </Text>
      <Card>
        <AssetExample />
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
