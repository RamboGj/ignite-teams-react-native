import { useTheme } from 'styled-components/native'
import { InputContainer } from './styles'
import { TextInputProps } from 'react-native'

export function Input({...rest}: TextInputProps) {
  const { COLORS } = useTheme()

  return (
  <InputContainer placeholderTextColor={COLORS.GRAY_300} {...rest} />
  )
}