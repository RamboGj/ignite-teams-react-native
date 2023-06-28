import { Container, Subtitle, Title } from "./styles";

interface HighlightTextProps {
  title: string
  subtitle: string
}

export function HighlightText({ subtitle, title }: HighlightTextProps) {
  return (
    <Container>
      <Title>
        {title}
      </Title>
      <Subtitle>
        {subtitle}
      </Subtitle>
    </Container>
  )
}