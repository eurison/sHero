import { Button } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import { Header } from "../../components/Header/Header";
import { Title } from "../../components/Title/Title";

const genderBooks = [
  "Romance",
  "Ficção Científica",
  "Auto-Ajuda",
  "Biografias",
  "Ficção Científica",
  "Auto-Ajuda",
]
export function Home() {
  return (
    <>
      <Header />
      <Container>
        <Title title='O que você quer ler Hoje?'/>
        {genderBooks.map((book) => (
          <Button title={book} variant="light" />
        ))}
      </Container>
    </>
  )
}