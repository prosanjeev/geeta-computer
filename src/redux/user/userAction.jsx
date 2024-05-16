// coursesActions.js
import { collection, getDocs } from 'firebase/firestore';
import { fireDB } from '../../firebase/FirebaseConfig';
import { setGetAllUser } from './userSlice';

export const getAllUserFunction  = () => async dispatch => {
    try {
      const userCollection = collection(fireDB, 'user');
      const querySnapshot = await getDocs(userCollection);
      const users = [];
      querySnapshot.forEach(doc => {
        users.push({ id: doc.id, ...doc.data() });
      });
      dispatch(setGetAllUser(users));
    } catch (error) {
      console.error('Error fetching users: ', error);
    }
  };