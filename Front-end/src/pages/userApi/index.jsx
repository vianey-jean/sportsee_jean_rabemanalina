//import react-router-dom, getAPI, userhello, activity, averagesession, perform, score, nutrients et loader

import { useParams } from 'react-router-dom'
import { GetDatas } from '../services/getApi'
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

  const {  //recevoir les valeur vient de donné avec id selectionné
    userData,
    userActivity,
    userAverageSession,
    userPerformance,
    userDataLoading,
    userActivityLoading,
    userAverageSessionLoading,
    userPerformanceLoading,
  } = GetDatas(id)

  return (
    <section className="containerUser">
      {userDataLoading ? (  //chargement, et lancement loader puis rester la si pas connecté à API
        <div className="userHello">
          <p>Chargement du prénom...</p>
          <Loader />
        </div>
      ) : userData.firstName === undefined ? (
        <div className="userHello">
          <p>Name no available</p>
        </div>
      ) : (
        <UserHello userFirstName={userData.firstName} />  //si c'est connecter à API, montre la valeur
      )}

      {userActivityLoading ? ( //chargement, et lancement loader puis rester la si pas connecté à API
        <div className="dailyActivity">
          <p>Chargement du rapport d'activité quotidienne...</p>
          <Loader />
        </div>
      ) : userActivity === undefined ? (
        <div className="dailyActivity">
          <p>Activity no available</p>
        </div>
      ) : (
        <Activity userActivity={userActivity} />  //si c'est connecter à API, montre la valeur
      )}

      {userAverageSessionLoading || userAverageSession === undefined ? ( //chargement, et lancement loader puis rester la si pas connecté à API
        <div className="averageSessions">
          <p>Chargement des durées moyennes de sessions...</p>
          <Loader />
        </div>
      ) : userAverageSession === undefined ? (
        <div className="averageSessions">
          <p>Average sessions no available</p>
        </div>
      ) : (
        <AverageSessions userSessionAverage={userAverageSession} />  //si c'est connecter à API, montre la valeur
      )}

      {userDataLoading || userData.userScore === undefined ? ( //chargement, et lancement loader puis rester la si pas connecté à API
        <div className="score">
          <p>Chargement du score...</p>
          <Loader />
        </div>
      ) : userData.userScore === undefined ? (
        <div className="score">
          <p>Score no available</p>
        </div>
      ) : (
        <Score userScore={userData.userScore} />  //si c'est connecter à API, montre la valeur
      )}

      {userDataLoading || userData.userKey === undefined ? (  //chargement, et lancement loader puis rester la si pas connecté à API
        <div className="nutrient">
          <p>Chargement des donnés d'alimentation...</p>
          <Loader />
        </div>
      ) : userData.userKey === undefined ? (
        <div className="nutrient">
          <p>Nutrients no available</p>
        </div>
      ) : (
        <Nutrients userKeyData={userData.userKey} />  //si c'est connecter à API, montre la valeur
      )}

      {userPerformanceLoading || userPerformance === undefined ? (  //chargement, et lancement loader puis rester la si pas connecté à API
        <div className="perform">
          <p>Chargement des données de performances...</p>
          <Loader />
        </div>
      ) : userPerformance === undefined ? (
        <div className="perform">
          <p>Performances no available</p>
        </div>
      ) : (
        <Perform userPerform={userPerformance} />  //si c'est connecter à API, montre la valeur
      )}
    </section>
  )
}

export default User
