class Auth {
  isAuthenticated() {
    if (localStorage.token) {
      return true;
    }
    return false;
  }
}

export default new Auth();
