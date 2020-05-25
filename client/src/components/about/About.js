import React, { useState, useEffect, Fragment } from 'react';
import AboutItem from './AboutItem';
import Spinner from './../layouts/Spinner';
import { replaceByHTML, joinByDash, joinByDashJson } from './../../utils/utils';
import Tags from './Tags';
import parse from 'html-react-parser';

const words = [
  '23',
  'HTML',
  'Redux',
  'python',
  'CSS',
  'youtube',
  'Front-end',
  'wondering',
  'Javascript',
  'languages/technologies',
];

// const tagsTechno = ['Python', 'Django', 'Node.js', 'ReactJs', 'MongoDB'];

const About = ({
  dark,
  paragraphs,
  getParagraphs,
  tagsTechno,
  getTagsTecho,
  loading,
}) => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    getTagsTecho();
    getParagraphs();
    setTitle('If you’re wondering who I am');
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="container my-5 " id="about">
      <section className="dark-grey-text text-center ">
        <h3 className="font-weight-bold text-primary pt-4 mb-4">ABOUT ME</h3>
        <h4>{parse(replaceByHTML(title, words))}</h4>

        <div className="row d-flex justify-content-center">
          {paragraphs.map((p) => (
            <AboutItem key={p.id} paragraphe={p} words={words} />
          ))}
        </div>
      </section>

      <section>
        <h4 className="text-center font-italic">
          {parse(
            replaceByHTML(
              'My current stack of languages/technologies is:',
              words
            )
          )}
        </h4>

        <Tags tagsTechno={tagsTechno} />
      </section>

      <section className="mt-5 text-center">
        <button
          type="button"
          className="btn btn-primary px-3"
          style={customBtnStyle}
        >
          <i className="fas fa-paper-plane fa-lg mr-2"></i>
          Resume
        </button>

        <button
          type="button"
          className="btn btn-outline-primary  px-3"
          style={customBtnStyle}
        >
          <i className="fas fa-file-pdf fa-lg mr-2"></i>
          Curriculum
        </button>
      </section>
    </div>
  );
};

const customBtnStyle = {
  borderRadius: '40px',
};

export default About;
