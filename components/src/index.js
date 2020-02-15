import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {

    return (

      <div className="ui container comments">
        <ApprovalCard>
            <CommentDetail 
                author="Sam" 
                timeAgo="Yesterday at 4:55pm" 
                commentText="That is a good point!"
                avatar={faker.image.avatar()}
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
                author="Alex" 
                timeAgo="Yesterday at 1:25pm" 
                commentText="Wow...lets go!"
                avatar={faker.image.avatar()}
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
                author="John" 
                timeAgo="Today at 8:30am" 
                commentText="Did i read this correctly :)!"
                avatar={faker.image.avatar()}
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
                author="Frank" 
                timeAgo="Today at 9:02am" 
                commentText="Sweeeeet!"
                avatar={faker.image.avatar()}
            />
        </ApprovalCard>
        <ApprovalCard>
             <CommentDetail 
                author="Steph" 
                timeAgo="Today at 4:55pm" 
                commentText="It is true i guess!"
                avatar={faker.image.avatar()}
            />
        </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));