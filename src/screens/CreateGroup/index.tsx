import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { Text } from 'react-native'
import { HighlightText } from "@components/HighlightText";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

export function CreateGroup() {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <HighlightText title="New group" subtitle="Creat your group in order to add people" />

        <Input placeholder="Group name" />
        <Button label="Create" style={{ marginTop: 20 }} />
      </Content>
    </Container>
  )
}