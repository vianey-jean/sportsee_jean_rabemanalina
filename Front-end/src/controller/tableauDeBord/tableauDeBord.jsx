import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MacronutrientCard from '../../view/cardInfo/cardInfo';
import DailyActivity from '../../view/activity/activity';
import Performances from '../../view/perform/perform';
import ScoreChart from '../../view/score/score';

import { headerUserData } from '../../model/providers';
import { activitiesUserData } from '../../model/providers';
import { userSessionsTimeData } from '../../model/providers';
import { userPerformancesData } from '../../model/providers';

import Loader from '../../view/loader/loader'
import caloriesIcon from '../../assets/flammeRouge.svg';
import carbsIcon from '../../assets/pommeJaune.svg';
import fatIcon from '../../assets/cheeseburger.svg';
import proteinIcon from '../../assets/PouletBleu.svg';


import './_tableauDeBord.scss';
import AverageSessionTime from '../../view/averageSession/averageSession';

/**
 * TableauDeBord
 * Function that returns the user page
 * @returns {React.ReactElement} JSX.Element - the user main page with API data
 */

const Dashboard = () => {
  const { userId } = useParams();
  // console.log(userId);

  const [datas, setDatas] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const userDatas = await headerUserData(userId);
        const userActivitiesDatas = await activitiesUserData(userId);
        const userSessionsDatas = await userSessionsTimeData(userId);
        const userPerformanceData = await userPerformancesData(userId);
        setDatas({
          userDatas,
          userActivitiesDatas,
          userSessionsDatas,
          userPerformanceData,
        });
        setIsLoading(false);
      } catch (error) {
        //console.log("sorry, there's an error :", error);
        window.location = '/error';
      }
    })();
  }, [userId]);

  return (
    <>
      <div className='dashboard'>
        {!isLoading ? (
          <>
            <div className='dashboardHeader'>
              <h1>
                Bonjour{' '}
                <span className='dashboardHeader__username'>
                  {' '}
                  {datas.userDatas.userFirstname}
                </span>
              </h1>
              <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className='dashboardContent'>
              <div className="graphsContainer">
                <DailyActivity
                  activityValues={datas.userActivitiesDatas.sessions}
                />
                <div className='charts'>
                  <AverageSessionTime
                    sessions={datas.userSessionsDatas.sessionsData}
                  />
                  <Performances
                    performance={datas.userPerformanceData.performData}
                  />
                  <ScoreChart score={datas.userDatas.score[0].value} />
                </div>
              </div>
              <div className='dailyIntake'>
                <MacronutrientCard
                  icon={caloriesIcon}
                  data={datas.userDatas.keyData.calorieCount}
                  unit='Kcal'
                  text='Calories'
                />
                <MacronutrientCard
                  icon={proteinIcon}
                  data={datas.userDatas.keyData.proteinCount}
                  unit='g'
                  text='Protéines'
                />
                <MacronutrientCard
                  icon={carbsIcon}
                  data={datas.userDatas.keyData.lipidCount}
                  unit='g'
                  text='Glucides'
                />
                <MacronutrientCard
                  icon={fatIcon}
                  data={datas.userDatas.keyData.carbohydrateCount}
                  unit='g'
                  text='Lipides'
                />
              </div>
            </div>
          </>
        ): (
          <Loader />
         )}
      </div>
    </>
  );
};

export default Dashboard;
