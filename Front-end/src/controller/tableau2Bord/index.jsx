/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ErrorPage from '../errorPage'

import flammeRouge from '../../assets/flammeRouge.svg'
import chicken from '../../assets/PouletBleu.svg'
import apple from '../../assets/pommeJaune.svg'
import burger from '../../assets/cheeseburger.svg'

import getMainDatas from '../../model/dataFormater/mainDataStore'
import getUserActivity from '../../model/dataFormater/userActivityStore'
import getUserAverageSessions from '../../model/dataFormater/userAverageSessionsStore'
import getUserPerformance from '../../model/dataFormater/userPerformanceStore'

import Activity from '../../view/activity'
import AverageSession from '../../view/averageSession'
import Perform from '../../view/perform'
import Score from '../../view/score'
import CardInfo from '../../view/cardInfo'
import Header from '../../view/header'
import Loader from '../../view/loader'

import './_tableau2Bord.scss'

/**
 *Tableau2Bord
 * @returns {ReactElements} different components constituting the Tableau2Bord
 */
const Tableau2Bord = () => {
  let { userId } = useParams()
  console.log(parseInt(userId))

  const [userMainDatas, setUserMainDatas] = useState()
  const [userActivity, setUserActivity] = useState()
  const [userAverageSessions, setUserAverageSessions] = useState()
  const [userPerformance, setUserPerformance] = useState()
  const [loading, setLoading] = useState(true)
  const [goodUrl, setGoodUrl] = useState(true)

  // DATAS PROCESSING
  const loadUserMainDatas = async () => {
    setLoading(true)
    const datas = await getMainDatas(userId)
    datas && setUserMainDatas(datas)
  }

  const loadUserActivity = async () => {
    const datas = await getUserActivity(userId)
    setUserActivity(datas)
  }
  const loadUserAverageSessions = async () => {
    const datas = await getUserAverageSessions(userId)
    setUserAverageSessions(datas)
  }
  const loadUserPerformance = async () => {
    const datas = await getUserPerformance(userId)
    setUserPerformance(datas)
    setLoading(false)
  }

  useEffect(() => {
    loadUserMainDatas()
    loadUserActivity()
    loadUserAverageSessions()
    loadUserPerformance()
  }, [userId])
  console.log(userMainDatas)

  useEffect(() => {
    userMainDatas && console.log(userMainDatas)
    userMainDatas && userMainDatas.id !== ''
      ? setGoodUrl(true)
      : setGoodUrl(false)
  }, [userMainDatas])
  return (
    <div>
    
      {!loading ? (
        <>
          <div className="mainContent">
            {console.log(goodUrl)}
            {goodUrl ? (
              <>
                <Header userName={userMainDatas.userInfos.firstName} />

                <div className="graphsAndDailyContainer">
                  <section className="graphsContainer">
                    <div className="dailyActivity">
                      {userActivity ? (
                        <Activity activity={userActivity} />
                      ) : null}
                    </div>
                    <div className="otherGraph">
                      <div className="averageSessions">
                        <p className="pDescription">
                          Durée moyenne des <br />
                          sessions
                        </p>
                        {userAverageSessions ? (
                          <AverageSession average={userAverageSessions} />
                        ) : null}
                      </div>
                      <div className="performances">
                        {userPerformance ? (
                          <Perform performances={userPerformance} />
                        ) : null}
                      </div>
                      <div className="score">
                        <p className="pScore">Score</p>
                        <div className="radarBarChart">
                          <Score
                            userMainDatas={userMainDatas}
                            className="radar"
                          />
                          <div className="userObjectif">
                            <p className="percent">
                              {' '}
                              {userMainDatas.scores[1].score}%
                            </p>
                            <p>
                              de votre <br />
                              objectif
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <aside className="dailyIntake">
                    <CardInfo
                      icone={flammeRouge}
                      number={userMainDatas.keyData.calorieCount}
                      unit={'kCal'}
                      type={'Calories'}
                    />
                    <CardInfo
                      icone={chicken}
                      number={userMainDatas.keyData.proteinCount}
                      unit={'g'}
                      type={'Protéines'}
                    />
                    <CardInfo
                      icone={apple}
                      number={userMainDatas.keyData.carbohydrateCount}
                      unit={'g'}
                      type={'Glucides'}
                    />
                    <CardInfo
                      icone={burger}
                      number={userMainDatas.keyData.lipidCount}
                      unit={'g'}
                      type={'Lipides'}
                    />
                  </aside>
                </div>
              </>
            ) : (
              <ErrorPage />
            )}
          </div>
        </>
      ) : (
       <Loader />
      )}
    </div>
  )
}

export default Tableau2Bord
