import React from 'react';
import { useHistory } from 'react-router-dom';

export const AboutPage: React.FC = ()=> {
    const history = useHistory()
    return (
        <div className='center'>
         <h1>Страница информации</h1>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim voluptatum ut magnam facilis. Perspiciatis mollitia voluptas nemo incidunt soluta! Consectetur?</p>
         <button onClick={() => history.push('/')} className="btn">Обратно к списку дел</button>
        </div>
    )
}
