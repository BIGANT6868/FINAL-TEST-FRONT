import { createContext, useState, useEffect } from 'react';

// 创建 Context
export const AuthContext = createContext();

// 提供 Provider 包裹整个 App
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // 存储用户信息
  const [token, setToken] = useState(null); // 存储 JWT token
  const [loading, setLoading] = useState(true); // 页面加载状态

  // 页面刷新时从 localStorage 恢复登录状态
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    const savedToken = localStorage.getItem('token');
    if (savedUser && savedToken) {
      setUser(JSON.parse(savedUser));
      setToken(savedToken);
    }
    setLoading(false);
  }, []);

  // 登录时调用
  const login = (userData, jwtToken) => {
    setUser(userData);
    setToken(jwtToken);
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', jwtToken);
  };

  // 登出时调用
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
