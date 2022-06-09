/** @format */

import { Message } from "components";

export const VehicleService = {
   nameLink: "Vehicle",
   get: async (params) => {
      try {
         // const { data } = await axios.get(routerLinks(UserService.nameLink, "api"), {
         //   params,
         // });
         // return data;
         return {
            data: [
               {
                  id: 1,
                  nplate: "51F-866.00",
                  vin: `${Math.floor(Math.random() * 1000000)}`,
                  min: `${Math.floor(Math.random() * 1000000)}`,
                  informalnumber: `${Math.floor(Math.random() * 1000000)}`,
                  yearofmanufacture: 2018,
                  inspectiondate: new Date(2016, 11, 24),
                  type: 4,
                  note: null,
               },
               {
                  id: 2,
                  nplate: "27F-166.90",
                  vin: `${Math.floor(Math.random() * 1000000)}`,
                  min: `${Math.floor(Math.random() * 1000000)}`,
                  informalnumber: `${Math.floor(Math.random() * 1000000)}`,
                  yearofmanufacture: 2016,
                  inspectiondate: new Date(2017, 12, 2),
                  type: 5,
                  note: null,
               },
               {
                  id: 3,
                  nplate: "21F-816.11",
                  vin: `${Math.floor(Math.random() * 1000000)}`,
                  min: `${Math.floor(Math.random() * 1000000)}`,
                  informalnumber: `${Math.floor(Math.random() * 1000000)}`,
                  yearofmanufacture: 2017,
                  inspectiondate: new Date(2018, 4, 23),
                  type: 7,
                  note: null,
               },
               {
                  id: 4,
                  nplate: "31F-126.22",
                  vin: `${Math.floor(Math.random() * 1000000)}`,
                  min: `${Math.floor(Math.random() * 1000000)}`,
                  informalnumber: `${Math.floor(Math.random() * 1000000)}`,
                  yearofmanufacture: 2001,
                  inspectiondate: new Date(2006, 1, 11),
                  type: 16,
                  note: "Đây là Ferrari",
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
      console.log(values);
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
