import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_URL_DEL_BACKEND,
    credentials: "include",
    // Comprueba si existe un token y lo envia en el header
    /* prepareHeaders: (headers, { getState }) => {
      const token = getState().authToken.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    }, */
  }),
  tagTypes: ["Pets", "User"],
  endpoints: (builder) => ({
    // Registra un usuario
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "auth/register",
        method: "POST",
        body: userData,
      }),
    }),
    // Login de un usuario
    loginUser: builder.mutation({
      query: (userData) => ({
        url: "auth/login",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["User"],
    }),
    // Logout
    logoutUser: builder.query({
      query: () => "auth/logout",
    }),
    // Trae el perfil del usuario
    getUserProfile: builder.query({
      query: () => "users/profile",
      providesTags: ["User"],
    }),
    // Edita los datos del Usuario
    updateUser: builder.mutation({
      query: (userData) => ({
        url: `users/profile`,
        method: "PATCH",
        body: userData,
      }),
      invalidatesTags: ["User"],
    }),
    // Trae todas las mascotas
    getPets: builder.query({
      query: () => "pets",
      providesTags: ["Pets"],
    }),
    // Trae una mascota por el ID de la mascota
    getPetById: builder.query({
      query: (id) => `pets/${id}`,
    }),
    // Crea una mascota
    createPet: builder.mutation({
      query: (petData) => ({
        url: "pets",
        method: "POST",
        body: petData,
      }),
      invalidatesTags: ["Pets", "User"],
    }),
    // Edita los datos de una mascota con el ID de la mascota
    updatePet: builder.mutation({
      query: ({ id, petData }) => ({
        url: `pets/${id}`,
        method: "PATCH",
        body: petData,
      }),
      invalidatesTags: ["Pets", "User"],
    }),
    // Elimina una mascota con el ID de la mascota
    eliminatePet: builder.mutation({
      query: (id) => ({
        url: `pets/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Pets"],
    }),
    // Da un like a una mascota
    setLikes: builder.mutation({
      query: (petId) => ({
        url: `users/likes/${petId}`,
        method: "POST",
      }),
      invalidatesTags: ["Pets"],
    }),
    // Da un dislike a una mascota
    setDislikes: builder.mutation({
      query: (petId) => ({
        url: `users/likes/${petId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Pets"],
    }),
  }),
});

export const {
  useGetPetsQuery,
  useGetPetByIdQuery,
  useCreatePetMutation,
  useUpdatePetMutation,
  useEliminatePetMutation,
  useGetUserProfileQuery,
  useLazyGetUserProfileQuery,
  useUpdateUserMutation,
  useLoginUserMutation,
  useRegisterUserMutation,
  useLazyLogoutUserQuery,
  useSetLikesMutation,
  useSetDislikesMutation,
} = apiSlice;
