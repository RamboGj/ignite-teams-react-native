import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export type IconButtonTypeStyleProps = 'primary' | 'second'

type IconButtonProps = {
  type: IconButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;

  justify-content: center;
  align-items: center;

  margin-left: 12px;
`

export const Icon = styled(MaterialIcons).attrs<IconButtonProps>(({ theme, type }) => ({
  size: 24,
  color: type === 'primary' ? theme.COLORS.GREEN_700 : theme.COLORS.RED
}))``