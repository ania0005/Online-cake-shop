import React from 'react';

const About: React.FC = () => {
  return (
    // Обертка для контента страницы, задаем ширину и выравнивание по центру
    <div style={{ width: '65%', margin: '0 auto' }} >
      <h2 className='header1'>About Us:</h2>
      <br/>
      <h4>Our history:</h4>
      <p></p>
      <br/>
      <h4>Our team:</h4>
      <p></p>
      <br/>     
    </div>
  );
};

export default About;