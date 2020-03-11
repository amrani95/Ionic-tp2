export default class User {
  id: string;
  lastname: string;
  firstname: string;
  email: string;
  mdp: string;

  constructor(id: string , lastname: string, firstname: string, email: string) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
  }
}
