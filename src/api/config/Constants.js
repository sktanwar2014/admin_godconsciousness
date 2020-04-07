// export const API_URL = 'http://newgc.sargatechnology.com'; // Config[KEY].API_URL;
// export const AUTH_URL = 'http://newgc.sargatechnology.com'; // Config[KEY].AUTH_URL;
// export const API_CONSUMER = 'http://newgc.sargatechnology.com'; // Config[KEY].API_URL;

export const API_URL = 'http://localhost:5000'; // Config[KEY].API_URL;
export const AUTH_URL = 'http://localhost:5000'; // Config[KEY].AUTH_URL;
export const API_CONSUMER = 'http://localhost:5000'; // Config[KEY].API_URL;


export const APP_TOKEN = {
    set: (params) => {
        sessionStorage.setItem('userId', params.id);
        sessionStorage.setItem('token', params.token);
        sessionStorage.setItem('user_id', params.user_id);
        sessionStorage.setItem('name', params.name);
    },
    get: () => ({
        userId: sessionStorage.getItem('userId'),
        token: sessionStorage.getItem('token'),
        user_id : sessionStorage.getItem('user_id'),
        name : sessionStorage.getItem('name'),
    }),
    remove: () => {
        sessionStorage.clear();
    },   
    get notEmpty() {
        const cond1 = this.get().token !== null;
        const cond2 = this.get().token !== '';
        return cond1 && cond2;
    },    
}

