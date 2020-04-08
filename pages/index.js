import { withApollo } from '../apollo/utils/client';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import PictureComponent from '../components/Picture';
import LoadingComponent from '../components/Loading';
import ErrorComponent from '../components/Error';

const ALLCHARACTERS = gql`
  query AllCharacters($number: Int) {
    allCharacters(page: $number) {
      characters {
        name
      }
    }
  }
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
      {characters.map((item) => (
        <ul key={item.name} style={{ marginBottom: 20 }}>
          <li>Name: {item.name}</li>
          <li>
            <PictureComponent name={item.name} />
          </li>
        </ul>
      ))}
    </>
  );
}

export default withApollo(Index)