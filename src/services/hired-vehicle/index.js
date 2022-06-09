
import { Message } from "components";


export const HiredVehicleService = {
   nameLink: "HiredVehicle",
   get: async (params) => {
      try {
         // const { data } = await axios.get(routerLinks(UserService.nameLink, "api"), {
         //   params,
         // });
         // return data;
         return {
            data: [
               {
                  "id": 1,
                  "cbql": "nguyen van a",
                  "bks": "59F1-11111",
                  "type": "xe may",
                  "sokhung": "12312312312312312",
                  "somay": "12312312111312312312",
                  "loaibang": "A1",
                  "cavet": "12312312111312312312",
                  "namsx": "2022 ",
                  "ngaykd": "1-1-2022",
                  "ghichu": "Note"
               },
               {
                  "id": 2,
                  "cbql": "nguyen van b",
                  "bks": "59F1-11111",
                  "type": "xe may",
                  "sokhung": "12312312312312312",
                  "somay": "12312312111312312312",
                  "loaibang": "A1",
                  "cavet": "12312312111312312312",
                  "namsx": "2022",
                  "ngaykd": "1-1-2022",
                  "ghichu": "Note"
               },
               {
                  "id": 3,
                  "cbql": "nguyen van c",
                  "bks": "59F1-11111",
                  "type": "xe may",
                  "sokhung": "12312312312312312",
                  "somay": "12312312111312312312",
                  "loaibang": "A1",
                  "cavet": "12312312111312312312",
                  "namsx": "2022",
                  "ngaykd": "1-1-2022",
                  "ghichu": "Note"
               },
               {
                  "id": 4,
                  "cbql": "nguyen van d",
                  "bks": "59F1-11111",
                  "type": "xe may",
                  "sokhung": "12312312312312312",
                  "somay": "12312312111312312312",
                  "loaibang": "A1",
                  "cavet": "12312312111312312312",
                  "namsx": "2022",
                  "ngaykd": "1-1-2022",
                  "ghichu": "Note"
               },
               {
                  "id": 5,
                  "cbql": "nguyen van e",
                  "bks": "59F1-11111",
                  "type": "xe may",
                  "sokhung": "12312312312312312",
                  "somay": "12312312111312312312",
                  "loaibang": "A1",
                  "cavet": "12312312111312312312",
                  "namsx": "2022",
                  "ngaykd": "1-1-2022",
                  "ghichu": "Note"
               },
               {
                  "id": 6,
                  "cbql": "nguyen van f",
                  "bks": "59F1-11111",
                  "type": "xe may",
                  "sokhung": "12312312312312312",
                  "somay": "12312312111312312312",
                  "loaibang": "A1",
                  "cavet": "12312312111312312312",
                  "namsx": "2022",
                  "ngaykd": "1-1-2022",
                  "ghichu": "Note"
               },
               {
                  "id": 7,
                  "cbql": "nguyen van g",
                  "bks": "59F1-11111",
                  "type": "xe may",
                  "sokhung": "12312312312312312",
                  "somay": "12312312111312312312",
                  "loaibang": "A1",
                  "cavet": "12312312111312312312",
                  "namsx": "2022",
                  "ngaykd": "1-1-2022",
                  "ghichu": "Note"
               },
               {
                  "id": 8,
                  "cbql": "nguyen van h",
                  "bks": "59F1-11111",
                  "type": "xe may",
                  "sokhung": "12312312312312312",
                  "somay": "12312312111312312312",
                  "loaibang": "A1",
                  "cavet": "12312312111312312312",
                  "namsx": "2022",
                  "ngaykd": "1-1-2022",
                  "ghichu": "Note"
               },
               {
                  "id": 9,
                  "cbql": "nguyen van i",
                  "bks": "59F1-11111",
                  "type": "xe may",
                  "sokhung": "12312312312312312",
                  "somay": "12312312111312312312",
                  "loaibang": "A1",
                  "cavet": "12312312111312312312",
                  "namsx": "2022",
                  "ngaykd": "1-1-2022",
                  "ghichu": "Note"
               },
               {
                  "id": 10,
                  "cbql": "nguyen van k",
                  "bks": "59F1-11111",
                  "type": "xe may",
                  "sokhung": "12312312312312312",
                  "somay": "12312312111312312312",
                  "loaibang": "A1",
                  "cavet": "12312312111312312312",
                  "namsx": "2022",
                  "ngaykd": "1-1-2022",
                  "ghichu": "Note"
               },
               {
                  "id": 11,
                  "cbql": "nguyen van l",
                  "bks": "59F1-11111",
                  "type": "xe may",
                  "sokhung": "12312312312312312",
                  "somay": "12312312111312312312",
                  "loaibang": "A1",
                  "cavet": "12312312111312312312",
                  "namsx": "2022",
                  "ngaykd": "1-1-2022",
                  "ghichu": "Note"
               }
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
