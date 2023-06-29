import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'
import { ButtonTypeStyleProps } from '.'

type Props = {
  type: ButtonTypeStyleProps
}

export const ButtonContainer = styled(TouchableOpacity)<Props>`
  flex: 1;

  max-height: 56px;

  background-color: ${({theme, type}) => type === 'primary' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};

  border-radius: 6px;
  
  justify-content: center;
  align-items: center;
`

export const ButtonLabel = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`