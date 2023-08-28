import Head from 'next/head'
import { Grid, GridItem } from '@chakra-ui/react';
import { connect } from 'react-redux';
import NavBar from '../components/Navbar/NavBar'
import MovieGrid from "../components/MovieGrid"
import MovieHeading from '@/components/MovieHeading';
import Pagination from '@/components/Pagination';

function Home({ nbPages }: any) {

  return (
    <>
      <Head>
        <title>Cinema App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      <Grid
        height={100}
        templateRows="auto 1fr 2fr" // Define three rows: navbar, main grid, pagination
        templateColumns="1fr"
        gap={1} >
        <GridItem >
          <MovieHeading />
          <MovieGrid />
        </GridItem>
        <GridItem >
          {nbPages > 1 && <Pagination />}
        </GridItem>
      </Grid >
    </>
  )
}

const mapStateToProps = ({ moviesState }: any) => {
  return {
    filters: moviesState.filters,
    nbPages: moviesState.nbPages
  };
};

export default connect(mapStateToProps)(Home);
