//import hooks de react (useState, useEffect)
// import vient serviceAPI

import { useState, useEffect } from 'react'
import {
  getUserData,
  getActivity,
  getAverageSession,
  getPerformance,
} from './serviceApi'


export function GetDatas(id) { //mettre en tableau les valeur recu
  const [userData, setUserData] = useState([])
  const [userActivity, setUserActivity] = useState([])
  const [userAverageSession, setUserAverageSession] = useState([])
  const [userPerformance, setUserPerformance] = useState([])
  const [userDataLoading, setUserDataLoading] = useState(true)
  const [userActivityLoading, setUserActivityLoading] = useState(true)
  const [userAverageSessionLoading, setUserAverageSessionLoading] =
    useState(true)
  const [userPerformanceLoading, setUserPerformanceLoading] = useState(true)

  useEffect(() => {
    getUserData({ id }).then((data) => {  //on utilise les donné de id selectionné
      setUserData({
        firstName: data.data.userInfos.firstName, //prénom
        userKey: data.data.keyData, //keydata
        userScore: data.data.todayScore || data.data.score,  //todayscore ou score
      })
      setUserDataLoading(false)
    })
    getActivity({ id }).then((data) => {  //donné activity
      setUserActivity(data.data.sessions)
      setUserActivityLoading(false)
    })
    getAverageSession({ id }).then((data) => {  //donné du averagesession
      setUserAverageSession(data.data.sessions)
      setUserAverageSessionLoading(false)
    })
    getPerformance({ id }).then((data) => {  //donné perform
      setUserPerformance(data.data.data)
      setUserPerformanceLoading(false)
    })
  }, [id])

  return {
    userData,
    userActivity,
    userAverageSession,
    userPerformance,

    userDataLoading,
    userActivityLoading,
    userAverageSessionLoading,
    userPerformanceLoading,
  }
}
