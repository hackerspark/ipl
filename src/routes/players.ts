import fetch from 'node-fetch';
export async function get() {
  const response = await fetch('http://localhost:5000/players');
  const players = await response.json();
  console.log(players);
  return {
      body: {
          players
      }
  };
}
