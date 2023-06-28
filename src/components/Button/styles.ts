import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { ButtonTypeStyleProps } from '.'

type Props = {
  type: ButtonTypeStyleProps
}

export const ButtonContainer = styled(TouchableOpacity)<Props>`
  flex: 1;

  max-height: 56px;

  background-color: ${({theme}) => theme.COLORS.GREEN_700};

  border-radius: 6px;
  
  justify-content: center;
  align-items: center;
`

export const ButtonLabel = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  color: ${({theme}) => theme.COLORS.WHITE};
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`