const tableBody = document.getElementById("table-body");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    users.forEach((user) => {
      tableBody.innerHTML += `
        <tr key={${user.id}}>
        <td data-cell="S/N">${user.id}</td>
        <td data-cell="Name">${user.name}</td>
        <td data-cell="Username">${user.username}</td>
        <td data-cell="Email">${user.email}</td>
        <td data-cell="Company">${user.company.name}</td>
        <td data-cell="Phone">${user.phone}</td>
        </tr>
      `;
    });
  });
