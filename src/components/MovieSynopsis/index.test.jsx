import React from 'react';
import { render, fireEvent, screen } from 'test-utils';
import MovieSynopsis from './index';

it('Renders modal without movie information and searches for the text Cargando', () => {
  const synopsis = render(<MovieSynopsis modalProps={{ show: true }} />);

  expect(synopsis.getByText(/cargando/i)).toBeInTheDocument();
});

it('Renders modal with movie information and makes sure there is no text Cargando', () => {
  const initialState = {
    movies: {
      movieSelected: {
        data: {
          image_large: 'large',
          image_medium: 'medium',
          title: 'title',
          ranking: {average_votes: 4},
          extendedcommon: {
            media: { originaltitle: 'original title', rating: { code: 4 } },
            genres: { genre: [{ desc: 'Action' }, { desc: 'Drama' }] },
            roles: {
              role: [
                {
                  name: 'Actor',
                  talents: { talent: [{ name: 'Brad', surname: 'Pitt' }] },
                },
              ],
            },
          },
        },
      },
    },
  };
  const synopsis = render(<MovieSynopsis modalProps={{ show: true }} />, {
    initialState,
  });

  expect(synopsis.getByRole('button')).toBeInTheDocument();
});
