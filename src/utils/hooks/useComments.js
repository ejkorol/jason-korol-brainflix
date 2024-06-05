import { useState } from "react";
import { useParams } from "react-router-dom";
import api from "@/utils/api/api";

function useComments() {

  const { id } = useParams();
  const [comment, setComment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function postComment(payload) {
    setLoading(true);
    try {
      const res = await api.postComment(id, payload);
      setComment(res.data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    };
  };

  return { comment, loading, error, postComment };
};

export default useComments;
