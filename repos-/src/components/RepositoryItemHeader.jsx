import { View, StyleSheet, Image } from "react-native"
import StyledText from "./StyledText"
import theme from "../theme"

const RepositoryItemHeader = ({id, ownerAvatarUrl, fullName, description, language}) => {
  return (
    <View style={styles.flexContainer}>
      <View style={styles.flexElementImage}>
        <Image style={styles.image} source={{ uri: ownerAvatarUrl}} />
      </View>
      <View style={styles.flexElementItems}>
        <StyledText fontWeight='bold' fontSize='subheading'> {id} </StyledText>
        <StyledText color='secondary'> {description}</StyledText>
        <StyledText style={styles.language} >{language}</StyledText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 6,
    overflow: 'hidden',
    marginVertical: 4,
  },
  image: {
    borderRadius: 8,
    height: 50,
    width: 50,
  },
  flexContainer: {
    flexDirection: 'row',
    paddingBottom: 2
  },
  flexElementImage: {
    flex: 0,
    paddingLeft: 10,
  },
  flexElementItems: {
    flex: 1,
    paddingLeft: 10,
  }
})

export default RepositoryItemHeader