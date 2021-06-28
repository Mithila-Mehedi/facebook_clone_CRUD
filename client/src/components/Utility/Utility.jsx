const isAuthenticated = () => {
  const userInfo = localStorage.getItem("userInfo");
  if (userInfo) {
    return true;
  } else {
    return false;
  }
};
export default isAuthenticated;
