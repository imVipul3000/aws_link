<!DOCTYPE html>
<html>
<head>
<style>
table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even){background-color: #f2f2f2}

th {
  background-color: #04AA6D;
  color: white;
}
</style>
</head>
<body>

<h2>Colored Table Header</h2>

<table>
  <thead>
  <tr>
    <th>#</th>
    <th>Skill</th>
    <th>Technology</th>
    <th>Status</th>
    <th>Comments</th>
  </tr>
  </thead>
  <tbody>
  <% if (data) { %>
                    <% for(var i = 0; i < data.length; i++) { %>
                        <tr>
                            <td><%= (i + 1) %></td>
                            <td><%= data[i].Skill %></td>
                            <td><%= data[i].Technology %></td>
                            <td><%= data[i].Status %></td>
                            <td><%= data[i].Comments %></td>
                        </tr>
                    <% } %>
                <% } %>
  </tbody>
</table>

</body>
</html>


