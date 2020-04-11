import React from 'react';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';

import LoadingComponent from '@components/Loading';
import ErrorComponent from '@components/Error';

const PICTURE = gql`
  query Picture($name: String) {
    picture(name: $name)
  }
`
const indisponivel = '/images/indisponivel.png';

const Color = styled.span`
  background-image: url('${(props) => (props.bgImage ? props.bgImage : indisponivel)}');
  background-size: cover;
  height: 200px;
  width: 200px;
  display: flex;
`;

const Picture = (item) => {
  const { name } = item;
  const { data, loading, error } = useQuery(PICTURE, {
    variables: { name: name },
  });

  if (loading) return <LoadingComponent icon="ThreeDots" height="40" width="40" />;
  if (error) return <ErrorComponent error={error} />

  return (<Color bgImage={data.picture} />)
}

export default Picture;


