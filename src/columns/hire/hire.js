import { Popconfirm, Tooltip } from "antd";
import EditIcon from "assets/svg/edit.js";
import RemoveIcon from "assets/svg/remove.js";
import React, { Fragment } from "react";
import { useAuth } from 'global';


const Column = ({ t, formatDate, listCategory, handleEdit, handleDelete }) => {
   const { user } = useAuth();
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
         title: t("Biển kiểm soát"),
         name: "nplate",
         tableItem: {
            align: 'center',
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
         title: t("Ngày Giờ Đi"),
         name: "rentdate",
         tableItem: {

            onCell: (data) => ({
               style: { paddingTop: '0.25rem', paddingBottom: 0 },
               onClick: async () => { },
            }),

            render: (text) => text.toDateString()
         },
         formItem: {
            type: "date",
            styleItem: { paddingTop: '0.25rem', paddingBottom: 0, width: "100% !important" },
            rules: [{ type: "required" }],

         },
      },
      {
         title: t("Ngày Giờ Trả"),
         name: "returndate",
         tableItem: {

            onCell: (data) => ({
               style: { paddingTop: '0.25rem', paddingBottom: 0 },
               onClick: async () => { },
            }),
            render: (text) => text.toDateString()
         },
         formItem: {
            type: "date",

            rules: [{ type: "required" }],
         },
      },
      {
         title: t("Người Điều Khiển"),
         name: "driver",
         tableItem: {
            onCell: (data) => ({
               style: { paddingTop: '0.25rem', paddingBottom: 0 },
               onClick: async () => { },
            }),
            render: (text) => text
         },
         formItem: {
            type: "text",
            rules: [{ type: "required" }],
         },
      },
      {
         title: t("Người Đề Xuất"),
         name: "proposer",
         tableItem: {
            onCell: (data) => ({
               style: { paddingTop: '0.25rem', paddingBottom: 0 },
               onClick: async () => { },
            }),
            render: (text) => text
         },
         formItem: {
            // readOnly: true,
            // type: 'checkbox',
            type: "text",

         },

      },
      {
         title: t("Điểm Đến"),
         name: "destination",
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
         title: t("Nhiên Liệu Tiêu Hao"),
         name: "fuel",
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
         title: t("Ngày Giờ Trả Thực Tế"),
         name: "realreturndate",
         tableItem: {
            onCell: (data) => ({
               style: { paddingTop: '0.25rem', paddingBottom: 0 },
               onClick: async () => { },
            }),
            render: (text) => text.toDateString()
         },
         formItem: {
            type: "date",
            picker: "date",
            showTime: true,
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
            // condition: (data, form) => {
            //    console.log(form.getFieldValue('note1'));
            //   return !form.getFieldValue('note1') 
            // },
            type: "text",
            rules: [{ type: "required" }],
         },
      },
      {
         title: t("Ban Chỉ Huy Đội"),
         name: "bodteam",
         tableItem: {
            onCell: (data) => ({
               style: { paddingTop: '0.25rem', paddingBottom: 0 },
               onClick: async () => { },
            }),
            render: (text) => text ? <i className="las la-check-circle la-2x" /> : <i class="las la-times-circle la-2x"></i>
         },
         formItem: {
            condition:() => user.role === 'leader' ? true : false,
            // type: "radio",
            // style: "button",
            // list: listCategory,
            // rules: [{ type: "required" }],
            type: "checkbox",

         },
      },
      {
         title: t("Ngày Giờ Ban Chỉ Huy Đội duyệt "),
         name: "bodteamreviewdate",
         tableItem: {
            onCell: (data) => ({
               style: { paddingTop: '0.25rem', paddingBottom: 0 },
               onClick: async () => { },
            }),
            render: (text) => text.toDateString()
         },
         formItem: {
            condition: () => user.role === 'leader' ? true : false,
            type: "date",
            picker: "date",
            showTime: true,
            // rules: [{ type: "required" }],
         },
      },
      {
         title: t("Ban Chỉ Huy Đội 1"),
         name: "bodteam1",
         tableItem: {
            onCell: (data) => ({
               style: { paddingTop: '0.25rem', paddingBottom: 0 },
               onClick: async () => { },
            }),
            render: (text) => text ? <i className="las la-check-circle la-2x" /> : <i class="las la-times-circle la-2x"></i>
         },
         formItem: {
            condition: () => user.role === 'leader1' ? true : false,
            type: "checkbox",
            // rules: [{ type: "required" }],
         },
      },
      {
         title: t("Ngày Giờ Ban Chỉ Huy Đội 1 duyệt "),
         name: "bodteam1reviewdate",
         tableItem: {
            onCell: (data) => ({
               style: { paddingTop: '0.25rem', paddingBottom: 0 },
               onClick: async () => { },
            }),
            render: (text) => text.toDateString()
         },
         formItem: {
            condition: () => user.role === 'leader1' ? true : false,
            type: "checkbox",
            // rules: [{ type: "required" }],
         },
      },
      {
         title: t("Ban Chỉ Huy"),
         name: "bod",
         tableItem: {
            onCell: (data) => ({
               style: { paddingTop: '0.25rem', paddingBottom: 0 },
               onClick: async () => { },
            }),
            render: (text) => text ? <i className="las la-check-circle la-2x" /> : <i class="las la-times-circle la-2x"></i>
         },
         formItem: {
            condition: () => user.role === 'captain' ? true : false,
            type: "checkbox",
         },
      },
      {
         title: t("Ngày Giờ Ban Chỉ Huy Duyệt"),
         name: "bodreviewdate",
         tableItem: {
            onCell: (data) => ({
               style: { paddingTop: '0.25rem', paddingBottom: 0 },
               onClick: async () => { },
            }),
            render: (text) => text.toDateString()
         },
         formItem: {
            type: "date",
            picker: "date",
            showTime: true,
            condition: () => user.role === 'captain' ? true : false,
            rules: [{ type: "required" }],
         },
      },
      {
         title: t("Lý Do"),
         name: "reason",
         tableItem: {
            onCell: (data) => ({
               style: { paddingTop: '0.25rem', paddingBottom: 0 },
               onClick: async () => { },
            }),
            render: (text) => text
         },
         formItem: {
            condition: (data, form) => !form.getFieldsValue().bodteam,
            type: 'textarea',
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
