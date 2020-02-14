import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
      <div className="ui container comments">
        <CommentDetail author="Sam" timeAgo="Yesterday at 4:55pm" commentText="That is a good point!"/>
        <CommentDetail author="Alex" timeAgo="Yesterday at 1:25pm" commentText="Wow...lets go!"/>
        <CommentDetail author="John" timeAgo="Today at 8:30am" commentText="Did i read this correctly :)!"/>
        <CommentDetail author="Frank" timeAgo="Today at 9:02am" commentText="Sweeeeet!"/>
        <CommentDetail author="Mary" timeAgo="Today at 1:53pm" commentText="No going back!"/>
        <CommentDetail author="Steph" timeAgo="Today at 4:55pm" commentText="It is true i guess!"/>
      </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));