interface IUser {
  id: string;
  email: string;
  username: string;
  password: string;
}

// abcdef123123: $2a$12$dmbdQq8sLcQOyDeZ.ey/ieZ.vxqxmc830383p68nbUycgGrRfP24e
let users = [
  {
    id: '1',
    email: 'temp123@naver.com',
    username: 'yongyong',
    password: '$2a$12$dmbdQq8sLcQOyDeZ.ey/ieZ.vxqxmc830383p68nbUycgGrRfP24e',
  },
];

export async function findByEmail(email: string): Promise<IUser | undefined> {
  return users.find((user) => user.email === email);
}

export async function findByUsername(
  username: string
): Promise<IUser | undefined> {
  return users.find((user) => user.username === username);
}

export async function findById(id: string): Promise<IUser | undefined> {
  return users.find((user) => user.id === id);
}

export async function createUser(user: {
  email: string;
  username: string;
  password: string;
}): Promise<string> {
  const created = { ...user, id: Date.now().toString() };
  users.push(created);
  return created.id;
}
