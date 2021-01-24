import React ,{ useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import JokeContext from '../contexts/JokeContext';
import { GET_CATEGORIES, GET_RANDOM_JOKE } from '../graphql/queries';
import { Categories, Joke } from '../types';

const JokeProvider = (props) => {

	const [joke, setJoke] = useState<String>('');
	const [new_joke_loading, setJokeLoading] = useState<Boolean>(true);
	const [new_categories_loading, setCategoriesLoading] = useState<Boolean>(true);
    const [categories, setCategories] = useState<Array<Categories>>([]);
    let { data: joke_data, loading: joke_loading, refetch } = useQuery(GET_RANDOM_JOKE);
    let { loading: categories_loading, data: categories_data, error: categories_error } = useQuery(GET_CATEGORIES);
	
	useEffect(() => setJokeLoading(joke_loading));

	useEffect(() => setCategoriesLoading(categories_loading));
    
    useEffect(() => {
        if(!joke_loading) {
			setJoke(joke_data.joke.value);
        }
	});
	
    useEffect(() => {
       if(!categories_loading){ 
			setCategories(categories_data.categories);
        };
    });
    
    const refreshJoke = () => refetch();

    return (
        <JokeContext.Provider value={{
			joke,
			new_joke_loading,
			categories,
			new_categories_loading,
            refreshJoke
        }}>
            {props.children}
        </JokeContext.Provider>
    );
};

export default JokeProvider;