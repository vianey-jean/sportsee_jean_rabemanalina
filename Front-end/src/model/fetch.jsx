/**
 * It fetches data from a server and returns it
 * @param {Number} id - The id of the current user
 * @returns {Promise}
 */

const mock = process.env.REACT_APP_DEVELOPMENT;

export const getMainUserData = async (userId) => {
  let url = `${process.env.REACT_APP_API_URL}+${userId}`;

  try {
    if (mock) {
      url = `/data/${userId}.json`;
    }
    const response = await fetch(url);
   
    const mainUserData = await response.json();
    

    return mainUserData.data;
  } catch (error) {
    //console.log("sorry there's an error :", error);
  }
};

/**
 * It fetches data from a node server / or mockedData if true / and returns activities datas
 * @param {Number} id - The id of the current user
 * @returns {Promise}
 */

export const getActivitiesUserData = async (userId) => {
  let url = `${process.env.REACT_APP_API_URL}+${userId}/activity`;

  try {
    if (mock) {
      url = `/data/${userId}/activity.json`;
    }
    const response = await fetch(url);
    // console.log(response);
    const userActivitiesData = await response.json();
    // console.log(userActivitiesData);
    // console.log(userActivitiesData.data);
    return userActivitiesData.data;
  } catch (error) {
    //console.log("sorry there's an error :", error);
  }
};

/**
 * It fetches data from a url and returns the average session datas.
 * @param {Number} userId - The id of the user
 * @returns {Promise}
 */
export const GetUserAverageSessions = async (userId) => {
  let url = `${process.env.REACT_APP_API_URL}+${userId}/average-sessions`;

  try {
    if (mock) {
      url = `/data/${userId}/averageSession.json`;
    }
    const response = await fetch(url);
    const averageSessionsTimeData = await response.json();
    // console.log(averageSessionsTimeData.data);
    return averageSessionsTimeData.data;
  } catch (error) {
    //console.log("sorry there's an error :", error);
  }
};

/**
 * It fetches data from a url and returns the average session datas.
 * @param {Number} userId - The id of the user
 * @returns {Promise}
 */
export const GetUserPerformances = async (userId) => {
  let url = `${process.env.REACT_APP_API_URL}+${userId}/performance`;

  try {
    if (mock) {
      url = `/data/${userId}/performance.json`;
    }
    const response = await fetch(url);
    const performancesData = await response.json();
    //console.log(performancesData.data);
    return performancesData.data;
  } catch (error) {
    //console.log("sorry there's an error :", error);
  }
};

/**
 * It fetches data from a url and returns the average session datas.
 * @param {Number} userId - The id of the user
 * @returns {Promise}
 */
export const GetUserScores = async (userId) => {
  let url = `${process.env.REACT_APP_API_URL}+${userId}/performance`;

  try {
    if (mock) {
      url = `/data/${userId}/performance.json`;
    }
    const response = await fetch(url);
    const performancesData = await response.json();
    //.log(performancesData.data);
    return performancesData.data;
  } catch (error) {
    //console.log("sorry there's an error :", error);
  }
};
