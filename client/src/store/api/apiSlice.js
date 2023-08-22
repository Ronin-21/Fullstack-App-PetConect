import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/",
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
  tagTypes: ["Pets"],
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
      query: (id, petData) => ({
        url: `pets/${id}`,
        method: "PATCH",
        body: petData,
      }),
    }),
    // Elimina una mascota con el ID de la mascota
    eliminatePet: builder.mutation({
      query: (id) => ({
        url: `pets/${id}`,
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
  useLoginUserMutation,
  useLogoutUserMutation,
  useRegisterUserMutation,
  useLazyLogoutUserQuery,
} = apiSlice;
