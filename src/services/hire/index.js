/** @format */

import { Message } from "components";

export const HireService = {
   nameLink: "Hire",
   get: async (params) => {
      try {
         // const { data } = await axios.get(routerLinks(UserService.nameLink, "api"), {
         //   params,
         // });
         // return data;
         let i = 2;
         return {
            data: [
               {
                  id: 1,
                  nplate: "51F-866.00",
                  rentdate: new Date(2016, 11, 24, 10, 33),
                  returndate: new Date(2016, 11, 25, 10, 33),
                  driver: "Nguyễn Văn 1",
                  bod: false,
                  bodreviewdate: new Date(2016, 11, 26),
                  bodteam: true,
                  bodteamreviewdate: new Date(2016, 11, 26), 
                  bobteam1: false,
                  bodteam1reviewdate: new Date(2016, 11, 26),
                  proposer: "Nguyễn Thị 1",
                  destination: "Hà Nội",
                  reason: "Đi chơi",
                  fuel: 20,
                  realreturndate: new Date(2016, 11, 30, 10, 50),
                  note: null,
               },
               {
                  id: 2,
                  nplate: "27F-166.90",
                  rentdate: new Date(2017, 12, 2, 7, 5),
                  returndate: new Date(2018, 11, 25, 10, 33),
                  driver: "Nguyễn Văn 2",
                  bod: true,
                  bodreviewdate: new Date(2016, 11, 26),
                  bodteam: false,
                  bodteamreviewdate: new Date(2016, 11, 26), 
                  bobteam1: false,
                  bodteam1reviewdate: new Date(2016, 11, 26),
                  proposer: "Nguyễn Thị 1",
                  destination: "Hà Nội",
                  reason: "Đi chơi",
                  fuel: 20,
                  realreturndate: new Date(2016, 11, 30, 10, 50),
                  note: null,
               },
               {
                  id: 3,
                  nplate: "21F-816.11",
                  rentdate: new Date(2018, 4, 23, 8, 6),
                  returndate: new Date(2018, 11, 25, 10, 33),
                  driver: "Nguyễn Văn 3",
                  bod: false,
                  bodreviewdate: new Date(2016, 11, 26),
                  bodteam: false,
                  bodteamreviewdate: new Date(2016, 11, 26), 
                  bobteam1: false,
                  bodteam1reviewdate: new Date(2016, 11, 26),
                  proposer: "Nguyễn Thị 1",
                  destination: "Hà Nội",
                  reason: "Đi chơi",
                  fuel: 20,
                  realreturndate: new Date(2016, 11, 30, 10, 50),
                  note: null,
               },
            ],
            count: 20,
         };
         // eslint-disable-next-line no-unreachable
      } catch (e) {
         if (e.response.data.message) Message.error(e.response.data.message);
         return false;
      }
   },
   getById: async (id) => {
      try {
         // const { data } = await axios.get(
         //   `${routerLinks(UserService.nameLink, "api")}/${id}`
         // );
         // data.data.mtRoleCode = data.data.userRole?.mtRole?.code;
         // data.data.wardId = data.data.ward?.id;
         // data.data.departmentId = data.data.department?.id;
         // return data;
         return { data: { id } };
      } catch (e) {
         if (e.response.data.message) Message.error(e.response.data.message);
         return false;
      }
   },
   post: async (values) => {
      console.log(values,"post");
      try {
         // const { data } = await axios.post(
         //   routerLinks(UserService.nameLink, "api"),
         //   values
         // );
         // if (data.message) Message.success(data.message);
         // return data;
         return values;
      } catch (e) {
         if (e.response.data.message) Message.error(e.response.data.message);
         return false;
      }
   },
   put: async (values, id) => {
      try {
         // const { data } = await axios.put(
         //   `${routerLinks(UserService.nameLink, "api")}/${id}`,
         //   values
         // );
         // if (data.message) Message.success(data.message);
         // return data;
         return values;
      } catch (e) {
         if (e.response.data.message) Message.error(e.response.data.message);
         return false;
      }
   },
   delete: async (id) => {
      try {
         // const { data } = await axios.delete(
         //   `${routerLinks(UserService.nameLink, "api")}/${id}`
         // );
         // if (data.message) Message.success(data.message);
         // return data;
         return { id };
      } catch (e) {
         if (e.response.data.message) Message.error(e.response.data.message);
         return false;
      }
   },
};
