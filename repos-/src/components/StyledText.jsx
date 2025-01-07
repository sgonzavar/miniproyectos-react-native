import { Text, StyleSheet, TextBase } from "react-native";
import theme from '../theme'

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fontWeights.main,
    fontWeight: theme.fontWeights.normal

  },
  colorPrimary: {
    color: theme.colors.primary
  },
  colorSecondary: {
    color: theme.colors.textSecondary
  },
  bold: {
    fontWeight: theme.fontWeights.bold
  },
  subheading: {
    fontSize: theme.fontSizes.subheading
  },
  align: {
    textAlign: theme.align.textAlign
  },
  flexDirectionStatus: {
    flexDirection: theme.flexDirectionStatus.flexDirection,
    marginTop: theme.flexDirectionStatus.marginTop,
    justifyContent: theme.flexDirectionStatus.justifyContent
  } 
})

export default function StyledText ({align, children, color, flexDirectionStatus, fontSize, fontWeight, style, ...restprops}) {
  const textStyles = [
    styles.text,
    flexDirectionStatus === 'row' && styles.flexDirectionStatus,
    align === 'center' && styles.align,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    fontWeight === 'bold' && styles.bold,
    fontSize === 'subheading' && styles.subheading,
    style
  ]

  return (
    <Text style={textStyles} {...restprops}>
      {children}
    </Text>
  )
}