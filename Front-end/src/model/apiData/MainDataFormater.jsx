/**
 * @class
 * @classdesc User mainDatas formater
 */

export default class MainDatasFormater {
   /**
     * The function takes in an object, and then assigns the values of the object to the properties of
     * the class.
     * @param {Object} userId - user id
     * @param {Object} sessions - user sessions datas
     */
  constructor(data) {
    this.id = data.id;
    this.userFirstname = data.userInfos.firstName;
    this.keyData = data.keyData;
    this.todayScore = data.todayScore || data.score;
    this.score = this.formatScore(this.todayScore);
  }

  formatScore() {
    return [{ value: this.todayScore * 100 }];
  }
}
