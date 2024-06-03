import { useCallback, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import { Header } from "../../components/Header/Header";
import { Title } from "../../components/Title/Title";

const genderBooks = [
  "VueJs advanced",
  "Nodejs for Noobs",
  "Angular advanced",
  "React advanced",
  "Nextjs advanced",
  "Golang advanced",
]
export function Home() {
  const [selectedGender, setSelectedGender] = useState<string[]>([])
  console.log(selectedGender);
  

  const handleSelect = useCallback((title: string) => {
    console.log('meu titulo escolhido',title)
    if(selectedGender.includes(title)) {
      const removeGender = selectedGender.filter((item) => item !== title)
      setSelectedGender(removeGender)
    } else {
      setSelectedGender([...selectedGender, title])
    }
  },[selectedGender])

  return (
    <>
      <Header />
      <Container>
        <Title title='O que você quer ler Hoje?'/>
        <div className="gap-8 grid grid-cols-8">
          {genderBooks.map((book) => (
            <Button 
            title={book} 
            variant={selectedGender.includes(book) ? "light" : "dark"}
            onclick={() => handleSelect(book)} />
          ))}
        </div>
        <div className="pt-7">
          <p className="text-evergreen font-semibold text-2xl ">
            Sobre o que você gostaria de receber uma recomendação de livro?
          </p>
          <input 
            type="text" 
            placeholder="O que gostaria de ler..." 
            className="outline-none shadow-lg border border-gray-100 rounded-lg w-full p-3 mt-3" />
        </div>
      </Container>
    </>
  )
}