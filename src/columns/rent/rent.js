import { Popconfirm, TimePicker, Tooltip } from "antd";
import EditIcon from "assets/svg/edit.js";
import RemoveIcon from "assets/svg/remove.js";
import React, {Fragment} from "react";
import {Avatar} from "components";
import {routerLinks} from "utils";
import TextArea from "antd/lib/input/TextArea";
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
        title: t("Ngày giờ đi"),
        name: "rentdate",
        tableItem: {
          filter: { type: "search" },
          sorter: true,
          render: (text) => text.toUTCString(),
        },
        formItem: {
          type: "date",
          showTime: true,
          rules: [{ type: "required" }],
        },
    },
    {
        title: t("Ngày giờ trả"),
        name: "returndate",
        tableItem: {
          filter: { type: "search" },
          sorter: true,
          render: (text) => text.toUTCString(),
        },
        formItem: {
          type: "date",
          showTime: true,
          rules: [{ type: "required" }],
        },
    },
    {
        title: t("Người điều khiển"),
        name: "driver",
        tableItem: {
          filter: { type: "search" },
          sorter: true,
        },
        formItem: {
          rules: [{ type: "required" }],
        },
    },
    {
        title: t("Ban chỉ huy duyệt"),
        name: "bod",
        tableItem: {
          sorter: true,
          render: (text) => text && <i className="las la-check-circle la-2x" />,
        },
        formItem: {
          // condition: (data) => !!data && data.id,
          type: "checkbox",
          // condition: (values, form) => {if (values === false) {form.setFields({decline: {style: {display: 'none'}}})}},

        },
    },
    {
      title: t("Lý do hủy"),
      name: "decline",
      formItem: {
        type: "textarea",
        condition: (data, form) => form.getFieldValue('bod') !== true,

      },
    },
    {
        title: t("Ngày giờ ban chỉ huy duyệt"),
        name: "bodreviewdate",
        tableItem: {
          filter: { type: "search" },
          sorter: true,
          render: (text) => text.toUTCString(),
        },
        formItem: {
          type: "date",
          showTime: true,
          rules: [{ type: "required" }],
        },
    },
    {
      title: t("Đội 1 duyệt"),
      name: "bod1",
      tableItem: {
        sorter: true,
        render: (text) => text && <i className="las la-check-circle la-2x" />,
      },
      formItem: {
        // condition: (data) => !!data && data.id,
        type: "checkbox",
        // condition: (values, form) => {if (values === false) {form.setFields({decline: {style: {display: 'none'}}})}},

      },
    },
    {
      title: t("Ngày giờ đội 1 duyệt"),
      name: "bod1reviewdate",
      tableItem: {
        filter: { type: "search" },
        sorter: true,
        render: (text) => text.toUTCString(),
      },
      formItem: {
        type: "date",
        showTime: true,
        rules: [{ type: "required" }],
      },
    },
    {
        title: t("Ban chỉ huy đội duyệt"),
        name: "bodteam",
        tableItem: {
          sorter: true,
          render: (text) => text && <i className="las la-check-circle la-2x" />,
        },
        formItem: {
          type: "checkbox",
          // onChange: (value) => console.log("OKK")
        },
    },
    {
        title: t("Ngày giờ ban chỉ huy đội duyệt"),
        name: "bodteamreviewdate",
        tableItem: {
          filter: { type: "search" },
          sorter: true,
          render: (text) => text.toUTCString(),
        },
        formItem: {
          type: "date",
          showTime: true,
          rules: [{ type: "required" }],
        },
    },
    {
        title: t("Người đề xuất"),
        name: "proposer",
        tableItem: {
          filter: { type: "search" },
          sorter: true,
        },
        formItem: {
          rules: [{ type: "required" }],

        },
    },
    {
        title: t("Điểm đến"),
        name: "destination",
        tableItem: {
          filter: { type: "search" },
          sorter: true,
        },
        formItem: {
          rules: [{ type: "required" }],
        },
    },
    {
        title: t("Lí do mượn xe"),
        name: "reason",
        tableItem: {
          filter: { type: "search" },
          sorter: true,
        },
        formItem: {
          rules: [{ type: "required" }],
        },
    },
    {
        title: t("Nhiên liệu tiêu hao"),
        name: "fuel",
        tableItem: {
          filter: { type: "search" },
          sorter: true,
          render: (text) => text + ' lít',
        },
        formItem: {
          type: "number",
          rules: [{ type: "required" }],
        },
    },
    {
        title: t("Ngày giờ trả thực tế"),
        name: "realreturndate",
        tableItem: {
          filter: { type: "search" },
          sorter: true,
          render: (text) => text.toUTCString(),
        },
        formItem: {
          type: "date",
          showTime: true,
          rules: [{ type: "required" }],
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