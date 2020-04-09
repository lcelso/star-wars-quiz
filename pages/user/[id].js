import { withApollo } from '../../apollo/utils/client';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Link from 'next/link';
import styled from 'styled-components';

import PictureComponent from '../../components/Picture';
import LoadingComponent from '../../components/Loading';
import ErrorComponent from '../../components/Error';

const CHAR = gql`
  query Char($number: Int) {
    char(page: $number) {
      characters {
        id
        name
        height
        mass
        gender
        homeworld
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
  background-image: url('/static/card_open.png');
  width: 311.88px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`;

const List = styled.ul`
  list-style: none;
  background: #FFFFFF;
  padding: 15px;
  margin-top: 110px;
`

const User = ({ user }) => {
  const { data, loading, error } = useQuery(CHAR, {
    variables: { number: user },
  });

  if (loading) return <LoadingComponent />;
  if (error) return <ErrorComponent error={error} />
  
  const { char: { characters }} = data;

  return (
    <Grid>
      <Card>
        <List>
          <li>
            <PictureComponent name={characters[0].name} />
          </li>
          <li>Name: {characters[0].name}</li>
          <li>Height: {characters[0].height}</li>
          <li>Mass: {characters[0].mass}</li>
          <li>Gender: {characters[0].gender}</li>
        </List>
      </Card>
      

      <Link href="/"><a>Voltar para home</a></Link>
    </Grid>
  );
}

User.getInitialProps = async ({ query: { id } }) => {
  const char = parseInt(id);
  return { user: char }
}

export default withApollo(User);
