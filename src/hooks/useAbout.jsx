import axios from "axios";
import { useEffect, useState } from "react";
import { __API_URL__ } from "../const";

export default function useAbout() {
  const [state, setState] = useState();
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    var cancelHandler = axios.CancelToken.source();

    axios
      .get(`${__API_URL__}/api-urls/about/`, {
        cancelToken: cancelHandler.token,
      })
      .then((res) => {
        setState(res.data);
        setHasLoaded(true);
      })
      .catch((err) => {
        if (!axios.isCancel(err)) {
          console.log(err);
        }
      });
    return () => {
      cancelHandler.cancel();
    };
  }, []);

  return { state, hasLoaded }
}
