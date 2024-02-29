import React from 'react';
import './QuoteScreen.css';
import Navbar from '../component/Navbar';
import { QuoteCard } from '../component/QuoteCard';

export const QuoteScreen = () => {

  const quoteData = [{
    "desc" : "It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
    "author" : "Adam Scott"
  },{
    "desc" : "Eat breakfast like a king, lunch like a prince, and dinner like a pauper.",
    "author" : "Adelle Davis"
  },{
    "desc" : "We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are.",
    "author" : "Adelle Davis"
  },{
    "desc" : "It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
    "author" : "Adam Scott"
  },{
    "desc" : "Eat breakfast like a king, lunch like a prince, and dinner like a pauper.",
    "author" : "Adelle Davis"
  },{
    "desc" : "We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are.",
    "author" : "Adelle Davis"
  }]  

  return (
    <>
        {/* Navbar */}
        <Navbar/>
        <section className='quote-section'>
            <h2>These are the top Quotes</h2>
            {
                quoteData.map((elem, index)=>{
                    return(
                        <QuoteCard 
                            description={elem.desc}
                            author={elem.author}
                            key={index}
                        />
                    ) 
                })
            }
        </section>
    </>
  )
}
