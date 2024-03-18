import React from 'react';
import { Link } from 'react-router-dom';
import './News.css';
import news1 from '../Assests/img1.jpg';
import news2 from '../Assests/img2.jpg';
import news3 from '../Assests/img3.jpg';

function News() {
  const news = [
    { id: 0, date: 'March 1, 2024', title: 'Create a Blissful Scheme with Purple Bedroom Ideas', description: `Looking for bedroom colour ideas? You can’t go far wrong with these purple bedroom ideas. Purple remains a popular and thought-provoking shade suitable for all tastes.`, image: news1 },
    { id: 1, date: 'March 2, 2024', title: `Kitchen Trends 2018 – New Looks You Need to See`, description: `You could be ripping out the old and installing a brand new kitchen, moving your kitchen into a new room or simply tackling a small project to update your kitchen.`, image: news2 },
    { id: 2, date: 'March 3, 2024', title: 'Garden Fence Ideas to Create a Garden You’ll Love', description: `The best garden fence ideas can bring structure, texture, definition and joy to your outdoor space. Don't sit on the fence! Check out these nifty ideas.`, image: news3 },
  ];

  return (
    <div>
      <h1 className="latest-news-heading">Latest News</h1>
      <div className="latest-news">
        {news.map((item) => (
          <Link key={item.id} to="/blog" className="news-link">
            <div className="news-item">
              <img src={item.image} alt="news" />
              <div className="news-details">
                <p className="news-date">{item.date}</p>
                <h3 className="news-title">{item.title}</h3>
                <p className="news-description">{item.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default News;
