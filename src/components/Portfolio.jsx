import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";
import { motion } from "framer-motion";

function Portfolio() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolio.map((project) => (
          <div className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden">
            <PortfolioItem
              imgUrl={project.imgUrl}
              title={project.title}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
