import axios from 'axios'  //import axios

/**
 * get USER_MAIN_DATA from API
 * @param {Number} id
 * @returns Object
 */

/**
 * utilisation axion avec get pour demande vers la base  et attentre le retour 
 */


export async function getUserData({ id }) {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL} +${id}`) // getUserdata: se connecte à localhost user avec id selectionné
    console.log(response.data.data)
    return response.data.data //retour le donné ou
  } catch (error) {  //erreur  
    console.log('=====error=====', error)
  }
}

/**
 * get USER_ACTIVITY from API
 * @param {Number} id
 * @returns Object
 */


export async function getActivity({ id }) {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL} +${id}/activity` // getactivity: se connecte à localhost user avec id selectionné
    )
    console.log(response.data.data.sessions)
    return response.data.data.sessions
    
  } catch (error) {
    console.log('=====error=====', error)
  }
}

/**
 * get USER_AVERAGE_SESSIONS from API
 * @param {Number} id
 * @returns Object
 */

export async function getAverageSession({ id }) {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL} +${id}/average-sessions`  // getaveragessession: se connecte à localhost user avec id selectionné
    )
    console.log(response.data.data.sessions)
    return response.data.data.sessions
  } catch (error) {
    console.log('=====error=====', error)
  }
}

/**
 * get USER_PERFORMANCE from API
 * @param {Number} id
 * @returns Object
 */

export async function getPerformance({ id }) {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL} +${id}/performance`  // getperform: se connecte à localhost user avec id selectionné
    ) 
    console.log(response.data.data)
    return response.data.data
  } catch (error) {
    console.log('=====error=====', error)
  }
}
