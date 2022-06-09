import { Popconfirm, Tooltip } from "antd";
import EditIcon from "assets/svg/edit.js";
import RemoveIcon from "assets/svg/remove.js";
import React, { Fragment } from "react";

const Column = ({ t, formatDate, listCategory, handleEdit, handleDelete }) => {
   return [
      {
         title: t("STT"),
         name: "id",
         tableItem: {
            align: 'center',
            onCell: (data) => ({
               style: { paddingTop: '0.25rem', paddingBottom: 0 },
               onClick: async () => { },
            }),
            render: (text) => text
         },
         // formItem: {
         //    rules: [{ type: "required" }],
         // },
      },
      {
         title: t("Biển Kiểm Soát"),
         name: "nplate",
         tableItem: {
            filter: { type: "search" },
            sorter: true,
            onCell: (data) => ({
               style: { paddingTop: '0.25rem', paddingBottom: 0 },
               onClick: async () => { },
            }),
            render: (text) => text
         },
         formItem: {
            rules: [{ type: "required" }],
         },
      },
      {
         title: t("Số Khung"),
         name: "vin",
         tableItem: {
            onCell: (data) => ({
               style: { paddingTop: '0.25rem', paddingBottom: 0 },
               onClick: async () => { },
            }),
            render: (text) => text
         },
         formItem: {
            rules: [{ type: "required" }],
         },
      },
      {
         title: t("Số Máy"),
         name: "min",
         tableItem: {
            onCell: (data) => ({
               style: { paddingTop: '0.25rem', paddingBottom: 0 },
               onClick: async () => { },
            }),
            render: (text) => text
         },
         formItem: {
            rules: [{ type: "required" }],
         },
      },
      {
         title: t("Cà Vẹt"),
         name: "informalnumber",
         tableItem: {
            onCell: (data) => ({
               style: { paddingTop: '0.25rem', paddingBottom: 0 },
               onClick: async () => { },
            }),
            render: (text) => text
         },
         formItem: {
            rules: [{ type: "required" }],
         },
      },
      {
         title: t("Năm Sản Xuất"),
         name: "yearofmanufacture",
         tableItem: {
            onCell: (data) => ({
               style: { paddingTop: '0.25rem', paddingBottom: 0 },
               onClick: async () => { },
            }),
            render: (text) => text
         },
         formItem: {
            rules: [{ type: "required" }],
         },
      },
     
 
      {
         title: t("Ngày kiểm Định"),
         name: "inspectiondate",
         tableItem: {
            onCell: (data) => ({
               style: { paddingTop: '0.25rem', paddingBottom: 0 },
               onClick: async () => { },
            }),
            render: (text) => text.toDateString()
         },
         formItem: {
            rules: [{ type: "required" }],
         },
      },
      {
         title: t("Loại Xe"),
         name: "type",
         tableItem: {
            onCell: (data) => ({
               style: { paddingTop: '0.25rem', paddingBottom: 0 },
               onClick: async () => { },
            }),
            render: (text) => text
         },
         formItem: {
            rules: [{ type: "required" }],
         },
      },
      {
         title: t("Ghi Chú"),
         name: "note",
         tableItem: {
            onCell: (data) => ({
               style: { paddingTop: '0.25rem', paddingBottom: 0 },
               onClick: async () => { },
            }),
            render: (text) => text
         },
         formItem: {
            type: 'textarea',
            rules: [{ type: "required" }],
         },
      },
      {
         title: t("Hoạt động"),
         tableItem: {
            width: 180,
            align: "center",
            onCell: () => ({ style: { paddingTop: '0.25rem', paddingBottom: 0 } }),
            render: (text, data) => (<Fragment>
               <Tooltip title={t("routes.admin.Layout.Edit")}>
                  <button
                     className="embed border border-gray-300 text-xs rounded-lg mr-2"
                     onClick={() => handleEdit(data)}
                  >
                     <EditIcon />
                  </button>
               </Tooltip>
               <Tooltip title={t("routes.admin.Layout.Delete")}>
                  <Popconfirm
                     placement="left"
                     title={t("components.datatable.areYouSureWant")}
                     icon={<i className="las la-question-circle text-2xl text-yellow-500 absolute -top-0.5 -left-1" />}
                     onConfirm={() => handleDelete(data.id)}
                     okText={t("components.datatable.ok")}
                     cancelText={t("components.datatable.cancel")}
                  >
                     <button className="embed border border-gray-300 text-xs rounded-lg mr-2">
                        <RemoveIcon />
                     </button>
                  </Popconfirm>
               </Tooltip>
            </Fragment>),
         },
      },
   ];
};
export default Column;
