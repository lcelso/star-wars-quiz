import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';

import LoadingComponent from '@components/Loading';
import ErrorComponent from '@components/Error';

const SelectElement = styled.select`
  border: none;
  background: #7b8491;
  color: #FFF;
  display: block;
  margin: 5px 0;
`

const CHARSNAMES = gql`
  query CharNames($number: Int) {
    charsNames(page: $number) {
      characters {
        id
        name
      }
    }
  }
`

const Select = ({ onChoice }) => {
  const { data, loading, error } = useQuery(CHARSNAMES, {
    variables: { number: 1 },
  });

  if (loading) return <LoadingComponent icon="ThreeDots" height="40" width="40" />;
  if (error) return <ErrorComponent error={error} />
  
  const { charsNames: { characters }} = data;
  const chars = characters.sort((a, b) => {
    if(a.name < b.name) return -1;
    if(a.name > b.name) return 1;
    return 0;
  });

  return (
    <SelectElement
      onChange={e => onChoice(e.target.value)}>
      <option value="DEFAULT">Selecione</option>
      {chars.map((item) => (
        <option key={item.id} value={item.name}>{item.name}</option> 
      ))}
    </SelectElement>
  );
};

export default Select;
