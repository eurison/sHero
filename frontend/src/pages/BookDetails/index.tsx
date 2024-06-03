import { Button } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import { HeaderTitle } from "../../components/Header/HeaderTitle";

export default function BookDetails() {
  return (
    <Container>
      <HeaderTitle/>
      <div className="grid grid-cols-2 mt-16">
        <div>
          <h2>Codigo Limpo</h2>
          <p>Autor</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto sunt earum unde animi rem vero saepe repellendus molestiae, aspernatur doloribus quibusdam! Nobis praesentium vero animi labore minus et iusto velit.</p>
        </div>
        <div>
          <img src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" alt="" />
        </div>
        <Button variant='light' title='Ver mais'/>
      </div>
    </Container>
  )
}