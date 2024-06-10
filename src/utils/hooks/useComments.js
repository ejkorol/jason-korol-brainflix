import { useState } from "react";
import api from "@/utils/api/api";

function useComments() {

  const [comment, setComment] = useState(null);
  const [error, setError] = useState(null);

  async function postComment(id, payload) {
    try {
      const res = await api.postComment(id, payload);
      setComment(res.data);
    } catch (e) {
      setError(e.message);
    };
  };

  return { comment, error, postComment };
};

export default useComments;
