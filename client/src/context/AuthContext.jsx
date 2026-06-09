import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if token exists in localStorage
    const savedToken = localStorage.getItem('nearify_auth_token');
    if (savedToken) {
      const decoded = decodeJWT(savedToken);
      if (decoded && decoded.exp > Date.now() / 1000) {
        setToken(savedToken);
        const onboardingCompleted = localStorage.getItem(`nearify_onboarding_${decoded.sub}`) === 'true';
        setUser({ 
          name: decoded.name, 
          email: decoded.sub,
          hasCompletedOnboarding: onboardingCompleted
        });
      } else {
        localStorage.removeItem('nearify_auth_token');
      }
    }
    setLoading(false);
  }, []);

  const decodeJWT = (token) => {
    try {
      const [, payload] = token.split('.');
      return JSON.parse(atob(payload));
    } catch (e) {
      return null;
    }
  };

  const generateMockJWT = (userData) => {
    const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
    const payload = btoa(JSON.stringify({
      sub: userData.email,
      name: userData.name,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 60 * 60 // 1 hour
    }));
    return `${header}.${payload}.mock_signature_nearify`;
  };

  const login = async (email, password) => {
    // Mock API delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    const onboardingCompleted = localStorage.getItem(`nearify_onboarding_${email}`) === 'true';
    const mockUser = {
      name: email.split('@')[0].toUpperCase(),
      email: email,
      hasCompletedOnboarding: onboardingCompleted
    };
    
    const jwt = generateMockJWT(mockUser);
    localStorage.setItem('nearify_auth_token', jwt);
    setToken(jwt);
    setUser(mockUser);
    return mockUser;
  };

  const signup = async (name, email, password) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    // New signup always starts onboarding
    const mockUser = { 
      name, 
      email,
      hasCompletedOnboarding: false 
    };
    const jwt = generateMockJWT(mockUser);
    localStorage.setItem('nearify_auth_token', jwt);
    localStorage.setItem(`nearify_onboarding_${email}`, 'false');
    setToken(jwt);
    setUser(mockUser);
    return mockUser;
  };

  const loginWithProvider = async (provider) => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    
    // Social logins default to first-time onboarding for testing
    const email = `${provider.toLowerCase()}@nearify.com`;
    const onboardingCompleted = localStorage.getItem(`nearify_onboarding_${email}`) === 'true';
    
    const mockUser = {
      name: `${provider}_user`.toUpperCase(),
      email: email,
      hasCompletedOnboarding: onboardingCompleted
    };
    const jwt = generateMockJWT(mockUser);
    localStorage.setItem('nearify_auth_token', jwt);
    setToken(jwt);
    setUser(mockUser);
    return mockUser;
  };

  const completeOnboarding = () => {
    if (user) {
      localStorage.setItem(`nearify_onboarding_${user.email}`, 'true');
      setUser(prev => ({
        ...prev,
        hasCompletedOnboarding: true
      }));
    }
  };

  const logout = () => {
    localStorage.removeItem('nearify_auth_token');
    setToken(null);
    setUser(null);
  };

  const value = {
    user,
    token,
    isAuthenticated: !!token,
    loading,
    login,
    signup,
    loginWithProvider,
    completeOnboarding,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
