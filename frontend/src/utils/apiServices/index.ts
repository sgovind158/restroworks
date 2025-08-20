import Axios from "axios";
const AxiosInstance = Axios.create({
  baseURL: process.env.API + "/api/",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});
const updateMutipart = (reset: boolean) => {
  if (reset) {
    AxiosInstance.defaults.headers["Content-Type"] = "multipart/form-data";
  } else {
    AxiosInstance.defaults.headers["Content-Type"] = "application/json";
  }
};
const setAuthorizationToken = (token: string | null | undefined) => {
  AxiosInstance.defaults.headers.common.Authorization = token
    ? `Bearer ${token}`
    : token;
};

//post method function to use call post method
const postMethod = async (
  endpoint: string,
  data: unknown,
  params: Record<string, unknown> = {}
) => {
  //post method create
  return new Promise((resolve) => {
    const config = {
      method: "post",
      url: endpoint,
      data: data,
      params: params,
    };
    AxiosInstance(config).then(
      (response) => {
        resolve(response.data);
      },
      (error) => {
        resolve(error.response.data);
      }
    );
  });
};

//get method function to use call get method
const getMethod = async (
  endpoint: string,
  params: Record<string, unknown> = {}
) => {
  //get methods
  return new Promise((resolve, reject) => {
    const config = {
      method: "get",
      url: endpoint,
      params: params,
    };
    AxiosInstance(config).then(
      (response) => {
        resolve(response.data);
      },
      (error) => {
        if (!error.response || error.code === "ECONNABORTED") {
          reject({ status: false, message: "error!", statusCode: 500 });
        } else {
          reject(error.response.data);
        }
      }
    );
  });
};

//put method function to use call put  method
const putMethod = async (
  endpoint: string,
  data: unknown,
  params: Record<string, unknown> = {}
) => {
  //post method create
  return new Promise((resolve) => {
    const config = {
      method: "put",
      url: endpoint,
      data: data,
      params: params,
    };
    AxiosInstance(config).then(
      (response) => {
        resolve(response.data);
      },
      (error) => {
        resolve(error.response.data);
      }
    );
  });
};

async function deleteMethod(endpoint: string) {
  return new Promise((resolve) => {
    const config = {
      method: "delete",
      url: endpoint,
    };
    AxiosInstance(config).then(
      (response) => {
        resolve(response.data);
      },
      (error) => {
        if (error?.response?.status === 401) {
          resolve({
            success: false,
            status: error?.response?.status,
            message: "failed!",
          });
        }
        resolve(error.response.data);
      }
    );
  });
}

export {
  postMethod,
  getMethod,
  putMethod,
  setAuthorizationToken,
  updateMutipart,
  deleteMethod,
};
