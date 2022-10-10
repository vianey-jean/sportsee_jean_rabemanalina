import axios from 'axios'



export async function getUserData({ id }) {
  try {
    const response = await axios.get(`http://localhost:3000/user/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}


export async function getActivity({ id }) {
  try {
    const response = await axios.get(
      `http://localhost:3000/user/${id}/activity`
    )
    return response.data
  } catch (error) {
    console.error(error)
  }
}


export async function getAverageSession({ id }) {
  try {
    const response = await axios.get(
      `http://localhost:3000/user/${id}/average-sessions`
    )
    return response.data
  } catch (error) {
    console.error(error)
  }
}


export async function getPerformance({ id }) {
  try {
    const response = await axios.get(
      `http://localhost:3000/user/${id}/performance`
    )
    return response.data
  } catch (error) {
    console.error(error)
  }
}
