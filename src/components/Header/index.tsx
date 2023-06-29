import { useNavigation } from '@react-navigation/native'

import logo from '@assets/logo.png'

import { BackButton, BackIcon, Container, Logo } from "./styles";

interface HeaderProps {
  showBackButton?: boolean
}

export function Header({ showBackButton = false } : HeaderProps) {
  const { navigate } = useNavigation()
  
  function handleGoBack() {
    navigate('groups')
  }

  return (
    <Container>
      {showBackButton ? (
        <BackButton onPress={handleGoBack}>
          <BackIcon color="#FFF" />
        </BackButton>
      ) : null}
      <Logo source={logo} />
    </Container>
  )
}