import axios from "axios";
import { Catalog } from "./NewCatalogForm";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const sendCatalog = async (catalog: Catalog) => {
  try {
    const res = await axios.post(`${API_URL}/catalog`, catalog);
    if (res.status === 200) {
      return { success: true, message: res.data };
    } else {
      return { success: false, message: res.data };
    }
  } catch (error) {
    return {
      success: false,
      message: error.response?.data || "An unexpected error occurred",
    };
  }
};

export default sendCatalog;
