import Axios from "axios";



const mockAnswers = [
  {
    path: "/users/login",
    response: {
      data: {
        status: 200,
        msg: "Login Succeed",
        token: "dummy",
      },
    },
    error: {
      data: {
        status: 401,
        msg: "",
      },
    },
  },
  {
    path: "/users/register",
    response: {
      data: {
        status: 401,
        ERROR: "Email is already in use!",
      },
    },
  },
];

const mockGet = (url, data) => {
  return new Promise((resolve, reject) => {
    console.log(url);
    console.log(data);
    resolve(data);
  });
};
const mockPost = (url, data) => {
  return new Promise((resolve, reject) => {
    const ans = mockAnswers.filter(
      (mockResponses) => mockResponses.path === url
    );
    if (ans.length > 0) {
      console.dir(ans);
      console.log(url);
      console.log(data);
      resolve(ans[0].response);
    }
    resolve(mockAnswers[0].error);
  });
};

let Api
if ( process.env.NODE_ENV === 'production'){
  Api = Axios.create({
    baseURL: '/api',
    headers: {
        'content-type': 'application/json',
        'Cache-Control': 'no-cache'
    }
  });
}else if (  process.env.NODE_ENV === 'development'){
  Api = {
    get: mockGet,
    post: mockPost,
    default: {
      get: mockGet,
      post: mockPost,
    },
  };
  
}

export default Api;
