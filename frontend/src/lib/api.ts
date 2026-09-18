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
      console.warn(`API Error: ${response.statusText}`);
      throw new Error(`An error occurred please try again`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.warn("Fetch API Error:", error);
    throw error;
  }
}

export async function submitEnquiry(data: {
  enquiryType: string;
  adaptiveAnswer?: string;
  location?: string;
  size?: string;
  description?: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  preferredContact?: string;
}, file?: File) {
  const formData = new FormData();
  formData.append("data", JSON.stringify(data));
  if (file) {
    formData.append("attachment", file);
  }

  const response = await fetch("/api/enquiry", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new Error(errorData?.error || "Failed to submit enquiry");
  }

  return response.json();
}
