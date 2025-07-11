import axios from "axios";

export const getSHA256Hash = async (input) => {
    const textAsBuffer = new TextEncoder().encode(input);
    const hashBuffer = await window.crypto.subtle.digest("SHA-256", textAsBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((item) => item.toString(16).padStart(2, "0")).join("");
  };
   
  export const shingling = async (dirtyName, k = 3) => {
    if (!dirtyName) return [];
    const cleanName = dirtyName?.replace(/ /g, "")?.toLowerCase();
    if (cleanName.length < k) {
      const hashed = await getSHA256Hash(cleanName);
      return [hashed];
    }
    const hashed = [];
    for (let i = 0; i < cleanName.length - k + 1; i++) {
      const subStr = cleanName.substring(i, i + k);
      const temp = await getSHA256Hash(subStr);
      hashed.push(temp);
    }
    return hashed;
  };
   
  export const nameMatch = async (name, fpvisitorid) =>
    axios.post(
      `${`https://samx.payglocal.in/samx/v1/compliance/check`
      }`,
      {
        fullName: await shingling(name, 3),
      },
      {
        headers: {
          // "x-gl-pg-ui": "547fdfdd2e96e7fb01244fec08a659d3",
          fpvisitorid: fpvisitorid,
          "Content-Type": "application/json",
          "x-gl-pg-ui": "547fdfdd2e96e7fb01244fec08a659d3",
        },
      }
    );
   
  export const samxLoginCheck = (ssoToken, fpvisitorid) =>
    axios.post(
      `${
        window?.location?.href === "https://payglocal.in/samruddhi-x"
          ? "https://samx.prod.payglocal.in/samx/v1/login"
          : "https://samx.uat.payglocal.in/samx/v1/login"
      }`, // Endpoint URL
      ssoToken, // Request body
      {
        headers: {
          // Headers configuration
          "Content-Type": "application/json",
          "fpvisitorid": fpvisitorid,
        },
        withCredentials: true,
      }
    );
   
  export const samxProfileDetails = (formData) =>
    axios.post(
      `${
        window?.location?.href === "https://payglocal.in/samruddhi-x"
          ? "https://samx.prod.payglocal.in/samx/v1/compliance/check/detail"
          : "https://samx.uat.payglocal.in/samx/v1/compliance/check/detail"
      }`,
      formData,
      {
        headers: {
          // Headers configuration
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );