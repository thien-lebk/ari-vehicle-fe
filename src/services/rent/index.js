import axios from "axios";

import {routerLinks} from "utils";
import {Message} from "components";
import {keyRefreshToken, keyToken} from "../../variable";

export const RentService = {
  nameLink: "Rent",
  login: async (values) => {
    try {
      // const { data } = await axios.post(`${routerLinks(RentService.nameLink, "api")}/login`, values);
      return {
        // ...data,
        data: {
          token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBsb3llZUlkIjoiMSIsInJvbGUiOiJVc2VyIiwibmJmIjoxNjI0MzY5Mjk3LCJleHAiOjE2MjQ0NTU2OTcsImlhdCI6MTYyNDM2OTI5NywiaXNzIjoiaHR0cHM6Ly90cnVuZy5uZXQubGV2aW5jaXRlc3QuY29tL2FwaS8ifQ.bGF2dbIZMwEEKbTuTjRJE_kkEyX0znDSQMji1bpIjQU",
          avatarPath: "https://talkpro.edu.vn/wp-content/uploads/2017/11/avatar-girl-xinh-6.jpg",
          createdBy: 1,
          createdDate: "2021-03-17T16:12:50",
          email: "admin@admin.com",
          employeeId: 1,
          id: 2,
          isDisabled: false,
          name: "Nguyễn Văn A",
        },
      };
    } catch (e) {
      console.error(e);
      if (e.response.data.message) Message.error(e.response.data.message);
      return false;
    }
  },
  refreshToken: async () => {
    try {
      const refreshToken = localStorage.getItem(keyRefreshToken);
      if (refreshToken) {
        const { data } = await axios.post(
          `${routerLinks(RentService.nameLink, "api")}/refresh-token`,
          {}, {params: {refreshToken: "Bearer " + refreshToken}}
        );
        axios.defaults.headers.common["Authorization"] = "Bearer " + data.accessToken;
        localStorage.setItem(keyToken, data.accessToken);
        return data;
      }
      return null
    }catch (e) {
      if (e.response.data.message) Message.error(e.response.data.message);
      return false;
    }
  },
  logout: async () => {
    try {
      const { data } = await axios.post(
        `${routerLinks(RentService.nameLink, "api")}/log-out`
      );
      return data;
    }catch (e) {
      if (e.response.data.message) Message.error(e.response.data.message);
      return false;
    }
  },
  get: async (params) => {
    try {
      // const { data } = await axios.get(routerLinks(RentService.nameLink, "api"), {
      //   params,
      // });
      // return data;
      return {
        data: [
          {id: 1, nplate: '51F-866.00', rentdate: (new Date(2016, 11, 24, 10, 33)), returndate: (new Date(2016, 11, 25, 10, 33)), driver:'Nguyễn Văn 1', bod: false, bodreviewdate: (new Date(2016, 11, 26, 10, 33)), bod1: false, bod1reviewdate: (new Date(2016, 11, 26, 10, 33)), bodteam: true, bodteamreviewdate: (new Date(2016, 11, 26, 10, 33)), proposer: 'Nguyễn Thị 1', destination: 'Hà Nội', reason: 'Đi chơi', fuel: 20, realreturndate: (new Date(2016, 11, 30, 10, 50)), note: null},
          {id: 2, nplate: '27F-166.90', rentdate: (new Date(2017, 12, 2, 7, 5)), returndate: (new Date(2018, 11, 25, 10, 33)), driver:'Nguyễn Văn 2', bod: true, bodreviewdate: (new Date(2016, 11, 26, 10, 33)), bod1: false, bod1reviewdate: (new Date(2016, 11, 26, 10, 33)), bodteam: false, bodteamreviewdate: (new Date(2016, 11, 26, 10, 33)), proposer: 'Nguyễn Thị 1', destination: 'Hà Nội', reason: 'Đi chơi', fuel: 20, realreturndate: (new Date(2016, 11, 30, 10, 50)), note: null},
          {id: 3, nplate: '21F-816.11', rentdate: (new Date(2018, 4, 23, 8, 6)), returndate: (new Date(2018, 11, 25, 10, 33)), driver:'Nguyễn Văn 3',  bod: false, bodreviewdate: (new Date(2016, 11, 26, 10, 33)), bod1: true, bod1reviewdate: (new Date(2016, 11, 26, 10, 33)), bodteam: false, bodteamreviewdate: (new Date(2016, 11, 26, 10, 33)), proposer: 'Nguyễn Thị 1', destination: 'Hà Nội', reason: 'Đi chơi', fuel: 20, realreturndate: (new Date(2016, 11, 30, 10, 50)), note: null},
          {id: 4, nplate: '31F-126.22', rentdate: (new Date(2006, 1, 11, 9, 12)), returndate: (new Date(2006, 11, 25, 10, 33)), driver:'Nguyễn Văn 4', bod: true, bodreviewdate: (new Date(2016, 11, 26, 10, 33)), bod1: false, bod1reviewdate: (new Date(2016, 11, 26, 10, 33)), bodteam: true, bodteamreviewdate: (new Date(2016, 11, 26, 10, 33)), proposer: 'Nguyễn Thị 1', destination: 'Hà Nội', reason: 'Đi chơi', fuel: 20, realreturndate: (new Date(2016, 11, 30, 10, 50)), note: null},
          {id: 5, nplate: '41F-266.33', rentdate: (new Date(2007, 1, 12, 5, 0)), returndate: (new Date(2007, 11, 25, 10, 33)), driver:'Nguyễn Văn 5', bod: true, bodreviewdate: (new Date(2016, 11, 26, 10, 33)), bod1: false, bod1reviewdate: (new Date(2016, 11, 26, 10, 33)), bodteam: true, bodteamreviewdate: (new Date(2016, 11, 26, 10, 33)), proposer: 'Nguyễn Thị 1', destination: 'Hà Nội', reason: 'Đi chơi', fuel: 20, realreturndate: (new Date(2016, 11, 30, 10, 50)), note: null},
          {id: 6, nplate: '42F-466.44', rentdate: (new Date(2008, 2, 6, 7, 7)), returndate: (new Date(2008, 11, 25, 10, 33)), driver:'Nguyễn Văn 6', bod: true, bodreviewdate: (new Date(2016, 11, 26, 10, 33)), bod1: true, bod1reviewdate: (new Date(2016, 11, 26, 10, 33)), bodteam: true, bodteamreviewdate: (new Date(2016, 11, 26, 10, 33)), proposer: 'Nguyễn Thị 1', destination: 'Hà Nội', reason: 'Đi chơi', fuel: 20, realreturndate: (new Date(2016, 11, 30, 10, 50)), note: null},
          {id: 7, nplate: '11F-766.55', rentdate: (new Date(2019, 10, 4,18, 15)), returndate: (new Date(2019, 11, 25, 10, 33)), driver:'Nguyễn Văn 7', bod: true, bodreviewdate: (new Date(2016, 11, 26, 10, 33)), bod1: false, bod1reviewdate: (new Date(2016, 11, 26, 10, 33)), bodteam: true, bodteamreviewdate: (new Date(2016, 11, 26, 10, 33)), proposer: 'Nguyễn Thị 1', destination: 'Hà Nội', reason: 'Đi chơi', fuel: 20, realreturndate: (new Date(2016, 11, 30, 10, 50)), note: null},
          {id: 8, nplate: '98F-863.66', rentdate: (new Date(2022, 11, 7, 14, 20)), returndate: (new Date(2022, 11, 25, 10, 33)), driver:'Nguyễn Văn 8', bod: true, bodreviewdate: (new Date(2016, 11, 26, 10, 33)), bod1: false, bod1reviewdate: (new Date(2016, 11, 26, 10, 33)), bodteam: true, bodteamreviewdate: (new Date(2016, 11, 26, 10, 33)), proposer: 'Nguyễn Thị 1', destination: 'Hà Nội', reason: 'Đi chơi', fuel: 20, realreturndate: (new Date(2016, 11, 30, 10, 50)), note: null},
          {id: 9, nplate: '11F-826.77', rentdate: (new Date(2011, 6, 30, 9, 10)), returndate: (new Date(2011, 11, 25, 10, 33)), driver:'Nguyễn Văn 9', bod: true, bodreviewdate: (new Date(2016, 11, 26, 10, 33)), bod1: false, bod1reviewdate: (new Date(2016, 11, 26, 10, 33)), bodteam: true, bodteamreviewdate: (new Date(2016, 11, 26, 10, 33)), proposer: 'Nguyễn Thị 1', destination: 'Hà Nội', reason: 'Đi chơi', fuel: 20, realreturndate: (new Date(2016, 11, 30, 10, 50)), note: null},
          {id: 10, nplate: '12A-166.88', rentdate: (new Date(2002, 2, 27, 8, 30)), returndate: (new Date(2002, 11, 25, 10, 33)), driver:'Nguyễn Văn 10', bod: true, bodreviewdate: (new Date(2016, 11, 26, 10, 33)), bod1: false, bod1reviewdate: (new Date(2016, 11, 26, 10, 33)), bodteam: true, bodteamreviewdate: (new Date(2016, 11, 2, 10, 33)), proposer: 'Nguyễn Thị 1', destination: 'Hà Nội', reason: 'Đi chơi', fuel: 20, realreturndate: (new Date(2016, 11, 30, 10, 50)), note: null},
        ],
        count: 20,
      };
    }catch (e) {
      if (e.response.data.message) Message.error(e.response.data.message);
      return false;
    }
  },
  getById: async (id) => {
    try {
      // const { data } = await axios.get(
      //   `${routerLinks(RentService.nameLink, "api")}/${id}`
      // );
      // data.data.mtRoleCode = data.data.RentRole?.mtRole?.code;
      // data.data.wardId = data.data.ward?.id;
      // data.data.departmentId = data.data.department?.id;
      // return data;
      return {data: {id}};
    }catch (e) {
      if (e.response.data.message) Message.error(e.response.data.message);
      return false;
    }
  },
  post: async (values) => {
    console.log(values);
    try {
      // const { data } = await axios.post(
      //   routerLinks(RentService.nameLink, "api"),
      //   values
      // );
      // if (data.message) Message.success(data.message);
      // return data;
      return values;
    }catch (e) {
      if (e.response.data.message) Message.error(e.response.data.message);
      return false;
    }
  },
  put: async (values, id) => {
    try {
      // const { data } = await axios.put(
      //   `${routerLinks(RentService.nameLink, "api")}/${id}`,
      //   values
      // );
      // if (data.message) Message.success(data.message);
      // return data;
      return values;
    }catch (e) {
      if (e.response.data.message) Message.error(e.response.data.message);
      return false;
    }
  },
  delete: async (id) => {
    try {
      // const { data } = await axios.delete(
      //   `${routerLinks(RentService.nameLink, "api")}/${id}`
      // );
      // if (data.message) Message.success(data.message);
      // return data;
      return {id};
    }catch (e) {
      if (e.response.data.message) Message.error(e.response.data.message);
      return false;
    }
  },
};
