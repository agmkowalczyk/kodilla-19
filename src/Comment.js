import React from 'react';
import './Comment.css';

const Comment = ({text, votes, id, removeComment, thumbUpComment, thumbDownComment}) =>
  <li>
    <button className="fa fa-remove remove" title="usuń" onClick={() => removeComment(id)}></button>{text} <br/><br/>
    <span className="votes"> {votes} głosów</span> 
    <button className="fa fa-thumbs-o-up" onClick={() => thumbUpComment(id)}></button>
    <button className="fa fa-thumbs-o-down" onClick={() => thumbDownComment(id)}></button>
  </li>;

export default Comment;