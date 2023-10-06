// eslint-disable-next-line react-refresh/only-export-components
const DEBUG = false;

const local = "http://localhost:8000/api-urls"
const prod = "https://mahmed-27d24cd5e028.herokuapp.com/api-urls"

export const BACKEND_URL = DEBUG ? local : prod