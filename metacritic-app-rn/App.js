import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { getLatestGames } from "./lib/metacritic";

export default function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {games.map((game) => (
        <View key={game.slug} style={styles.card}>
          <Image source={{ uri: game.image }} style={styles.image} />
          <Text style={styles.title}>{game.title}</Text>
          <Text style={styles.description}>{game.description}</Text>
          <Text style={styles.releaseDate}>{game.releaseDate}</Text>
          <Text style={styles.score}>{game.score}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#333",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10,
    fontWeight: "bold",
  },
  description: {
    color: "#eee",
    fontSize: 14,
  },
  releaseDate: {
    color: "#fff",
    fontSize: 14,
  },
  score: {
    color: "green",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
});
