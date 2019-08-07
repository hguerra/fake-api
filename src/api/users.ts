import faker from 'faker';

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
}

export const users: User[] = [];

for (let id = 0; id < 50; id++) {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();

  users.push({
    id,
    email,
    firstName,
    lastName
  } as User);
}
