import Axios from "axios";
//   "@fortawesome/fontawesome-free": "5.15.3",
/*
 * restVerify must be enqued from admin-class side.
 */
// const Api = Axios.create({
//     // baseURL: 'https://api',
//     baseURL: 'http://127.0.0.1:5001/',
//     headers: {
//         'content-type': 'application/json',
//         'Cache-Control': 'no-cache'
//     }
// });

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

const Api = {
  get: mockGet,
  post: mockPost,
  default: {
    get: mockGet,
    post: mockPost,
  },
};

export default Api;
