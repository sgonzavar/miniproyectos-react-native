import { View, StyleSheet } from "react-native"
import RepositoryStatus from "./RepositoryStatus"
import RepositoryItemHeader from "./RepositoryItemHeader"
import theme from "../theme"

const RepositoryItem = (props) => {
  return (
    <View
      key={props.id} style={styles.container}>
      <RepositoryItemHeader {...props} />
      <RepositoryStatus {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 9,
    paddingBottom: 5,
    paddingTop: 5
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 6,
    overflow: 'hidden',
  }
})

export default RepositoryItem