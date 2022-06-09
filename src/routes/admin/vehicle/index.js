import React, { useState, Fragment, useEffect, useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router";

import { useAuth } from "global";
import { HookDataTable, HookModalForm, HookModalDrag } from "hooks";
import { VehicleService } from "services/vehicle";
import { ColumnVehicle } from "columns/vehicle";



const Page = () => {
   const { t } = useTranslation();
   const mount = useRef(false)

   // changePermission permission
   const { formatDate } = useAuth();
   const [isLoading, setIsLoading] = useState(false);
   const [listCategory, set_listCategory] = useState([]);
   // const [listCategory, set_] = useState([]);
   const { pathname } = useLocation();

   const initFunction = useCallback(async () => {
      if (!mount.current) {
         mount.current = true;
         set_listCategory([
            {
               value: "Quần Jogger",
               label: "Quần Jogger",
            },
            {
               value: "Áo Polo",
               label: "Áo Polo",
            },
            {
               value: "Áo Thun",
               label: "Áo Thun",
            },
         ]);
      }
   }, [mount]);

   useEffect(() => {
      initFunction();
   }, [initFunction, pathname]);


   //Modal Vai trò
   // const [handleShowDrag, ModalDrag] = HookModalDrag({
   //    title: () => t("Vai trò"),
   //    isLoading,
   //    setIsLoading,
   //    columns: ColumnUser({ t }),
   //    Get: () => ([{
   //       "id": "1",
   //       "name": "Biên tập viên",
   //    }, {
   //       "id": "2",
   //       "name": "Người dùng",
   //    }, {
   //       "id": "3",
   //       "name": "Quản trị viên",
   //    }, {
   //       "id": "4",
   //       "name": "Thanh tra",
   //    }, {
   //       "id": "5",
   //       "name": "Trưởng phòng",
   //    }]),
   //    Put: UserService.put,
   //    Post: UserService.post,
   //    Delete: UserService.delete,
   //    GetById: UserService.getById,
   //    widthForm: 1200,
   //    isReloadLoadToSave: true,
   //    idElement: 'role',
   // });
   // modal tao moi
   const [handleEdit, ModalForm, handleDelete] = HookModalForm({
      title: (data) => !data?.id ? t('Tạo mới xe') : t('Chỉnh sửa xe'),
      isLoading, setIsLoading,
      handleChange: async () => await handleChange(),
      columns: ColumnVehicle({
         t, formatDate, listCategory,
      }),
      GetById: VehicleService.getById,
      Post: (id, values) => {
         console.log(id, values)
         // ProductService.post
      },
      Put: VehicleService.put,
      Delete: VehicleService.delete,
      widthModal: 600,
      idElement: 'product',
   });


   //table product
   const [handleChange, DataTable] = HookDataTable({
      onRow: (data) => ({
         onDoubleClick: (event) => { }
      }),
      isLoading,
      setIsLoading,
      Get: VehicleService.get,
      columns: ColumnVehicle({
         t, formatDate,
         handleEdit,
         handleDelete,
      }),
      rightHeader: (
         <Fragment>
            {/* <button
               className="bg-blue-500 text-white px-4 py-2.5 rounded-xl hover:bg-blue-400 inline-flex items-center mr-2"
               onClick={() => handleShowDrag()}
            >
               <i className="las la-plus mr-1" />
               {t('Vai trò')}
            </button> */}
            <button
               className="bg-blue-500 text-white px-4 py-2.5 rounded-xl hover:bg-blue-400 inline-flex items-center"
               onClick={() => handleEdit()}
            >
               <i className="las la-plus mr-1" />
               {t('Tạo mới')}
            </button>
         </Fragment>
      )
   });

   return <Fragment>
      {/* {ModalDrag()} */}
      {DataTable()}
      {ModalForm()}
   </Fragment>;
};
export default Page;
