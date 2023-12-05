import { getUser, createUser } from '../models/User';

const getUserController = async () => {
  try {
    const user = await getUser();
    return user;
  } catch (error) {
    console.error(error);
  }
};

const createUserController = async (
  username: string,
  password: string,
  dob: string,
) => {
  try {
    const user = await createUser(username, password, dob);
    return user;
  } catch (error) {
    console.error(error);
  }
};

export { getUserController, createUserController };
