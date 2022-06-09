import axios from "axios";

import {routerLinks} from "utils";
import {Message} from "components";
import {keyRefreshToken, keyToken} from "../../variable";

export const VehicleService = {
  nameLink: "Vehicle",
  login: async (values) => {
    try {
      // const { data } = await axios.post(`${routerLinks(VehicleService.nameLink, "api")}/login`, values);
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
          `${routerLinks(VehicleService.nameLink, "api")}/refresh-token`,
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
        `${routerLinks(VehicleService.nameLink, "api")}/log-out`
      );
      return data;
    }catch (e) {
      if (e.response.data.message) Message.error(e.response.data.message);
      return false;
    }
  },
  get: async (params) => {
    try {
      // const { data } = await axios.get(routerLinks(VehicleService.nameLink, "api"), {
      //   params,
      // });
      // return data;
      return {
        data: [
          {id: 1, nplate: '51F-866.00', vin: `${Math.floor(Math.random()*1000000)}`, min: `${Math.floor(Math.random()*1000000)}`, informalnumber: `${Math.floor(Math.random()*1000000)}`, yearofmanufacture: (new Date(2016, 11, 24)), inspectiondate: (new Date(2016, 11, 24)), type: 4, note: null},
          {id: 2, nplate: '27F-166.90', vin: `${Math.floor(Math.random()*1000000)}`, min: `${Math.floor(Math.random()*1000000)}`, informalnumber: `${Math.floor(Math.random()*1000000)}`, yearofmanufacture: (new Date(2016, 11, 24)), inspectiondate: (new Date(2017, 12, 2)), type: 5, note: null},
          {id: 3, nplate: '21F-816.11', vin: `${Math.floor(Math.random()*1000000)}`, min: `${Math.floor(Math.random()*1000000)}`, informalnumber: `${Math.floor(Math.random()*1000000)}`, yearofmanufacture: (new Date(2016, 11, 24)), inspectiondate: (new Date(2018, 4, 23)), type: 7, note: null},
          {id: 4, nplate: '31F-126.22', vin: `${Math.floor(Math.random()*1000000)}`, min: `${Math.floor(Math.random()*1000000)}`, informalnumber: `${Math.floor(Math.random()*1000000)}`, yearofmanufacture: (new Date(2016, 11, 24)), inspectiondate: (new Date(2006, 1, 11)), type: 16, note: 'Đây là Ferrari'},
          {id: 5, nplate: '41F-266.33', vin: `${Math.floor(Math.random()*1000000)}`, min: `${Math.floor(Math.random()*1000000)}`, informalnumber: `${Math.floor(Math.random()*1000000)}`, yearofmanufacture: (new Date(2016, 11, 24)), inspectiondate: (new Date(2007, 1, 12)), type: 4, note: null},
          {id: 6, nplate: '42F-466.44', vin: `${Math.floor(Math.random()*1000000)}`, min: `${Math.floor(Math.random()*1000000)}`, informalnumber: `${Math.floor(Math.random()*1000000)}`, yearofmanufacture: (new Date(2016, 11, 24)), inspectiondate: (new Date(2008, 2, 6)), type: 5, note: null},
          {id: 7, nplate: '11F-766.55', vin: `${Math.floor(Math.random()*1000000)}`, min: `${Math.floor(Math.random()*1000000)}`, informalnumber: `${Math.floor(Math.random()*1000000)}`, yearofmanufacture: (new Date(2016, 11, 24)), inspectiondate: (new Date(2019, 10, 4)), type: 16, note: null},
          {id: 8, nplate: '98F-863.66', vin: `${Math.floor(Math.random()*1000000)}`, min: `${Math.floor(Math.random()*1000000)}`, informalnumber: `${Math.floor(Math.random()*1000000)}`, yearofmanufacture: (new Date(2016, 11, 24)), inspectiondate: (new Date(2022, 11, 7)), type: 4, note: null},
          {id: 9, nplate: '11F-826.77', vin: `${Math.floor(Math.random()*1000000)}`, min: `${Math.floor(Math.random()*1000000)}`, informalnumber: `${Math.floor(Math.random()*1000000)}`, yearofmanufacture: (new Date(2016, 11, 24)), inspectiondate: (new Date(2011, 6, 30)), type: 5, note: null},
          {id: 10, nplate: '12A-166.88', vin: `${Math.floor(Math.random()*1000000)}`, min: `${Math.floor(Math.random()*1000000)}`, informalnumber: `${Math.floor(Math.random()*1000000)}`, yearofmanufacture: (new Date(2016, 11, 24)), inspectiondate: (new Date(2002, 2, 27)), type: 7, note: null},
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
      //   `${routerLinks(VehicleService.nameLink, "api")}/${id}`
      // );
      // data.data.mtRoleCode = data.data.VehicleRole?.mtRole?.code;
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
      //   routerLinks(VehicleService.nameLink, "api"),
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
    console.log(values, id)
    try {
      // const { data } = await axios.put(
      //   `${routerLinks(VehicleService.nameLink, "api")}/${id}`,
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
      //   `${routerLinks(VehicleService.nameLink, "api")}/${id}`
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
