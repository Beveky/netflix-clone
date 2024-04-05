import React from 'react';
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';

import Navbar from '@/components/Navbar';

import MovieList from '@/components/MovieList';
import InfoModal from '@/components/InfoModal';
import useMovieList from '@/hooks/useMovieList';

import useInfoModalStore from '@/hooks/useInfoModalStore';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

const wishlist = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: movies = [] } = useMovieList();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {isOpen, closeModal} = useInfoModalStore();

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
    <div className="relative h-[10vw]"></div>
      <div className="pb-40 ">
    

        <MovieList  title="Recently Added" data={movies} />
      
      
      </div>
    </>
  )
}

export default wishlist;
