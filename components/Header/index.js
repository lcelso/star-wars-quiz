import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const HeaderElment = styled.header`
  background-color: #040916;
  height: 60px;
  padding: 20px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 20px;
`;

const ItemLeft = styled.div`
  text-align: left;
`

const ItemCenter = styled.div`
  text-align: center;
`

const ItemRight = styled.div`
  text-align: right;
`

const Points = styled.ul`
  display: flex;
  justify-content: center;
  align-self: center;
`
const PointItems = styled.span`
  background-color: #FFFFFF;
  padding: 12px;
  color: #000000;
  display: inline-block;
`;

const Header = ({ total }) => {
  const { error, correct, points } = total;

  return(
    <HeaderElment>
      <Grid>
        <ItemLeft>
          <Link href="/">
            <a alt="Voltar para home"><img src="/images/logo.png" width="130" alt="Star Wars" /></a>
          </Link>
        </ItemLeft>
        <ItemCenter>
          <p>Vamos descobrir mais sobre Star Wars?</p>
          <p>Neste game você tera dicas para descobrir cada personagem. Veja abaixo</p>
        </ItemCenter>
        <ItemRight>
          <Points>
            <li><img src="/images/icon_points.png" width="40" /></li>
            <li><PointItems>{points} Pontos</PointItems></li>
            <li><img src="/images/icon_correct.png" width="40" /></li>
            <li><PointItems>{correct} Acertos</PointItems></li>
            <li><img src="/images/icon_error.png" width="40" /></li>
            <li><PointItems>{error} Erros</PointItems></li>
          </Points>
        </ItemRight>
      </Grid>
    </HeaderElment>
  );
};

export default Header;
