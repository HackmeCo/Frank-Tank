import $ from './lib/jquery';
import React from 'react';
// moments are highlight clips within a currently playing video

export default class CommentsArea extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      comment: this.props......,
      comments: [];
    }
  }
  
  componentDidMount(){
    
  }

  render(){
    return {
      <div>
        <input class="commentInputs" placeholder="Comment Here!" type="text" />
        <button class="commentSubmitButton">Submit!</button>
        <div class='currentComment'>
         {getComment}
        </div>
      </div>
    }
  }

}





export const Moment = (element, moment, player, userId) => {
  const momentObj = moment;

  const commentWindow = $('<div>').addClass('commentWindow').html(`
    <i class="fa fa-thumbs-up"></i>
    <span class="likeCount">${momentObj.users.length}</span>
    <input class="commentInputs" placeholder="Comment Here!" type="text" />

  `);

  element.append(likeWindow);

  likeWindow.click((e) => {
    $.ajax({
      url: 'http://localhost:8000/likes/update',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        user_id: userId,
        likes_id: momentObj.id,
      }),
    })
    .done((data) => {
      commentWindow.children('.commentWindow').html(data.users.length);
      console.log('comment has been updated/added');
    });
    e.stopPropagation();
  });

  element.click(() => {
    player.seekTo(momentObj.start_time);
  });

  function showCommentWindow(time) {
    if (time > momentObj.start_time && time < momentObj.stop_time) {
      commentWindow.addClass('active');
      return true;
    } else {
      commentWindow.removeClass('active');
      return false;
    }
  }

  return {
    render: element,
    showComment: showCommentWindow,
  };
};

// update like count for a specific moment
export const postComment = (newComment) => {
  return $.ajax({
    url: 'http://localhost:8000/comment/create',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    // dataType: 'application/json',
    data: JSON.stringify(newComment),
  })
  .done(function(data){
    console.log("This comment has been posted to the database: ", data)
  }
};


// update like count for a specific moment
export const getComment = (newComment) => {
  return $.ajax({
    url: 'http://localhost:8000/comment/create',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
    // dataType: 'application/json',
    //data: JSON.stringify(newLike),
  })
  .done(function(data){
    console.log("This comment has been retrieved: ", data)
  }
};
