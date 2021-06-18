import axios from 'axios';

import {
  CONTACT_ERROR,
  CONTACT_REQUEST,
  CONTACT_SUCCESS,
} from '../constants/contact';

// contact action
export const contact = (options) => async (dispatch) => {
  try {
    dispatch({
      type: CONTACT_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    await axios.post('/api/v1/contact', options, config);

    dispatch({
      type: CONTACT_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: CONTACT_ERROR,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};
