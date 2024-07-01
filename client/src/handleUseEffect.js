import { useEffect } from "react";

const useFetchUsers = (setBackendData) => {
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        if (data.users) {
          // Assuming 'users' is an array of strings for simplicity
          setBackendData(data.users.map((user) => ({ text: user })));
        }
      });
  }, [setBackendData]);
};

export default useFetchUsers;
