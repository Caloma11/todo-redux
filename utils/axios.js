import axios from "axios";

// axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL; // the prefix of the URL
axios.defaults.headers.get["Accept"] = "application/json"; // default header for all get request

export { axios };
