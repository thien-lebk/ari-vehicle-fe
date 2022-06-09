import React, { useState, Fragment, useEffect, useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router";
import { useAuth } from "global";
import { HookDataTable, HookModalForm, HookModalDrag } from "hooks";
import { HireService } from "services/hire";
import { ColumnHire } from "columns/hire";


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
               value: true,
               label: "Phê Duyệt",
            },
            {
               value: false,
               label: "Không phê duyệt",
            },

         ]);
      }
   }, [mount]);

   useEffect(() => {
      initFunction();
   }, [initFunction, pathname]);


   // modal tao moi
   const [handleEdit, ModalForm, handleDelete] = HookModalForm({
      title: (data) => !data?.id ? t('Tạo mới mượn xe') : t('Chỉnh sửa mượn xe'),
      isLoading, setIsLoading,
      handleChange: async () => await handleChange(),
      columns: ColumnHire({
         t, formatDate, listCategory,
      }),
      GetById: HireService.getById,
      Post: HireService.post,
      Put: HireService.put,
      Delete: HireService.delete,
      widthModal: 600,
      idElement: 'hire',
   });


   //table product
   const [handleChange, DataTable] = HookDataTable({
      onRow: (data) => ({
         onDoubleClick: (event) => { }
      }),
      isLoading,
      setIsLoading,
      Get: HireService.get,
      columns: ColumnHire({
         t, formatDate,
         handleEdit,
         handleDelete,
      }),
      rightHeader: (
         <Fragment>
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
      {DataTable()}
      {ModalForm()}
   </Fragment>;
};
export default Page;
