import React from 'react';
import {Link} from 'react-router-dom'
const Articles = (props) => {
    const article=props.articleArray
    return(
        <>
              {article.map((value,index)=>(
        <div key={index} className="p-4 md:w-1/2">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Link to={`/articles/${value.name}`}> 
          <img className="lg:h-48 md:h-36 w-50 object-cover object-center" 
          src={value.thumbnail} alt="blog"/>
          </Link>

          <div className="p-6">
          <Link key={index} to={`/articles/${value.name}`}>
            <h3 className="title-font font-medium text-lg text-gray-900">
            {value.title}
            </h3>
          </Link>
          <p className="leading-relaxed mb-1">
            {value.content[0].substring(0,150)}...
          </p>
          <div className="flex item-center flex-wrap">
          <Link className="text-indigo-500 inline-flex items-center"
          to={`/articles/${value.name}`}>Learn more...</Link>

          </div>
                 
          </div>
        </div>

        </div>

      ))}
        </>
    )
}

export default Articles