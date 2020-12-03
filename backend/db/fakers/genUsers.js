const faker = require('faker');
const bcrypt = require('bcryptjs');

function createPassword() {
  return bcrypt.hashSync('password');
}

function genUsers() {
  let count = 0;

  const users = [];

  while (count <= 50) {
    const user = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      username: faker.internet.userName(),
      hashedPassword: createPassword(),
      photo: faker.image.imageUrl(),
    };

    users.push(user);

    count++;
  }

  console.log(JSON.stringify(users));
}

genUsers();
