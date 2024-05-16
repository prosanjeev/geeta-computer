// coursesActions.js
import { collection, getDocs } from 'firebase/firestore';
import { fireDB } from '../../firebase/FirebaseConfig';
import { setOrders } from './orderSlice';

export const fetchOrders = () => async dispatch => {
    try {
      const orderCollection = collection(fireDB, 'order');
      const querySnapshot = await getDocs(orderCollection);
      const orders = [];
      querySnapshot.forEach(doc => {
        orders.push({ id: doc.id, ...doc.data() });
      });
      dispatch(setOrders(orders));
    } catch (error) {
      console.error('Error fetching orders: ', error);
    }
  };