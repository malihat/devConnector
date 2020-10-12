import { GET_PROFILE, UPDATE_PROFILE, GET_PROFILES } from "../actions/types";
import { PROFILE_ERROR, CLEAR_PROFILE, GET_REPOS } from './../actions/types';

const initialState = {
  profile: null,    //has all profile data, also the profiles we visited
  profiles: [],
  repos: [],
  loading: true,
  error: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_PROFILE:
    case UPDATE_PROFILE:  
      return {
        ...state,
        profile: action.payload,
        loading: false
      }
    case GET_PROFILES:
      return {
        ...state,
        profiles: action.payload,
        loading: false
      }
    case PROFILE_ERROR: 
      return {
        ...state,
        error: action.payload,
        loading: false,
        profile: null
      }
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: [],
        loading: false
      }
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false
      }
    default:
      return state
  }
}