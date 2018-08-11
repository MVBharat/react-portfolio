import React, { Component } from "react";

const PortfolioItem = props => {
  return (
    <div className="portfolio-item-wrapper">
      <div
        className="portfolio-img-background"
        style={{
          backgroundImage: "url(" + props.portfolioItem.bgImage + ")"
        }}
      />

      <div className="img-text-wrapper">
        <div className="logo-wrapper">
          <img src={props.portfolioItem.logo} alt={props.portfolioItem.name} />
        </div>

        <div className="subtitle">{props.portfolioItem.description}</div>
      </div>
    </div>
  );
};

const PortfolioList = () => {
  const data = [
    {
      id: 1,
      name: "CronDose",
      bgImage:
        "https://s3.amazonaws.com/bottega-devcamp/react-portfolio/backgrounds/crondose.jpg",
      logo:
        "https://s3.amazonaws.com/bottega-devcamp/react-portfolio/logos/crondose.png",
      description: "Online tutorials and productivity tips."
    },
    {
      id: 2,
      name: "DailySmarty",
      bgImage:
        "https://s3.amazonaws.com/bottega-devcamp/react-portfolio/backgrounds/dailysmarty.jpg",
      logo:
        "https://s3.amazonaws.com/bottega-devcamp/react-portfolio/logos/dailysmarty.png",
      description: "Keep track of what you learn every day."
    },
    {
      id: 3,
      name: "DashTrack",
      bgImage:
        "https://s3.amazonaws.com/bottega-devcamp/react-portfolio/backgrounds/dashtrack.jpg",
      logo:
        "https://s3.amazonaws.com/bottega-devcamp/react-portfolio/logos/dashtrack.png",
      description:
        "What you track improves. DashTrack is a journal that makes it easy to track your daily tasks and make the most of your time each day."
    },
    {
      id: 4,
      name: "DevCamp",
      bgImage:
        "https://s3.amazonaws.com/bottega-devcamp/react-portfolio/backgrounds/devcamp.jpg",
      logo:
        "https://s3.amazonaws.com/bottega-devcamp/react-portfolio/logos/devcamp.png",
      description: "Coding bootcamp and learning management system."
    },
    {
      id: 5,
      name: "DevTrunk",
      bgImage:
        "https://s3.amazonaws.com/bottega-devcamp/react-portfolio/backgrounds/devtrunk.jpg",
      logo:
        "https://s3.amazonaws.com/bottega-devcamp/react-portfolio/logos/devtrunk.png",
      description: "Online shop for developer happiness."
    },
    {
      id: 6,
      name: "Edutechional",
      bgImage:
        "https://s3.amazonaws.com/bottega-devcamp/react-portfolio/backgrounds/edutechional.jpg",
      logo:
        "https://s3.amazonaws.com/bottega-devcamp/react-portfolio/logos/edutechional.png",
      description: "Online technology tutorials."
    },
    {
      id: 7,
      name: "Eventbrite",
      bgImage:
        "https://s3.amazonaws.com/bottega-devcamp/react-portfolio/backgrounds/eventbrite.jpg",
      logo:
        "https://s3.amazonaws.com/bottega-devcamp/react-portfolio/logos/eventbrite.png",
      description:
        "Eventbrite is the leading event management platform on the web with millions of individuals utilizing their applications to find, register or, and management events in numerous industries."
    },
    {
      id: 8,
      name: "Ministry Safe",
      bgImage:
        "https://s3.amazonaws.com/bottega-devcamp/react-portfolio/backgrounds/ministry-safe.jpg",
      logo:
        "https://s3.amazonaws.com/bottega-devcamp/react-portfolio/logos/ministry-safe.png",
      description: "A complete child safety system for organizations."
    },
    {
      id: 9,
      name: "Open Devos",
      bgImage:
        "https://s3.amazonaws.com/bottega-devcamp/react-portfolio/backgrounds/open-devos.jpg",
      logo:
        "https://s3.amazonaws.com/bottega-devcamp/react-portfolio/logos/open-devos.png",
      description: "Publish and share daily devotionals."
    },
    {
      id: 10,
      name: "Quip",
      bgImage:
        "https://s3.amazonaws.com/bottega-devcamp/react-portfolio/backgrounds/quip.jpg",
      logo:
        "https://s3.amazonaws.com/bottega-devcamp/react-portfolio/logos/quip.png",
      description:
        "I built the Quip Ecommerce platform, named a Top 25 Invention by Time Magazine in 2016."
    },
    {
      id: 11,
      name: "Shop Hacker",
      bgImage:
        "https://s3.amazonaws.com/bottega-devcamp/react-portfolio/backgrounds/shop-hacker.jpg",
      logo:
        "https://s3.amazonaws.com/bottega-devcamp/react-portfolio/logos/shop-hacker.png",
      description:
        "Shop Hacker allows you to easily import digital products such as elearning courses, software, and games directly into your ecommerce store."
    },
    {
      id: 12,
      name: "Toastability",
      bgImage:
        "https://s3.amazonaws.com/bottega-devcamp/react-portfolio/backgrounds/toastability.jpg",
      logo:
        "https://s3.amazonaws.com/bottega-devcamp/react-portfolio/logos/toastability.png",
      description:
        "Easy way to manage the digital life of your bar or restaurant."
    }
  ];

  const portfolioListItems = data.map(item => {
    return <PortfolioItem key={item.id} portfolioItem={item} />;
  });

  return (
    <div className="content-wrapper">
      <div className="portfolio-items-wrapper">{portfolioListItems}</div>
    </div>
  );
};

export default class Home extends Component {
  render() {
    return (
      <div>
        <PortfolioList />
      </div>
    );
  }
}
