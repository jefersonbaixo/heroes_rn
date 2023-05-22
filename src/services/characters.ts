import api from './api';

export const getCharacters = async (offset: number) => {
  const response = await api.get('characters', {
    params: {
      offset,
    },
  });

  return response.data.data;
};

export const getCharacter = async (id: number) => {
  const response = await api.get(`characters/${id}`);

  return response.data.data;
};
