//import react-router-dom, getAPI, userhello, activity, averagesession, perform, score, nutrients et loader

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getUserData,
  getActivity,
  getAverageSession,
  getPerformance, } from '../../services/serviceApi'
  import {  //récupère les données
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE
   
  } from '../../datas/mockedUsersDatas'
import UserHello from '../../compenents/userHello'
import Activity from '../../compenents/activity'
import AverageSessions from '../../compenents/averageSessions'
import Perform from '../../compenents/perform'
import Score from '../../compenents/score'
import Nutrients from '../../compenents/nutrients'
import Loader from '../../compenents/loader'


/**
 * Function that returns the user page
 * @returns {React.ReactElement} JSX.Element - the user main page with API data
 */

function User() {
  const { id } = useParams()
  const idNum = parseInt(id, 10)

  const [userData, setUserData] = useState([])
  const [userActivity, setUserActivity] = useState([])
  const [userAverageSession, setUserAverageSession] = useState([])
  const [userPerformance, setUserPerformance] = useState([])

  const [userDataLoading, setUserDataLoading] = useState(true)
  const [userActivityLoading, setUserActivityLoading] = useState(true)
  const [userAverageSessionLoading, setUserAverageSessionLoading] = useState(true)
  const [userPerformanceLoading, setUserPerformanceLoading] = useState(true)

  useEffect(() => {
    getUserData({ id }).then((data) => {  //on utilise les donné de id selectionné
      setUserData({
        firstName: data.userInfos.firstName, //prénom
        userKey: data.keyData, //keydata
        userScore: data.todayScore || data.score,  //todayscore ou score
      })
      setUserDataLoading(false)
    })
    getActivity({ id }).then((data) => {  //donné activity
      setUserActivity(data)
      setUserActivityLoading(false)
    })
    getAverageSession({ id }).then((data) => {  //donné du averagesession
      setUserAverageSession(data)
      setUserAverageSessionLoading(false)
    })
    getPerformance({ id }).then((data) => {  //donné perform
      setUserPerformance(data.data)
      setUserPerformanceLoading(false)
    })
  }, [id])

  const userMoked = USER_MAIN_DATA.findIndex(function (item) {  //selectionné seulement la valeur de id selectionné
    return idNum === item.id
  })



  const userMokedFirstName = USER_MAIN_DATA[userMoked].userInfos.firstName 
  const userMokedActivity = USER_ACTIVITY[userMoked].sessions
 
  const userMokedSessionAverage = USER_AVERAGE_SESSIONS[userMoked].sessions
  const userMokedPerform = USER_PERFORMANCE[userMoked].data
  console.log(userMokedPerform)
  const userScore1 = USER_MAIN_DATA[userMoked].todayScore || USER_MAIN_DATA[userMoked].score 
  const userMokedKeyData = USER_MAIN_DATA[userMoked].keyData
  
 

  

  return (
    <section className="containerUser">
      {userDataLoading === undefined? (  //chargement, et lancement loader puis rester la si pas connecté à API
        <div className="userHello">
          <p>Chargement du prénom...</p>
          <Loader />
        </div>
      ) : userData.firstName === undefined ? (
      
          <UserHello userFirstName={userMokedFirstName} />
      
      ) : (
        <UserHello userFirstName={userData.firstName } /> 
        //si c'est connecter à API, montre la valeur
       
      )}

      {userActivityLoading === undefined ? ( //chargement, et lancement loader puis rester la si pas connecté à API
        <div className="dailyActivity">
          <p>Chargement du rapport d'activité quotidienne...</p>
          <Loader />
        </div>
      ) : userActivity === undefined ? (
          <Activity userActivity={userMokedActivity} /> 
         
      ) : (
        <Activity userActivity={userActivity} />  //si c'est connecter à API, montre la valeur
      )}

      {userAverageSessionLoading === undefined ? ( //chargement, et lancement loader puis rester la si pas connecté à API
        <div className="averageSessions">
          <p>Chargement des durées moyennes de sessions...</p>
          <Loader />
        </div>
      ) : userAverageSession === undefined ? (
        < div className="averageSessions">
          <AverageSessions userSessionAverage={userMokedSessionAverage} /> 
          </div>
      ) : (
        <AverageSessions userSessionAverage={userAverageSession} />  //si c'est connecter à API, montre la valeur
      )}





      {userPerformanceLoading  === undefined ? (  //chargement, et lancement loader puis rester la si pas connecté à API
        <>
          <p>Chargement des données de performances...</p>
          <Loader />
        </>
      ) : userPerformance === undefined ? (
        
        <Perform userPerform={userMokedPerform} />
       
      ) : (
        <Perform userPerform={userPerformance} />  //si c'est connecter à API, montre la valeur
      )}

      {userDataLoading  === undefined ? ( //chargement, et lancement loader puis rester la si pas connecté à API
        <div className="score">
          <p>Chargement du score...</p>
          <Loader />
        </div>
      ) : userData.userScore === undefined ? (
       
          <Score userScore={userScore1} />
       
      ) : (
        <Score userScore={userData.userScore} />  //si c'est connecter à API, montre la valeur
      )}

      {userDataLoading === undefined ? (  //chargement, et lancement loader puis rester la si pas connecté à API
        <div className="nutrient">
          <p>Chargement des donnés d'alimentation...</p>
          <Loader />
        </div>
      ) : userData.userKey === undefined ? (
        
           <Nutrients userKeyData={userMokedKeyData} />
        
      ) : (
        <Nutrients userKeyData={userData.userKey} />  //si c'est connecter à API, montre la valeur
      )}

      
    </section>
     
  )
  
}

export default User
