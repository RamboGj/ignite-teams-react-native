import { UsersThree } from 'phosphor-react-native'
import { TouchableOpacity } from "react-native";
import styled, { css } from 'styled-components/native'

export const Card = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;
  background-color: ${({theme}) => theme.COLORS.GRAY_500};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;
  
  padding: 24px;
  margin-bottom: 12px;
`

export const GroupName = styled.Text`
  margin-left: 18px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`

export const GroupIcon = styled(UsersThree).attrs(({theme}) => ({
  size: 32,
  color: theme.COLORS.GREEN_500,
  weight: 'fill'
}))``
