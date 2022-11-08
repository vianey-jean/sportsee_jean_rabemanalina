/**
 * @class
 * @classdesc User mainDatas formater
 */

export default class MainDatasFormater {
  /**
   * assigns the values from an object to the properties of the class.
   * @param {Object} datas - users mainDatas
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
