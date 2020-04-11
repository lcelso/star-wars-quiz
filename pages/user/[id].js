// import React from 'react';
// import { withApollo } from '../../apollo/utils/client';
// import gql from 'graphql-tag';
// import { useQuery } from '@apollo/react-hooks';
// import Link from 'next/link';
// import styled from 'styled-components';

// import PictureComponent from '../../components/Picture';
// import LoadingComponent from '../../components/Loading';
// import ErrorComponent from '../../components/Error';
// import HeaderComponent from '../../components/Header';
// import { useCount, useDispatchCount } from '@components/Points'


// // import HomeContext from '@components/Points';
// // import { HomeProvider } from '@components/Points'

// const CHAR = gql`
//   query Char($number: Int) {
//     char(page: $number) {
//       characters {
//         id
//         name
//         height
//         mass
//         gender
//         homeworld
//       }
//     }
//   }
// `

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(1, 1fr);
//   grid-template-rows: repeat(1, 1fr);
//   justify-items: center;
//   align-items: center;
// `;

// const Card = styled.div`
//   background-image: url('/static/card_open.png');
//   width: 311.88px;
//   height: 500px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 30px;
//   margin: 20px 0;
// `;

// const List = styled.ul`
//   list-style: none;
//   background: #FFFFFF;
//   padding: 15px;
//   margin-top: 110px;
//   color: #000000;
// `

// const Button = styled.button`
//   background-color: #FCE62E;
//   color: #000000;
//   border: none;
//   font-size: 14px;
//   padding: 20px;
//   font-weight: bold;
//   outline: none;
// `

// const User = ({ user }) => {
//   const count = useCount()
//   const dispatch = useDispatchCount()

//   const handleIncrease = event =>
//     dispatch({
//       type: 'INCREASE',
//     })
//   const handleIncrease15 = event =>
//     dispatch({
//       type: 'INCREASE_BY',
//       payload: 15,
//     })


//   // const choice = localStorage.getItem('choice');
//   // const points = localStorage.getItem('points');

//   const { data, loading, error } = useQuery(CHAR, {
//     variables: { number: user },
//   });

//   if (loading) return <LoadingComponent icon="Puff" height="100" width="100" />;
//   if (error) return <ErrorComponent error={error} />
//   const { char: { characters }} = data;
//   // const total = parseInt(points);

//   // if (characters[0].name === choice) {
//   //   localStorage.setItem('points', total + 10);
//   // } else {
//   //   localStorage.setItem('points', total - 10);
//   // }

//   return (
//     <Grid>
//       {/* <HeaderComponent points={points}/> */}

//       <p>Counter: {count}</p>
//       <Card>
//         <List>
//           <li>
//             {/* <PictureComponent name={characters[0].name} /> */}
//           </li>
//           <li>Name: {characters[0].name}</li>
//           <li>Height: {characters[0].height}</li>
//           <li>Mass: {characters[0].mass}</li>
//           <li>Gender: {characters[0].gender}</li>
//         </List>
//       </Card>
//       <Link href="/"><Button>Voltar para home</Button></Link>
//     </Grid>
//   );
// }

// User.getInitialProps = async ({ query: { id } }) => {
//   const char = parseInt(id);
//   return { user: char }
// }

// export default withApollo(User);
