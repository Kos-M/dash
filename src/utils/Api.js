import Axios from "axios";

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
    data: {
      response: {
        status: 200,
        msg: "Login Succeed",
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
    if (ans) {
      console.log(url);
      console.log(data);
      resolve(ans[0].response);
    }
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
