import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
      <div className="ui container comments">
        <CommentDetail author="Sam" />
        <CommentDetail author="Alex"/>
        <CommentDetail author="John"/>
        <CommentDetail author="Frank"/>
        <CommentDetail author="Mary"/>
        <CommentDetail author="Steph"/>
      </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));