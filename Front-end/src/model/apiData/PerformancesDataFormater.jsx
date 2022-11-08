/**
 * @class
 * @classdesc User performances  datas formater
 */
export default class PerformancesDataFormater {
  /**
   * The function takes in an object, and then assigns the values of the object to the properties of
   * the class.
   * @param {Object} kind - user kind of performance datas
   * @param {Object} performances - performances datas
   */

  constructor(performances, kind) {
    this.id = performances.userId;
    this.kindOfPerform = this.KindOfPerformance(kind);
    this.formatPerformData = performances.data.map((performance, kind) => ({
      ...performance,
      kind: this.kindOfPerform[kind],
      value: performance.value,
    }));
    this.performData = this.formatPerformData.reverse();
  }

  KindOfPerformance() {
    const formatPerform = [
      'Cardio',
      'Energie',
      'Endurance',
      'Force',
      'Vitesse',
      'Intensité',
    ];
    return formatPerform;
  }
}
