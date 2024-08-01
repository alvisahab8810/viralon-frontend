// controllers/indexController.js
import { fetchData } from '../models/data';

export async function getData() {
  const data = await fetchData(); // Fetch your data from a database or an API
  return data;
}
