import { View, StyleSheet } from 'react-native'
import StyledText from './StyledText'

const parseThousands = value => {
  return value >= 1000
    ? `${Math.round(value / 100) / 10}k`
    : String(value)
}

const RepositoryStatus = ({ forksCount, stargazersCount, ratingAverage, reviewCount }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 5, }}>
      <View>
        <StyledText align='center' >{parseThousands(forksCount)}</StyledText>
        <StyledText align='center' fontWeight='bold' >fork</StyledText>
      </View>

      <View>
        <StyledText align='center' >{parseThousands(stargazersCount)}</StyledText>
        <StyledText align='center' fontWeight='bold' >start</StyledText>
      </View>

      <View>
        <StyledText align='center' >{parseThousands(ratingAverage)}</StyledText>
        <StyledText align='center' fontWeight='bold' >rating</StyledText>
      </View>

      <View>
        <StyledText align='center' >{parseThousands(reviewCount)}</StyledText>
        <StyledText align='center' fontWeight='bold' >review</StyledText>
      </View>
    </View>
  )
}

export default RepositoryStatus