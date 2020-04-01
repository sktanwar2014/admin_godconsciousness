import axios from 'axios';
import * as c from './config/Constants';
import checkError from './config/HttpClient';
import {authHeader} from './config/AuthHeader.js';

const PARAMS = ({ methodType = 'GET' }) => ({
  method: methodType, 
  headers: authHeader(),
});




export default {
  getEvents: async ({...payload }) => {
    const URL = `${c.API_CONSUMER}/api/getEvents`;
    // console.log(URL, Object.assign({}, PARAMS({ methodType: 'GET' }), { data: payload }))
    try {      
        const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'GET' }), { data: payload }),);
      return data;
    } catch (error) {
      throw error;
    }
  },
  updateEvent:async ({...payload }) => {
    // console.log(payload)
    const URL = `${c.API_CONSUMER}/api/updateEvent`;
    try {
      const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'POST' }), {
        data: payload,
      }),
    );
      return data;
    } catch (error) {
      checkError(error);
      throw error;
    }
  },

  handleEventActiveDeactive:async ({...payload }) => {
    // console.log(payload)
    const URL = `${c.API_CONSUMER}/api/handleEventActiveDeactive`;
    try {
      const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'POST' }), {
        data: payload,
      }),
    );
      return data;
    } catch (error) {
      checkError(error);
      throw error;
    }
  },

   insertEvent: async ({...payload}) => {
     const URL =`${c.API_CONSUMER}/api/insertEvent`;
     try {
      const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'POST' }), {
        data: payload,
      }),
    );
      return data;
    } catch (error) {
      checkError(error);
      throw error;
    }

   },
 

  getmiracles: async ({...payload }) => {
    const URL = `${c.API_CONSUMER}/api/getmiracles`;
    console.log(URL, Object.assign({}, PARAMS({ methodType: 'GET' }), { data: payload }))
    try {      
        const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'GET' }), { data: payload }),);
      return data;
    } catch (error) {
      throw error;
    }
  },
  updateMiracle:async ({...payload }) => {
    // console.log(payload)
    const URL = `${c.API_CONSUMER}/api/updateMiracle`;
    try {
      const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'POST' }), {
        data: payload,
      }),
    );
      return data;
    } catch (error) {
      checkError(error);
      throw error;
    }
  },
 


  getPrayers: async ({...payload }) => {
    const URL = `${c.API_CONSUMER}/api/getPrayers`;
    // console.log(URL, Object.assign({}, PARAMS({ methodType: 'GET' }), { data: payload }))
    try {      
        const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'GET' }), { data: payload }),);
      return data;
    } catch (error) {
      throw error;
    }
  },

  updatePrayer: async ({...payload}) => {
    const URL = `${c.API_CONSUMER}/api/updatePrayer`;
    try {
      const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'POST' }), {
        data: payload,
      }),
    );
    return data;
  } catch (error) {
    checkError(error);
    throw error;
  }
  },
  getdirection: async ({...payload }) => {
    const URL = `${c.API_CONSUMER}/api/getdirection`;
    console.log(URL, Object.assign({}, PARAMS({ methodType: 'GET' }), { data: payload }))
    try {      
        const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'GET' }), { data: payload }),);
      return data;
    } catch (error) {
      throw error;
    }
  },

  updateDirection: async ({...payload}) => {
    const URL = `${c.API_CONSUMER}/api/updateDirection`;
    try {
      const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'POST' }), {
        data: payload,
      }),
    );
    return data;
  } catch (error) {
    checkError(error);
    throw error;
  }
  },


  getobes: async ({...payload }) => {
    const URL = `${c.API_CONSUMER}/api/getobes`;
    console.log(URL, Object.assign({}, PARAMS({ methodType: 'GET' }), { data: payload }))
    try {      
        const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'GET' }), { data: payload }),);
      return data;
    } catch (error) {
      throw error;
    }
  },
  updateObe: async ({...payload}) => {
    const URL = `${c.API_CONSUMER}/api/updateObe`;
    try {
      const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'POST' }), {
        data: payload,
      }),
    );
    return data;
  } catch (error) {
    checkError(error);
    throw error;
  }
  },

  

  getcontact: async ({...payload }) => {
    const URL = `${c.API_CONSUMER}/api/getcontact`;
    console.log(URL, Object.assign({}, PARAMS({ methodType: 'GET' }), { data: payload }))
    try {      
        const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'GET' }), { data: payload }),);
      return data;
    } catch (error) {
      throw error;
    }
  },
  changeState:async ({...payload }) => {
    const URL = `${c.API_CONSUMER}/api/changeState`;
    try {
      const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'POST' }), {
        data: payload,
      }),
    );
      return data;
    } catch (error) {
      checkError(error);
      throw error;
    }
  },
  updateContact:async ({...payload }) => {
    console.log(payload)
    const URL = `${c.API_CONSUMER}/api/updateContact`;
    try {
      const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'POST' }), {
        data: payload,
      }),
    );
      return data;
    } catch (error) {
      checkError(error);
      throw error;
    }
  },


  getabout: async ({...payload }) => {
    const URL = `${c.API_CONSUMER}/api/getabout`;
    console.log(URL, Object.assign({}, PARAMS({ methodType: 'GET' }), { data: payload }))
    try {      
        const { data } = await axios(URL, Object.assign({}, PARAMS({ methodType: 'GET' }), { data: payload }),);
      return data;
    } catch (error) {
      throw error;
    }
  },


  

}; 

