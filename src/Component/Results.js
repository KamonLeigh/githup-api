import React from 'react';
import'./Results.css';

const Result = props => (
  <div className="results">
    {props.repos.map(({ name, owner, stargazers_count, html_url }) => (
      <ul key={name} className="results__repo">
        <li style={{textTransform:"capitalize", fontWeight:"Bold"}}>name: {name}</li>
        <li>
          <a>{html_url}</a>
        </li>
        <li>Stars: {stargazers_count}</li>
      </ul>
    ))}
  </div>
);


export default Result;