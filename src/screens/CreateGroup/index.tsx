import { useNavigation } from '@react-navigation/native'

import { Header } from "@components/Header";
import { HighlightText } from "@components/HighlightText";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

import { Container, Content, Icon } from "./styles";

export function CreateGroup() {
  const { navigate } = useNavigation()

  function handleGoToPlayersScreen() {
    navigate('players', { group: 'new group' })
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <HighlightText title="New group" subtitle="Creat your group in order to add people" />

        <Input placeholder="Group name" />
        <Button onPress={handleGoToPlayersScreen} label="Create" style={{ marginTop: 20 }} />
      </Content>
    </Container>
  )
}