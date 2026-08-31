const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export async function fetchAPI(path: string, options = {}) {
  try {
    const mergedOptions = {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    };

    // Construct the request URL
    const requestUrl = `${STRAPI_URL}/api${path}`;

    const response = await fetch(requestUrl, mergedOptions);

    if (!response.ok) {
      console.error(response.statusText);
      throw new Error(`An error occurred please try again`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch API Error:", error);
    throw error;
  }
}

export async function submitEnquiry(data: {
  name: string;
  email: string;
  phone: string;
  enquiryType: string;
  message: string;
}) {
  return fetchAPI("/enquiries", {
    method: "POST",
    body: JSON.stringify({ data }),
  });
}
