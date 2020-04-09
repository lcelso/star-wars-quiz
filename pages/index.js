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
  grid-row-gap: 5px;
  justify-items: center;
  align-items: center;
`;

const Card = styled.div`
  background-image: url('/static/card_close.png');
  width: 186.92px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`;

const List = styled.ul`
  list-style: none;
  background: #FFFFFF;
  padding: 15px;
  margin-top: 220px;
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
                  <Button>Descobrir</Button>
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