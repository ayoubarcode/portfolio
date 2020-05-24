import React, { useEffect, useState } from 'react';
import PorfolioItem from './PorfolioItem';
import Spinner from './../layouts/Spinner';
import { isDividVy2 } from './../../utils/utils';
import { replaceByHTML } from './../../utils/utils';
import parse from 'html-react-parser';

const Portfolio = ({ portfolios, dark, getPortfolios, loading }) => {
  useEffect(() => {
    getPortfolios();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="container my-5" id="portfolio">
      <section className="dark-grey-text">
        <h3 className="font-weight-bold text-primary pt-4 mb-4 text-center">
          PORTFOLIO
        </h3>
        <h4 className="text-center">
          {parse(replaceByHTML("Check what I've been doing lately", ['doing']))}
        </h4>
        {portfolios.map((portfolio) => (
          <PorfolioItem
            key={portfolio.id}
            portfolio={portfolio}
            turn={isDividVy2(portfolio.id)}
          />
        ))}
      </section>
    </div>
  );
};

export default Portfolio;
