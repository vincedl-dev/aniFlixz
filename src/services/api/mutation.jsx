import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addPost, deleteTodo } from "./index";

export function createPost() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => addPost(data),
    onMutate: () => {
      console.log("mutate");
    },
    onError: (err) => {
      console.log("error");
      console.log(err);
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onSettled: async (_, error, isSuccess, data) => {
      console.log(isSuccess);
      console.log(error);
      console.log(data);
      await queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
}

export function deleteTodoData() {
  return useMutation({
    mutationFn: (id) => deleteTodo(id),

    onSettled: async (_, error) => {
      if (error) {
        console.log("error");
      }
    },
  });
}
