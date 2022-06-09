const Util = (name, type) => {
  const array = {
    Login: "/auth/login",
    Dashboard: "/",
    User: "/user",
    Vehicle: '/vehicle',
    Hire: "/hire"
  }; // 💬 generate link to here

  const apis = {
    Auth: "/auth/login",
    Dashboard: "/dashboard",
    User: "/user",
    Vehicle: '/vehicle',
    Hire: "/hire"
  }; // 💬 generate api to here

  switch (type) {
    case "api":
      return apis[name];
    default:
      return array[name];
  }
};
export default Util;
