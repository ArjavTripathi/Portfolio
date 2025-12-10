import React from 'react';
import code from '../assets/code2.png';

const Works = () => {
  return (
    <div name='projects' className='w-full min-h-screen text-white bg-[#0A2540] pt-20'>
      <div className='max-w-screen-lg mx-auto px-4 py-8 flex flex-col justify-center w-full h-full'>

        {/* Section Header */}
        <div className='text-center mb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-teal-400'>Projects</p>
          <p className='py-6 text-gray-300 text-xl'>Check out some of my recent work</p>
        </div>

        {/* Project Grid */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {[1, 2, 3].map((project, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${code})` }}
              className='group relative rounded-lg overflow-hidden shadow-md shadow-teal-400/20 transform transition duration-300 hover:scale-[1.02]'
            >
              {/* Overlay on Hover */}
              <div className='absolute inset-0 bg-[#0A2540]/90 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center px-4 text-center transition duration-300 ease-in-out'>
                <h3 className='text-xl font-bold text-teal-300 mb-2'>Project Title</h3>
                <p className='text-gray-300'>Short description of the project goes here.</p>
                <div className='pt-4 flex gap-4'>
                  <a href='/' target='_blank' rel='noreferrer'>
                    <button className='px-4 py-2 bg-white text-gray-800 font-semibold rounded-md hover:bg-gray-200 transition'>Demo</button>
                  </a>
                  <a href='/' target='_blank' rel='noreferrer'>
                    <button className='px-4 py-2 bg-white text-gray-800 font-semibold rounded-md hover:bg-gray-200 transition'>Code</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Works;
