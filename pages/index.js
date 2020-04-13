import React, { useState } from 'react';
import { withApollo } from '../hocs/withApollo';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Link from 'next/link';
import styled from 'styled-components';

import { PointsConsumer } from '../context/Points';

import LoadingComponent from '@components/Loading';
import ErrorComponent from '@components/Error';
import HeaderComponent from '@components/Header';
import SelectComponent from '@components/Select';

const ALLCHARACTERS = gql`
  query AllCharacters($number: Int) {
    allCharacters(page: $number) {
      characters {
        id
        birth_year
        gender
      }
    }
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 20px;
  justify-items: center;
  align-items: center;

  @media only screen 
  and (min-device-width : 375px) 
  and (max-device-width : 812px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const numberRandom = Math.floor(Math.random() * (4 - 1 + 1) + 1);
const url = `/images/card_close_v${numberRandom}.png`;

const Card = styled.div`
  background-image: url(${url});
  width: 187px;
  height: 315px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 195px 0 0 0;
`

const Button = styled.button`
  background-color: #FCE62E;
  color: #000000;
  border: none;
  font-size: 14px;
  margin-top: 5px;
  width: 100%;
  font-weight: bold;
  outline: none;
`

const Clue = styled.span`
  font-size: 11px;
  text-transform: uppercase;
  display: block;
  font-weight: bold;
`


const Index = (props) => {
  const [choice, setChoice] = useState('');
  const { data, loading, error } = useQuery(ALLCHARACTERS, {
    variables: { number: 1 },
  });

  if (loading) return <LoadingComponent icon="Puff" height="100" width="100" />;
  if (error) return <ErrorComponent error={error} />
  
  const { allCharacters: { characters }} = data;

  function handleChoice(value) {
    setChoice(value);
  }

  return (
    <>
      <PointsConsumer value={props}>
        {context => {
          return (
            <>
              <HeaderComponent total={context} />
              <Grid>
                {characters.map((item) => (
                  context.choice = choice,

                  <Card key={item.id}>
                    <List>
                      <li style={{ background: '#FFFFFF'}}>
                        <Clue><strong>Dica:</strong></Clue>
                        <Clue>Nasc.: {item.birth_year}</Clue>
                        <Clue>Sexo: {item.gender}</Clue>
                      </li>
                      <li>
                        <SelectComponent onChoice={handleChoice} />
                      </li>
                      <li>
                         <Link href={`/details?id=${item.id}`}>
                          <Button onClick={() => context.chosen = item.id}>Veja mais</Button>
                        </Link>
                      </li>
                    </List>
                  </Card>
                ))}
              </Grid>
            </>
          )
        }}
      </PointsConsumer>
    </>
  );
}

export default withApollo(Index)