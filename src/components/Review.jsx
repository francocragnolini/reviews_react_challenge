import React, { useState } from 'react';
import people from '../data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

    // aplying an hook to set the people array index
    const [index, setIndex] = useState(0)
    
    // destructuring the people obj. from data.jsx
    const {name, job, image, text} = people[index];

    // makes sure the index is not < or > to the array.length
    const checkNumber = (number)=> {
        if (number > people.length - 1) {
            return 0
        }
        if (number < 0) {
            return people.length -1
        }
        return number
    }

    // add one to the current index
    const nextPerson = ()=> {
       setIndex((index)=> {
           let newIndex = index + 1
           return checkNumber(newIndex)
       })
    }

    // substracts one to the current index
    const prevPerson = ()=> {
        setIndex((index)=> {
            let newIndex = index - 1
            return checkNumber(newIndex)
        })
    }

    // generates a random number
    const randomNumber = ()=> {
        let number = Math.floor(Math.random() * people.length)
        // avoids getting the same number(index) from the array.
        if (number === index) {
            number = index + 1;
        }
        // avoids getting a number < or > to the array.length(people array)
        setIndex(checkNumber(number));
    }
    return (
        <article className='review'>
            <div className="img-container">
                <img src={image} alt={name} className='person-img' />
                <span className="quote-icon">
                    <FaQuoteRight/>
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className='prev-btn' onClick={ prevPerson}>
                    <FaChevronLeft/>
                </button>
                <button className='next-btn' onClick={nextPerson}>
                    <FaChevronRight/>
                </button>
            </div>
            <button className="random-btn" onClick={randomNumber}>Surpirse Me</button>
        </article>
    )
}

export default Review
