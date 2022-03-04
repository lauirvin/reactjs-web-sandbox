import axios from 'axios';
import { renderHook, act } from '@testing-library/react-hooks';
import useStarWarsDetails from '.';
import mockFilmsResponse from './mockResponse/mockFilmsResponse';
import mockCharactersResponse from './mockResponse/mockCharactersResponse';

jest.mock('axios');

describe('useStarWarsDetails', () => {
  it('Call Peoples and Films API and return characters and films results', async () => {
    /** Mock http://swapi.dev/api/people/ call  */
    (axios.get as unknown as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({ data: mockCharactersResponse }),
    );

    /** Mock http://swapi.dev/api/films/ call  */
    (axios.get as unknown as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({ data: mockFilmsResponse }),
    );

    /** Render useStarWarsDetails hook  */
    const { result, waitForNextUpdate } = renderHook(() => useStarWarsDetails());

    /** Expect initial results from useStarWarsDetails hook  */
    expect(result.current).toStrictEqual({ characters: [], films: [] }); // Empty array due to returning initialState

    /** Wait for hook update  */
    await act(() => waitForNextUpdate());

    /** Final results  */
    expect(result.current).toStrictEqual({
      films: mockFilmsResponse.results,
      characters: mockCharactersResponse.results,
    });

    /** Check if the following API's have been called via axios  */
    expect(axios.get).toHaveBeenCalledWith('http://swapi.dev/api/people/');
    expect(axios.get).toHaveBeenCalledWith('http://swapi.dev/api/films/');
  });
});
