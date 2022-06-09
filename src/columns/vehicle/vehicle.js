import { Popconfirm, Tooltip } from "antd";
import EditIcon from "assets/svg/edit.js";
import RemoveIcon from "assets/svg/remove.js";
import React, {Fragment} from "react";
import {Avatar} from "components";
import {routerLinks} from "utils";
const Column = ({ t, formatDate, listGender, handleEdit, handleDelete }) => {
  return [
    {
      title: t("Biển số xe"),
      name: "nplate",
      tableItem: {
        filter: { type: "search" },
        sorter: true,
        onCell: (data) => ({
          style: {paddingTop: '0.25rem', paddingBottom: 0},
          onClick: async () => {},
        }),
      },
      formItem: {
        rules: [{ type: "required" }],
      },
    },
    {
      title: t("Số khung"),
      name: "vin",
      tableItem: {
        filter: { type: "search" },
        sorter: true,
        onCell: () => ({style: {paddingTop: '0.25rem', paddingBottom: 0}}),
      },
      formItem: {
        rules: [{ type: "required" }],
      },
    },
    {
      title: t("Số máy"),
      name: "min",
      tableItem: {
        filter: { type: "search" },
        sorter: true,
      },
      formItem: {
        rules: [{ type: "required" }],
      },
    },
    {
        title: t("Cà vẹt số"),
        name: "informalnumber",
        tableItem: {
          filter: { type: "search" },
          sorter: true,
        },
        formItem: {
          rules: [{ type: "required" }],
        },
    },
    {
        title: t("Năm sản xuất"),
        name: "yearofmanufacture",
        tableItem: {
          filter: { type: "search" },
          sorter: true,
          render: (text) => text.getFullYear(),
        },
        formItem: {
          type: "date",
          picker: "year",
          rules: [{ type: "required" }],
        },
    },
    {
        title: t("Ngày kiểm định"),
        name: "inspectiondate",
        tableItem: {
          filter: { type: "search" },
          sorter: true,
          render: (text) => text.toDateString(),
        },
        formItem: {
          type: "date",
          rules: [{ type: "required" }],
        },
    },
    {
        title: t("Chủng loại"),
        name: "type",
        tableItem: {
          filter: { type: "search" },
          sorter: true,
          render: (text) => text + ' chỗ',
        },
        formItem: {
          type: "select",
          rules: [{ type: "required" }],
          list: [
            {
              value: "4",
              label: "4 chỗ",
            },
            {
              value: "5",
              label: "5 chỗ",
            },
            {
              value: "7",
              label: "7 chỗ",
            },
            {
              value: "16",
              label: "16 chỗ",
            },
          ]
        },
    },
    {
      title: t("Ghi chú"),
      name: "note",
      tableItem: {
       
      },
      formItem: {
        
      },
  },
    {
      title: t("Hoạt động"),
      tableItem: {
        width: 180,
        align: "center",
        onCell: () => ({style: {paddingTop: '0.25rem', paddingBottom: 0}}),
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
