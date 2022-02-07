import React from 'react';
import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import articleContent from './articleContent'
import Articles from '../components/articles'
import NotFound from './notFound'
import CommentsList from '../components/CommentsList'
import AddCommentForm from '../components/AddCommentForm'
const Article = () => {
  const params=useParams();
  const name = params.name;
  const article=articleContent.find((article) => article.name === name);
  console.log(article);
  const [articleInfo, setArticleInfo] = useState({ comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      console.log(body);
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);

  if(!article) 
  return<div className="m-40 text-center font-bold"><NotFound/></div>
    const otherArticles=articleContent.filter((article) => article.name !== name);
  return <div className="m-40">  
  <h1 className="sm:text-4xl text-2xl font-bold m-240 mb-6 text-gray-900">{article.title}</h1>
  {article.content.map((value, index) =>(
<p className="mx-auto leading-relaxed text-base m-4" key={index}>
{value}
</p>
  ))}
  <CommentsList comments={articleInfo.comments} />
      <AddCommentForm articleName={name} setAritcleInfo={setArticleInfo} />
  <h1 className="sm:text-2x text-xl font-bold mt-4 mb-4 text-gray-900">
    Other Articles
  </h1>
  <div className="flex flex-wrap -m-4">
  <Articles articleArray={otherArticles}/>

  </div>
  </div>
  
};

export default Article;