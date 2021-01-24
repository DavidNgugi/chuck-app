import React from 'react';

const JokeContext = React.createContext({
    joke: <string>(''),
    categories: <Array<String>>([]),
    refreshJoke: () => {},
    getCategories: () => {},
    getByCategory: (category: string) => {}
});

export default JokeContext;