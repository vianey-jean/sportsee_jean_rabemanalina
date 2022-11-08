/**
 * @class
 * @classdesc User Activities formater
 */

export default class ActivitiesDataFormater {
  /**
   * assigns the values from an object to the properties of the class.
   * @param {Object} sessions - user sessions datas
   */

  constructor({ sessions, userId }) {
    this.id = userId;
    this.sessions = sessions.map((session, index) => ({
      ...session,
      kilogram: session.kilogram,
      calories: session.calories,
      day: (index + 1).toString(),
    }));
  }
}
