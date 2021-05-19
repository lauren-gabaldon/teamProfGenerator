const Employee = require("./Employee");
class Engineer extends Employee {
  constructor(name, id, email, userName) {
    super(name, id, email);
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
