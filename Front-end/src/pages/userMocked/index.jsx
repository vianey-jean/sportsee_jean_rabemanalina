//import react-router-dom, getAPI, userhello, activity, averagesession, perform, score, nutrients et loader

import React from 'react'
import { useParams } from 'react-router-dom'
import UserHello from '../../compenents/userHello'
import Activity from '../../compenents/activity'
import AverageSessions from '../../compenents/averageSessions'
import Perform from '../../compenents/perform'
import Score from '../../compenents/score'
import Nutrients from '../../compenents/nutrients'

import {  //récupère les données
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../../datas/mockedUsersDatas'

/**
 * MOKED USER PAGE
 * @returns {React.ReactElement} JSX.Element - the user main page with mocked data
 */

function UserMocked() {
  const { id } = useParams()
  const idNum = parseInt(id, 10)

  const user = USER_MAIN_DATA.findIndex(function (item) {  //selectionné seulement la valeur de id selectionné
    return idNum === item.id
  })

  const userFirstName = USER_MAIN_DATA[user].userInfos.firstName 
  const userActivity = USER_ACTIVITY[user].sessions
  const userSessionAverage = USER_AVERAGE_SESSIONS[user].sessions
  const userPerform = USER_PERFORMANCE[user].data
  const userScore = USER_MAIN_DATA[user].todayScore || USER_MAIN_DATA[user].score 
  const userKeyData = USER_MAIN_DATA[user].keyData


  return (
    <section className="containerUser">
      <UserHello userFirstName={userFirstName} /> {/**prénom */}
      <Activity userActivity = {userActivity} />  {/**activity */}
      <AverageSessions userSessionAverage={userSessionAverage} />  {/**sessions */}
      <Perform userPerform={userPerform} />  {/**perform */}
      <Score userScore={userScore} />  {/**score */}
      <Nutrients userKeyData={userKeyData} />  {/**keydata */}
    </section>
  )
}

export default UserMocked
