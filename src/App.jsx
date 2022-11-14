import React from 'react'
import styled from 'styled-components';

function App() {

  const Container = styled.div`
    margin: 30px;
    background-color: #021233;
    border-radius: 10px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px
  `;

  const Title = styled.div`
  color: #021233;
  background-color: white;
  margin: 30px;
  border-radius: 10px;
  padding: 10px;
  `;

  const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  `;

  const H1 = styled.div`
  width: 100%;
  margin: 20px
  `;

  const P = styled.div`
  width: 100%;
  `;
  return (
    <Container>
        <img src="./src/assets/poissonjaune.jpg" alt="poisson" title="poisson_rouge" />
        <Title>Catégories : Poisson d'eau chaude</Title>
        <Card>
          <H1>Le poisson couleur soleil, alias Némo version rétro 🌊</H1>
          <P>Le poisson-clown ocellé vit près des récifs coralliens, en association avec une anémone urticante.

Il vit entre 1 et 15 mètres de profondeur dans les lagons, en milieu récifal et également dans les zones côtières turbides.

Il est reconnaissable par ses 3 bandes blanches.

Il se nourrit de zooplancton et d’algues filamenteuses.

Le poisson-clown ocellé mesure environ 11 cm.</P>
        </Card>
    </Container>
  )
}

export default App;
