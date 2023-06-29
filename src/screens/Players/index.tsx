import { Header } from "@components/Header";
import { Container } from "./styles";
import { HighlightText } from "@components/HighlightText";
import { IconButton } from "@components/IconButton";

export function Players() {
  return (
    <Container>
      <Header showBackButton />

      <HighlightText title="Group name" subtitle="Add your friends and create teams" />

      <IconButton />

    </Container>
  )
}