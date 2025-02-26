// Authentication Methods Cheat Sheet (Extended)

// 1. Basic Authentication
const basicAuth = (username, password) => {
  const token = btoa(`${username}:${password}`);
  return `Basic ${token}`;
};

// 2. Token-Based Authentication
const tokenAuth = (token) => {
  return `Bearer ${token}`;
};

// 3. OAuth 2.0 Authentication
const oauth2Auth = async (clientId, clientSecret, scope) => {
  const params = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    scope: scope,
    grant_type: 'client_credentials',
  });
  const response = await fetch('https://oauth2.example.com/token', {
    method: 'POST',
    body: params,
  });
  return response.json();
};

// 4. JWT Authentication
const jwtAuth = (token) => {
  const payload = JSON.parse(atob(token.split('.')[1]));
  return payload; // Decoded JWT payload
};

// 5. Session-Based Authentication
const sessionAuth = async (sessionId) => {
  const response = await fetch(`/api/session/${sessionId}`, {
    method: 'GET',
    credentials: 'include',
  });
  return response.json();
};

// 6. Next.js API Route Example for Authentication
// pages/api/auth.js
export default async function handler(req, res) {
  const { method } = req;
  if (method === 'POST') {
    const { username, password } = req.body;
    // Logic to authenticate user
    res.status(200).json({ message: 'User authenticated' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}

// 7. React Context for Authentication
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

// 8. Custom Hook for Fetching User Data
import { useEffect, useState } from 'react';

const useFetchUser = (userId) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`/api/users/${userId}`);
      const data = await response.json();
      setUser(data);
      setLoading(false);
    };
    fetchUser();
  }, [userId]);

  return { user, loading };
};

// 9. Refresh Token Logic
const refreshToken = async (refreshToken) => {
  const response = await fetch('/api/refresh-token', {
    method: 'POST',
    body: JSON.stringify({ token: refreshToken }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};

// 10. Role-Based Access Control (RBAC)
const hasPermission = (userRoles, requiredRole) => {
  return userRoles.includes(requiredRole);
};

// 11. Multi-Factor Authentication (MFA)
const sendMfaCode = async (userId) => {
  const response = await fetch(`/api/mfa/send-code`, {
    method: 'POST',
    body: JSON.stringify({ userId }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};

const verifyMfaCode = async (userId, code) => {
  const response = await fetch(`/api/mfa/verify-code`, {
    method: 'POST',
    body: JSON.stringify({ userId, code }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};

