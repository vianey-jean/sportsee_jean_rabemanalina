import React from 'react'
import { useParams } from 'react-router-dom'
import UserHello from '../../compenents/userHello'
import Activity from '../../compenents/activity'
import AverageSessions from '../../compenents/averageSessions'
import Perform from '../../compenents/perform'
import Score from '../../compenents/score'
import Nutrients from '../../compenents/nutrients'

import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../../datas/mockedUsersDatas'


function UserMocked() {
  const { id } = useParams()
  const idNum = parseInt(id, 10)

  const user = USER_MAIN_DATA.findIndex(function (item) {
    return idNum === item.id
  })

  const userPrenom = USER_MAIN_DATA[user].userInfos.firstName
  const userActivity = USER_ACTIVITY[user].sessions
  const userSessionAverage = USER_AVERAGE_SESSIONS[user].sessions
  const userPerform = USER_PERFORMANCE[user].data
  const userScore = USER_MAIN_DATA[user].todayScore || USER_MAIN_DATA[user].score 
  const userKeyData = USER_MAIN_DATA[user].keyData


  return (
    <section className="containerUser">
      <UserHello userFirstName={userPrenom} />
      <Activity userActivity = {userActivity} />
      <AverageSessions userSessionAverage={userSessionAverage} />
      <Perform userPerform={userPerform} />
      <Score userScore={userScore} />
      <Nutrients userKeyData={userKeyData} />
    </section>
  )
}

export default UserMocked
