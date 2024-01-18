export async function sendDataToDB() {
  try {
    const data = {
      name: 'name',
      bolo: 'Morango'
    };

    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const result = await res.text();
    console.log(result);
  } catch (error) {
    console.log('error', error);
  }
}
