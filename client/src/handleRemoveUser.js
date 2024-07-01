const handleDeleteUser = (userToDelete, setBackendData) => {
    fetch("/api", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: userToDelete }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.users) {
          setBackendData(data.users.map((user) => ({ text: user })));
        }
      });
  };
  
  export default handleDeleteUser;
  