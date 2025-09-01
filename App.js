import { ScrollView, Text } from 'react-native';

export default function App() {
  return (
    <ScrollView style={{ padding: 16 }}>
      {Array.from({ length: 9 }, (_, i) => i + 1).map((n) => (
        <Text key={n} style={{ marginBottom: 16, fontSize: 16 }}>
          {`Tabuada do ${n}\n` +
            Array.from({ length: 10 }, (_, j) => `${n} x ${j + 1} = ${n * (j + 1)}`).join('\n')}
        </Text>
      ))}
    </ScrollView>
  );
}

