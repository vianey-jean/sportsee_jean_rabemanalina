import { getMainUserData } from './fetch.jsx';
import { getActivitiesUserData } from './fetch.jsx';
import { GetUserAverageSessions } from './fetch.jsx';
import { GetUserPerformances } from './fetch.jsx';

import MainDatasFormater from './apiData/MainDataFormater.jsx';
import ActivitiesDataFormater from './apiData/ActivitiesDataFormater.jsx';
import SessionsDataFormater from './apiData/SessionsDataFormater';
import PerformancesDataFormater from './apiData/PerformancesDataFormater';

/**
 * @param userId - the id of the user
 * @returns An array of objects with user mainDatas
 */

export async function headerUserData(userId) {
  let mainDatas = {};

  mainDatas = await getMainUserData(userId);
  // console.log(mainDatas);
  // return mainDatas;  sans passage dans le MainDataFormater

  const userData = new MainDatasFormater(mainDatas);
  //console.log(userData.keyData.calorieCount);
  return userData;
}

/**
 * @param userId - the id of the user
 * @returns An array of objects with user activities datas
 */

export async function activitiesUserData(userId) {
  let activitiesDatas = {};

  activitiesDatas = await getActivitiesUserData(userId);
  //console.log(activitiesDatas);
  // return activitiesDatas;  sans passage dans le MainDataFormater

  const userActivitiesData = new ActivitiesDataFormater(activitiesDatas);
  // console.log(userActivitiesData); // check the activitiesData Formater in console
  return userActivitiesData;
}

/**
 * @param userId - the id of the user
 * @returns An array of objects with user activities datas
 */

export async function userSessionsTimeData(userId) {
  let sessionsData = {};

  sessionsData = await GetUserAverageSessions(userId);
  //console.log(sessionsData);
  // return sessionsData;  sans passage dans le SessionsDataFormater

  const userAverageSessionsTimeData = new SessionsDataFormater(sessionsData);
  // console.log(userActivitiesData); // check the activitiesData Formater in console
  return userAverageSessionsTimeData;
}

/**
 * @param userId - the id of the user
 * @returns An array of objects with user performances datas
 */

export async function userPerformancesData(userId) {
  let performancesData = {};

  performancesData = await GetUserPerformances(userId);
  //console.log(performancesData);
  // return performancesData;  sans passage dans le PerformancesDataFormater

  const userPerformancesData = new PerformancesDataFormater(performancesData);
  //console.log(userPerformancesData); // check the PerformancesDataFormater in console
  return userPerformancesData;
}
