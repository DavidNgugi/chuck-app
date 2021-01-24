import React from 'react';
import { Categories, Joke } from '../types';

const JokeContext = React.createContext({
    joke: <String>(''),
    new_joke_loading: <Boolean>(true),
    categories: <Array<Categories>>([]),
    new_categories_loading: <Boolean>(true),
    refreshJoke: (): void => {}
});

export default JokeContext;