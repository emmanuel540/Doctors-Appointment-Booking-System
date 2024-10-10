const AuthService = {
    login: async (email, password) => {
      // Simulate API call
      return { email, token: 'fake-token', role: 'patient' };
    },
    signup: async (email, password) => {
      // Simulate API call
      return { email };
    },
    getCurrentUser: () => {
      // Simulate getting user from local storage
      return { email: 'user@example.com', role: 'patient' };
    },
  };
  
  export default AuthService;
  