import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const removeUser = createAsyncThunk('users/remove', async (user) => {
  // const response =

  await axios.delete(`http://localhost:3005/users/${user.id}`);

  // return response.data;
  // Looks like response payload in my case contatins the userID so it worked correctly anyway
  // But this might be a case on other projects or lib versions
  // so in this case we are passing user as it will be then referenced in action
  return user;
});

export { removeUser };
