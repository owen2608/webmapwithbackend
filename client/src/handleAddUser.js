const handleAddUser = (newUser, setBackendData) => {
    fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: newUser }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.users) {
          setBackendData(data.users.map((user) => ({ text: user })));
        }
      });
  };
  
  export default handleAddUser;

  