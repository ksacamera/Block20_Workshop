const users = [
  { name: "John", age: 25, occupation: "Gardener" },
  { name: "Lenny", age: 51, occupation: "Programmer" },
  { name: "Andrew", age: 43, occupation: "Teacher" },
  { name: "Peter", age: 81, occupation: "Teacher" },
  { name: "Anna", age: 43, occupation: "Teacher" },
  { name: "Albert", age: 76, occupation: "Programmer" },
  { name: "Adam", age: 47, occupation: "Teacher" },
  { name: "Robert", age: 72, occupation: "Driver" },
];

const main = () => {
  const root = document.getElementById(`root`);
  const h1 = document.createElement(`h1`);
  h1.innerHTML = `FREELANCERS`;
  root.appendChild(h1);

  const userList = document.createElement("ul");
  root.appendChild(userList);

  users.forEach((user) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Name: ${user.name}, Age: ${user.age}, Occupation: ${user.occupation}`;
    userList.appendChild(listItem);
  });

  h1.style.backgroundColor = "darkgreen";
  h1.style.color = "whitesmoke";
  h1.style.padding = "5px";
};

main();
//call the main function
