import React ,{ useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import JokeContext from '../contexts/JokeContext';
import { GET_CATEGORIES, GET_JOKE_BY_CATEGORY, GET_RANDOM_JOKE } from '../graphql/queries';
import { Categories, Joke } from '../types';
import { useParams } from 'react-router-dom';

const JokeProvider = (props) => {

    const [joke, setJoke] = useState<Joke>('');
    const [categories, setCategories] = useState<Categories>([]);
    const { category }: any = useParams();
    const { data: joke_data, loading: joke_loading, refetch} = useQuery(GET_RANDOM_JOKE, {
        notifyOnNetworkStatusChange: true
    });
    const { loading: categories_loading, data: categories_data, error: categories_error} = useQuery(GET_CATEGORIES, {
        notifyOnNetworkStatusChange: true
    });
    const { loading: category_joke_loading, data: category_joke_data, error} = useQuery(GET_JOKE_BY_CATEGORY, {
        variables: { category: `${category}` },
        notifyOnNetworkStatusChange: true
    });

    useEffect(() => {
        if(!joke_loading) {
          setJoke(joke_data.joke.value);
        }
    });

    useEffect(() => {
        console.log("data", categories_data)
       if(!categories_data){ setCategories(categories_data.category.categories) };
    })
    
    const refreshJoke = () => {
        refetch();
    }

    const getCategories = () => {

    }

    const getByCategory = (category: String) => {
        
    }

    // if(loadingJoke || loading) return <div>Loading...</div>;

    return (
        <JokeContext.Provider value={{
            joke,
            categories,
            refreshJoke,
            getCategories,
            getByCategory
        }}>
            {props.children}
        </JokeContext.Provider>
    );
};

export default JokeProvider;