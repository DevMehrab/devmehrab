"use server";

export async function submitContactForm(formData: FormData) {
  // Add your Web3Forms Access Key here
  formData.append("access_key", "b771c5c6-4e79-4ef2-83b1-bb185290fcca");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      return { success: true };
    } else {
      return { success: false, error: data.message };
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    return { success: false, error: "Transmission failed." };
  }
}
