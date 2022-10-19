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
    const response = await axios.get(`http://localhost:3000/user/${id}`) // getUserdata: se connecte à localhost user avec id selectionné
    return response.data //retour le donné ou
  } catch (error) {  //erreur  
    console.error(error)
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
      `http://localhost:3000/user/${id}/activity` // getactivity: se connecte à localhost user avec id selectionné
    )
    return response.data
  } catch (error) {
    console.error(error)
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
      `http://localhost:3000/user/${id}/average-sessions`  // getaveragessession: se connecte à localhost user avec id selectionné
    )
    return response.data
  } catch (error) {
    console.error(error)
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
      `http://localhost:3000/user/${id}/performance`  // getperform: se connecte à localhost user avec id selectionné
    ) 
    return response.data
  } catch (error) {
    console.error(error)
  }
}
