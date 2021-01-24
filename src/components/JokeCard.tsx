import React from 'react';
import JokeContext from '../contexts/JokeContext';
import { Header } from './Header';

export const JokeCard = () => {
    return (
		<JokeContext.Consumer>
			{ value => 
				(
					<div>
						<Header 
							loading={value.new_joke_loading} 
							joke={value.joke} 
							refresh={value.refreshJoke}
						/>
					</div>
				)
			}
		</JokeContext.Consumer>
    );
}
