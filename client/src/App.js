import React, { Fragment, useState, useEffect } from 'react';
import './App.css';
import Navbar from './components//layouts/Navbar';
import Main from './components/layouts/Main';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import image_footer from './images/footer1.png';
import logo_white from './images/logo_white.png';
import logo2 from './images/logo2.png';
import Contact from './components/layouts/Contact';
import developerimage from './images/ayoub_image.svg';
import axios from 'axios';

const App = () => {
  const initlaMode = () => {
    const mode = JSON.parse(localStorage.getItem('darkMode'));
    return mode || false;
  };

  const [loading, setLoading] = useState(true);
  const [dark, setDark] = useState(initlaMode());
  const [paragraphs, setParagraphs] = useState([]);
  const [tagsTechno, setTagTechno] = useState([]);
  const [portfolios, setPotfolios] = useState([]);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(dark));
    // eslint-disable-next-line
  }, [dark]);

  const getParagraphs = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`/api/about/`);
      const data = await res.data;
      console.log(data);
      setParagraphs(data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getTagsTecho = async () => {
    try {
      // setLoading(false);
      const res = await axios.get(`/api/tags/`);
      const data = await res.data;
      // setLoading(true);
      setTagTechno(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getPortfolios = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`/api/portfolio/`);
      const data = await res.data;
      setPotfolios(data);
      setLoading(false);
    } catch (error) {}
  };

  const switchMode = () => {
    setDark((prevMode) => !prevMode);
  };
  return (
    <Fragment>
      <Navbar
        logo={!dark ? logo2 : logo_white}
        title="AYOUB"
        switchMode={switchMode}
        dark={dark}
      />
      <div className={dark ? 'dark-mode' : ''}>
        <Main image={developerimage} dark={dark} />
        <About
          paragraphs={paragraphs}
          getParagraphs={getParagraphs}
          tagsTechno={tagsTechno}
          getTagsTecho={getTagsTecho}
          loading={loading ? true : false}
          dark={dark}
        />
        <Portfolio
          dark={dark}
          getPortfolios={getPortfolios}
          portfolios={portfolios}
          loading={loading ? true : false}
        />
        <Contact dark={dark} image={image_footer} />
      </div>
    </Fragment>
  );
};

export default App;
