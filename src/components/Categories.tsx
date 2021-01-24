import React from 'react';
import { Link } from 'react-router-dom';
import JokeContext from '../contexts/JokeContext';

export const Categories = () => {
    return (
		<JokeContext.Consumer>
			{ value => 
				(
					<div className="row category-body">
                        <h3 className="category-header">Joke Categories</h3>
                        <div className= "col-md-6">
                            { value.new_categories_loading 
                                ?
                                    <p className = "p-1 text-center">Loading...</p>
                                :
                                <ul className="nav d-flex">
                                    {
                                        
                                        value.categories.map((category, index) => {
                                            return <li className = "nav-item p-1" key={index}>
                                                <Link
                                                    to={`/jokes/${category}`}
                                                    type="button"
                                                    className="btn btn-sm btn-outline-secondary"
                                                >
                                                    {category}
                                                </Link></li>
                                        })
                                    }
                                </ul>
                            }
                        </div>
					</div>
				)
			}
		</JokeContext.Consumer>
    );
}