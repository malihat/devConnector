import axios from 'axios';
import { GET_POSTS, POST_ERROR, UPDATE_LIKES, 
          DELETE_POST, ADD_POST, GET_POST, ADD_COMMENT, REMOVE_COMMENT } from '../actions/types';
import { setAlert } from './alert';

// Get posts
export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get('/api/post'); 
    dispatch({
      type: GET_POSTS,
      payload: res.data
    })
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status}
    })
  }
}

// Remove Like
export const removeLike = postid => async dispatch => {
  try {
    const res = await axios.put(`/api/post/unlike/${postid}`); 
    dispatch({
      type: UPDATE_LIKES,
      payload: { postid, likes: res.data }
    })
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status}
    })
  }
}

// Add Like
export const addLike = postid => async dispatch => {
  try {
    const res = await axios.put(`/api/post/like/${postid}`); 
    dispatch({
      type: UPDATE_LIKES,
      payload: { postid, likes: res.data }
    })
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status}
    })
  }
}

// Delete Post 
export const deletePost = id => async dispatch => {
  try {
    await axios.delete(`/api/post/${id}`); 
    dispatch({
      type: DELETE_POST,
      payload: id
    })
    dispatch(setAlert('Post Removed', 'success'));
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status}
    })
  }
}

// Add Post 
export const addPost = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await axios.post('/api/post', formData, config); 
    dispatch({
      type: ADD_POST,
      payload: res.data
    })
    dispatch(setAlert('Post Created', 'success'));
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status}
    })
  }
}

// Get post
export const getPost = id => async dispatch => {
  try {
    const res = await axios.get(`/api/post/${id}`); 
    dispatch({
      type: GET_POST,
      payload: res.data
    })
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status}
    })
  }
}

// Add Comment
export const addComment = (postId, formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await axios.post(`/api/post/comment/${postId}`, formData, config); 
    dispatch({
      type: ADD_COMMENT,
      payload: res.data
    })
    dispatch(setAlert('Comment Added', 'success'));
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status}
    })
  }
}

// Delete Comment 
export const deleteComment = (postId, commentId) => async dispatch => {

  try {
    await axios.delete(`/api/post/comment/${postId}/${commentId}`); 
    dispatch({
      type: REMOVE_COMMENT,
      payload: commentId
    })
    dispatch(setAlert('Comment Deleted', 'success'));
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status}
    })
  }
}