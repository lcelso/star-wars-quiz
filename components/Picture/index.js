import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import LoadingComponent from '../../components/Loading';
import ErrorComponent from '../../components/Error';

const PICTURE = gql`
  query Picture($name: String) {
    picture(name: $name)
  }
`

const Picture = (item) => {
  const { name } = item;
  const { data, loading, error } = useQuery(PICTURE, {
    variables: { name: name },
  });

  if (loading) return <LoadingComponent />;
  if (error) return <ErrorComponent error={error} />

  return (
    <img src={data.picture} width="100" />
  )
}

export default Picture;


