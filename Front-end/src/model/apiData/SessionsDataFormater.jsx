/**
 * @class
 * @classdesc User average sessions datas formater
 */
export default class UserSessionsFormater {
  /**
   * The function takes in an object, and then assigns the values of the object to the properties of
   * the class.
   * @param {Object} userId - user id
   * @param {Object} sessions - user sessions datas
   */

  constructor({ sessions, userId }) {
    this.id = userId;
    this.sessions = this.SessionDay(sessions.day);
    this.sessionsData = sessions.map((session, index) => ({
      ...session,
      sessionLength: session.sessionLength,
      day: this.sessions[index],
    }));
  }

  SessionDay() {
    const formatDay = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    return formatDay;
  }
}
