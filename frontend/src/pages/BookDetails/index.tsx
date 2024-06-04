import { useParams } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import { Container } from "../../components/Container/Container";
import { HeaderTitle } from "../../components/Header/HeaderTitle";
import { Title } from "../../components/Title/Title";

export default function BookDetails() {
  const {id} = useParams()
  console.log(id);
  
  return (
    <Container>
      <HeaderTitle/>
      <div className="gap-4 grid md:grid-cols-2 mt-16 grid-cols-1">
        <div>
          <h2 className="text-5xl font-bold text-evergreen">Codigo Limpo</h2>
          <p className="text-gray-500 text-xl font-light">Autor</p>
          <p className="text-gray-500 mt-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto sunt earum unde animi rem vero saepe repellendus molestiae, aspernatur doloribus quibusdam! Nobis praesentium vero animi labore minus et iusto velit.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto sunt earum unde animi rem vero saepe repellendus molestiae, aspernatur doloribus quibusdam! Nobis praesentium vero animi labore minus et iusto velit.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto sunt earum unde animi rem vero saepe repellendus molestiae, aspernatur doloribus quibusdam! Nobis praesentium vero animi labore minus et iusto velit.
          </p>
        </div>
        <div>
          <img
           src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg"
           alt="" 
           className=" h-full rounded-md"
          />
        </div>
        <Button variant='light' title='Ver mais'/>
      </div>
      <div>
        <Title title='Recomendações com base nesse Livro' className="my-6"/>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          <Card id="123" />
          <Card id='123' />
          <Card id='123'/>
          <Card id='123'/>
        </div>
      </div>
    </Container>
  )
}