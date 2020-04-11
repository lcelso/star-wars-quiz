import { withApollo } from '../hocs/withApollo';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Link from 'next/link';
import styled from 'styled-components';

import { PointsConsumer } from '../context/Points';

import PictureComponent from '@components/Picture';
import LoadingComponent from '@components/Loading';
import ErrorComponent from '@components/Error';
import HeaderComponent from '@components/Header';

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
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, 1fr);
  justify-items: center;
  align-items: center;
`;

const Card = styled.div`
  background-image: url('/images/card_open.png');
  width: 311.88px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin: 20px 0;
`;

const List = styled.ul`
  list-style: none;
  background: #FFFFFF;
  padding: 15px;
  margin-top: 110px;
  color: #000000;
`

const Button = styled.button`
  background-color: #FCE62E;
  color: #000000;
  border: none;
  font-size: 14px;
  padding: 20px;
  font-weight: bold;
  outline: none;
`

const User = ({ user, props }) => {
  const { data, loading, error } = useQuery(CHAR, {
    variables: { number: user },
  });

  if (loading) return <LoadingComponent icon="Puff" height="100" width="100" />;
  if (error) return <ErrorComponent error={error} />

  const { char: { characters }} = data;

  return (
    <PointsConsumer value={props}>
        {context => {
          const actCorrects = context.correct;
          const actErrors = context.error;
          const actPoints = context.points;

          if (characters[0].name === context.choice) {
            context.points = actPoints + 10;
            context.correct = actCorrects + 1;
          } else {
            context.points = actPoints - 10;
            context.error = actErrors + 1;
          }
        
          return (
            <>
            <Grid>
              <HeaderComponent total={context} />

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
              <Link href="/"><Button>Voltar para home</Button></Link>
            </Grid>
            </>
          )
        }}
      </PointsConsumer>
  );
}

User.getInitialProps = async ({ query: { id } }) => {
  const char = parseInt(id);
  return { user: char }
}

export default withApollo(User);
