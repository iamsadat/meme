import React from 'react';

export default function Header() {
    return (
        <div className='header'>
            <img className='header--img' src='https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png' />
            <h2 className='header--title'>Meme Generator</h2>
            <h4 className='header--credit'>Created with React</h4>
        </div>
    )
}