import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

    // 1. Extract file if present
    const file = formData.get("attachment") as File | null;
    let fileId = null;

    if (file) {
      const uploadFormData = new FormData();
      uploadFormData.append("files", file, file.name);

      const uploadRes = await fetch(`${STRAPI_URL}/api/upload`, {
        method: "POST",
        body: uploadFormData,
      });

      if (!uploadRes.ok) {
        const text = await uploadRes.text();
        console.error("Strapi File Upload Error:", text);
        return NextResponse.json({ error: "Failed to upload file to Strapi" }, { status: 500 });
      }

      const uploadedFiles = await uploadRes.json();
      fileId = uploadedFiles[0].id;
    }

    // 2. Submit Enquiry
    const enquiryData = JSON.parse(formData.get("data") as string);
    if (fileId) {
      enquiryData.attachment = fileId;
    }

    const res = await fetch(`${STRAPI_URL}/api/smart-enquiries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: enquiryData }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Strapi Enquiry Error:", text);
      return NextResponse.json({ error: "Failed to create enquiry in Strapi" }, { status: 500 });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("API Route Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
