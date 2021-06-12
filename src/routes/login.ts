import fetch from 'node-fetch';
export async function post({body: {username, password}}) {
    const response = await fetch('http://localhost:5000/users');
    const users = await response.json();
    const user = users.find(
      (user) => user.username === username && user.password === password
      );
    return {
      body: {
        user: {
          username: user?.username,
          type: user?.type?.toLowerCase(),
        }
      }
    };
}