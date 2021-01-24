import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GET_JOKE_BY_CATEGORY } from '../graphql/queries';
import { Header } from './Header';

export const JokeByCategory = () => {
    const [joke, setJoke] = useState<String>('');
    const { category }: any = useParams();
    const { loading: category_joke_loading, data: category_joke_data, error, refetch} = useQuery(GET_JOKE_BY_CATEGORY, {
        variables: { category: `${category}` },
        notifyOnNetworkStatusChange: true
    });

    useEffect(() => {
        if(!category_joke_loading){ 
            console.log("category_joke_data:", category_joke_data)
            setJoke(category_joke_data.findByCategory.value) 
        };
    });

    return (
        <div>
            <Header 
                loading={category_joke_loading} 
                joke={joke} 
                refresh={refetch}
            />
        </div>
    );
}
