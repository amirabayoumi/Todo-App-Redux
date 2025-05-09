import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
  category: string;
  description: string;
};

const todosApi = createApi({
  tagTypes: ["Todos"],
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://speckle-understood-powder.glitch.me/todos",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => "/",
      providesTags: ["Todos"],
    }),
    getTodoById: builder.query<Todo, string>({
      query: (id) => `/${id}`,
    }),
    addTodo: builder.mutation<Todo, { text: string; category: string }>({
      query: ({ text, category }) => ({
        url: "/",
        method: "POST",
        body: {
          text: text,
          completed: false,
          category: category,
          description:
            "No description has been added yet. Please include a thorough description that explains the task in detail, such as background information, deadlines, and any specific requirements.",
        },
      }),
      invalidatesTags: ["Todos"],
    }),
    toggleTodo: builder.mutation<Todo, { id: string; completed: boolean }>({
      query: ({ id, completed }) => ({
        url: `/${id}`,
        method: "PATCH",
        body: { completed },
      }),
      invalidatesTags: ["Todos"],
    }),
    removeTodo: builder.mutation<Todo, string>({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todos"],
    }),
    updateTodo: builder.mutation<
      Todo,
      { id: string; text: string; category: string; description: string }
    >({
      query: ({ id, text, category, description }) => ({
        url: `/${id}`,
        method: "PATCH",
        body: { text, category, description },
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export default todosApi;
export const {
  useGetTodosQuery,
  useGetTodoByIdQuery,
  useAddTodoMutation,
  useToggleTodoMutation,
  useRemoveTodoMutation,
  useUpdateTodoMutation,
} = todosApi;
