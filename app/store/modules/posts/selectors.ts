import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'app/types/store/rootState';
import { initialState } from './state';
import moment from 'moment';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.posts || initialState;

export const todayDate = moment(new Date()).format('DD.MM.YYYY');

export const yesterdayDate = moment(new Date())
  .add(-1, 'days')
  .format('DD.MM.YYYY');

export const getPostsDataToday = createSelector([selectDomain], profileState =>
  profileState.data?.filter(function (el) {
    if (String(el.createdAt.date) === todayDate) {
      return el;
    } else {
      return false;
    }
  }),
);
export const getPostsDataYesterday = createSelector(
  [selectDomain],
  profileState =>
    profileState.data?.filter(function (el) {
      if (String(el.createdAt.date) === yesterdayDate) {
        return el;
      } else {
        return false;
      }
    }),
);
export const getPostsDataOther = createSelector([selectDomain], profileState =>
  profileState.data?.filter(function (el) {
    if (
      String(el.createdAt.date) !== todayDate &&
      String(el.createdAt.date) !== yesterdayDate
    ) {
      return el;
    } else {
      return false;
    }
  }),
);

export const selectIsLoading = createSelector(
  [selectDomain],
  profileState => profileState.fetch.loading,
);
export const selectIsAdd = createSelector(
  [selectDomain],
  profileState => profileState.fetch.add,
);
export const selectIsUpdate = createSelector(
  [selectDomain],
  profileState => profileState.fetch.update,
);

export const selectDone = createSelector(
  [selectDomain],
  profileState => profileState.fetch.done,
);

export const selectError = createSelector(
  [selectDomain],
  profileState => profileState.fetch.error,
);
