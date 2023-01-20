import React from 'react'
import ButtonBox from './ButtonBox'
import Saying from './Saying'

const QuoteBox = ({quoteRandom, handleClick, colorRandom}) => {

    return (
    <article style={{color:colorRandom}} className='box'>
        <i className='bx bxs-quote-alt-left box__icon'></i>
        <Saying
        quoteRandom = {quoteRandom}
        />
        <h1 className='box__author'>{quoteRandom.author}</h1>
        <ButtonBox 
        colorRandom = {colorRandom}
        handleClick = {handleClick}
        
        />
        

    </article>
    )
}

export default QuoteBox