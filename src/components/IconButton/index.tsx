import { Container, IconButtonTypeStyleProps, Icon } from "./styles";

import { TouchableOpacityProps } from 'react-native'

interface IconButtonProps extends TouchableOpacityProps {
  type?: IconButtonTypeStyleProps
}

export function IconButton({ type, ...rest } :IconButtonProps) {
  return (
    <Container {...rest}>
      <Icon name="home" type="primary" />
    </Container>
  )
}