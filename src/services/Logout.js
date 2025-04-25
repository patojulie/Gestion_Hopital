// src/utils/logout.js
export const logout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("role");
    window.location.href = "/"; // Redirection vers la page de connexion
  };
  