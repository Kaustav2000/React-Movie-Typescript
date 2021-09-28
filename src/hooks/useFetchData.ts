import React, { useReducer } from "react";
import {
  freeToWatchData,
  popularStreamingData,
  trendingData,
} from "../api/fetchHomepagedata";

interface IState {
  popular: any[];
  free: any[];
  trending: any[];
  loading: boolean;
}

let initialState: IState = {
  popular: [],
  free: [],
  trending: [],
  loading: false,
};

let ACTIONS = {
  MAKE_REQUEST: "make_request",
  POPULAR_DATA: "popular_data",
  FREE_DATA: "free_data",
  TRENDING: "trending",
  ERROR: "error",
};

function reducer(state: IState, action: any): IState {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { ...state, loading: true };
    case ACTIONS.POPULAR_DATA:
      return { ...state, loading: false, popular: action.payload };
    case ACTIONS.FREE_DATA:
      return { ...state, loading: false, free: action.payload };
    case ACTIONS.TRENDING:
      return { ...state, loading: false, trending: action.payload };
    case ACTIONS.ERROR:
      return { ...state, loading: false, popular: [], free: [], trending: [] };
    default:
      return state;
  }
}

export const useFetchData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setPopular = async (item: string) => {
    let data = await popularStreamingData(item);
    dispatch({ type: ACTIONS.POPULAR_DATA, payload: data });
  };

  const setFree = async (item: string) => {
    let data = await freeToWatchData(item);
    dispatch({ type: ACTIONS.FREE_DATA, payload: data });
  };

  const setTrending = async (item: string) => {
    let data = await trendingData(item);
    dispatch({ type: ACTIONS.TRENDING, payload: data });
  };

  return {
    state,
    setPopular,
    setFree,
    setTrending,
  };
};
