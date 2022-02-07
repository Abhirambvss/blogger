import React from 'react';
import Articles from '../components/articles'
import articleContent from './articleContent';
const ArticlesList = () => {
  return <div> 
   <h1 className="text-center sm:text-4xl text-2xl font-bold mt-40 mb-6 text-gray-900">
  Articles List
  </h1>
  <div className="container py-4 mx-auto">
    <div className="flex flex-wrap -m-4">
     <Articles articleArray={articleContent}/>
    </div>
  </div>
  </div>;
};

export default ArticlesList;
