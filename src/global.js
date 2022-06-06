import React, {useCallback, useContext, useEffect, useState} from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { ConfigProvider } from 'antd';
import viVN from "antd/lib/locale/vi_VN";
import enUS from "antd/lib/locale/en_US";
import moment from "moment";
import 'moment/locale/vi';

import {keyRefreshToken, keyToken, keyUser} from "variable";

export const AuthContext = React.createContext({
  user: {},
  permission: {},
  title: "",
  formatDate: "YYYY-MM-DD",
  setTitlePage: () => {},
  login: () => {},
  logout: () => {},
  changeLanguage: () => {},
  changePermission: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

const Global = ({ children }) => {
  let [user, setUser] = useState(JSON.parse(localStorage.getItem(keyUser)));
  const [title, setTitle] = useState("");
  const [locale, set_locale] = useState();
  const [permission, set_permission] = useState({});
  const [formatDate, set_formatDate] = useState('YYYY-MM-DD');
  const { t, i18n } = useTranslation();

  const login = (data) => {
    localStorage.setItem(keyUser, JSON.stringify(data));
    setUser(data)
    localStorage.setItem(keyToken, data.token);
    localStorage.setItem(keyRefreshToken, data.refreshToken);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(keyUser)
  };

  const setTitlePage = useCallback((name) => {
    document.title = t(name);
    setTitle(name);
  }, [t]);

  const changeLanguage = useCallback((values) => {
    i18n.changeLanguage(values);
    axios.defaults.headers.common["X-localization"] = values;
    moment.locale(values);
    switch (values) {
      case 'vi':
        set_locale(viVN);
        set_formatDate('DD-MM-YYYY');
        break;
      default:
        set_locale(enUS);
        set_formatDate('DD-MM-YYYY');
    }
  }, [i18n]);

  const changePermission = (value) => {
    console.log(value);
    set_permission(value);
  };

  const clearTempLocalStorage = () => {
    const arr = [];
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i).indexOf('temp-') === 0) {
        arr.push(localStorage.key(i));
      }
    }
    for (let i = 0; i < arr.length; i++) {
      localStorage.removeItem(arr[i]);
    }
  };

  useEffect(() => {
    changeLanguage(localStorage.getItem("i18nextLng"));
    clearTempLocalStorage();
    const token = localStorage.getItem(keyToken);
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    }
  }, [user, changeLanguage]);

  return (
    <AuthContext.Provider
      value={{
        user, permission, title, formatDate, setTitlePage, login, logout, changeLanguage,
        changePermission,
      }}
    >
      <ConfigProvider locale={locale}>
        {children}
      </ConfigProvider>
    </AuthContext.Provider>
  );
};
export default Global;
