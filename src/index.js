const getUsers = async () => {
  const users = await axios.get("http://localhost:3000/users");
  console.log(users.data);
};

const postUser = async () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  await axios.post("http://localhost:3000/users", {
    title: name,
    author: email,
    number: password,
  });
};
getUsers();
