import type { QueryKey } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const queryFn = async ({ queryKey }: { queryKey: QueryKey }) => {
  const queryURL = queryKey[0] as string;

  function setHeaders() {
    const headers = new Headers();
    headers.set("Content-Type", "application/json; charset=UTF-8");
    return headers;
  }

  const response = await fetch(queryURL, {
    headers: setHeaders(),
  }).then(async (res) => {
    const isJson = res?.headers
      ?.get("content-type")
      ?.includes("application/json");
    if (isJson) {
      const data = await res.json();
      if (res.ok) {
        return data;
      } else {
         toast('error');
        return Promise.reject({ data, res });
      }
    } else {
      throw new Error("something went wrong!");
    }
  });

  return response;
};

