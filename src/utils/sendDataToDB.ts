import { OrderSchema } from '../components/order-information';

export async function sendDataToDB(data: OrderSchema) {
  if (!data.name && !data.phone && !data.email && !data.cake) {
    throw new Error(`Invalid Data`);
  }
  try {
    const filteredData = removeEmptyProperties(data);
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(filteredData)
    });
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const result = await res.text();
    return result;
  } catch (error) {
    console.log('error', error);
  }
}

function removeEmptyProperties(obj: OrderSchema): OrderSchema {
  const newObj: OrderSchema = {} as OrderSchema;

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      if (value !== null && value !== undefined && value !== '') {
        newObj[key] = value;
      }
    }
  }

  return newObj;
}
