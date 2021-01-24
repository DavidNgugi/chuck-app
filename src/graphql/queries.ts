import { gql} from '@apollo/client';

export const GET_RANDOM_JOKE = gql `
    query {
        joke {
            icon_url
            id
            url
            value
        }
    }
`;

export const GET_CATEGORIES = gql `
    query {
        categories 
    }
`;

export const GET_JOKE_BY_CATEGORY = gql `
    mutation findByCategory($category: String!) {
        findByCategory(category: $category) {
            icon_url
            value
        }
    }
`;

export const SEARCH_TEXT = gql `
    mutation searchJoke($query: String!){
        searchJoke(query: $query) {
            icon_url
            value
        }
    }
`;