import React from 'react'

const Saying = ({quoteRandom, handleClick}) => {
    return (
        <p  className='box__quote'>{quoteRandom.quote}</p>
    )
}

export default Saying