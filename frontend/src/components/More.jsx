import React, { useState } from 'react'

const More = () => {
    const lng = [1,2,3];
    const [currentIndex, setCurrentIndex] = useState(0);

    const moreData = [
        {
            feedback: 'I am veryyyyy',
            name: 'John Doe',
        },
        {
            feedback: 'I am very',
            name: 'John Doe',
        },
        {
            feedback: 'I am very',
            name: 'John Doe',
        },

    ];

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };
  return (

    <section id='more' className='rounded-lg p-3 mt-3 bg-[#ffd2df]'>
    <h1 className='font-bold text-3xl text-center'>More To Explore</h1>
    <div className="testimonial-container relative overflow-hidden w-full flex flex-col justify-center items-center align-items-center">
        {moreData.length>0 && moreData.map((testimonial, index) => (
            <div
                key={index}
                className={`testimonial ${index === currentIndex ? 'block' : 'hidden'}`}
            >
                <p className="text-center mb-5">{`"${testimonial.feedback}"`}</p>
                <p className="text-center">{` - ${testimonial.name} (Enrolled in ${testimonial.courseName})`}</p>
            </div>
        ))}
    </div>
    <div className="dots flex justify-center mt-4">
        {lng.length>0 && lng.map((_, index) => (
            <span
                key={index}
                className={`dot h-4 w-4 mx-1 rounded-full cursor-pointer ${index === currentIndex ? 'bg-black' : 'bg-gray-300'}`}
                onClick={() => handleDotClick(index)}
            ></span>
        ))}
    </div>
    </section>
  )
}

export default More