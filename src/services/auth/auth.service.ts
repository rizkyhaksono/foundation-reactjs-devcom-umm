import { useMutation } from "@tanstack/react-query";

const useLoginUser = () => {
  return useMutation({
    mutationFn: async (formData: { email: string; password: string }) => {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      return response.json();
    },
  });
}

const useRegisterUser = () => {
  return useMutation({
    mutationFn: async (formData: { name: string; email: string; password: string }) => {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      return response.json();
    },
  });
}

export {
  useLoginUser,
  useRegisterUser
};