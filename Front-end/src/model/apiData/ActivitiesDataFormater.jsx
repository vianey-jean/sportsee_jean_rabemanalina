/**
 * @class
 * @classdesc Main user datas formater
 */
export default class ActivitiesDataFormater {
   /**
     * The function takes in an object, and then assigns the values of the object to the properties of
     * the class.
     * @param {Object} data - main user datas
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
