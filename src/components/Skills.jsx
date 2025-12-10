import React from 'react';

const Skills = () => {
  return (
    <div name='skills' className='w-full min-h-screen bg-[#0A2540] text-white pt-20'>
      <div className='max-w-screen-lg mx-auto px-4 py-16 flex flex-col justify-center h-full'>

        {/* Header */}
        <div className='mb-8 text-center'>
          <p className='text-4xl font-bold inline border-b-4 border-teal-400'>
            Skills
          </p>
          <p className='text-xl mt-4 text-gray-300'>
            I love diving into new technologies. Here’s what I’ve been working with lately:
          </p>
        </div>

        {/* Skills Grid */}
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-6 text-center'>
          {["HTML", "CSS", "React", "Java", "C", "Python", "SQL"].map((skill) => (
            <div key={skill} className='bg-[#0A2540] shadow-md shadow-teal-400/30 rounded-md p-6 hover:scale-105 transform transition duration-300 ease-in-out'>
              <p className='text-teal-300 font-semibold text-lg'>{skill}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Skills;
