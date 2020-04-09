import { withApollo } from '../apollo/utils/client';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Link from 'next/link';
import styled from 'styled-components';

import PictureComponent from '../components/Picture';
import LoadingComponent from '../components/Loading';
import ErrorComponent from '../components/Error';

const ALLCHARACTERS = gql`
  query AllCharacters($number: Int) {
    allCharacters(page: $number) {
      characters {
        id
        height
        birth_year
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
`;

const numberRandom = Math.floor(Math.random() * (4 - 1 + 1) + 1);
const url = `/static/card_close_v${numberRandom}.png`;

const Card = styled.div`
  background-image: url(${url});
  width: 187px;
  height: 315px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 220px 0 0 0;
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

const Index = () => {
  const { data, loading, error } = useQuery(ALLCHARACTERS, {
    variables: { number: 1 },
  });

  if (loading) return <LoadingComponent />;
  if (error) return <ErrorComponent error={error} />
  
  const { allCharacters: { characters }} = data;

  return (
    <>
      <p>Descubra quem é o personagem: </p>

      <Grid>
        {characters.map((item) => (
          <Card key={item.id}>
            <List>
              <li>Height: {(Math.round(item.height*1)/100).toFixed(2)} cm</li>
              <li>Birth: {item.birth_year}</li>
              <li>
                <Link href="/user/[id]/" as={`/user/${item.id}/`}>
                  <Button>See</Button>
                </Link>
              </li>
            </List>
          </Card>
        ))}
      </Grid>
    </>
  );
}

export default withApollo(Index)