import axios from "axios";
import { toast } from "react-toastify";

export const handleError = (error: any) => {
  if (axios.isAxiosError(error)) {
    const err = error.response;

    console.log("Error Response:", err); // Debugging

    if (!err) {
      toast.error("Unknown error occurred");
      return;
    }

    // Handle string error messages (e.g., 'User not found')
    if (typeof err.data === "string") {
      toast.warning(err.data);
    } 
    // Handle object or array of errors
    else if (Array.isArray(err?.data.errors)) {
      for (const val of err.data.errors) {
        toast.warning(val.description || "An error occurred");
      }
    } else if (typeof err?.data.errors === "object") {
      for (const e in err?.data.errors) {
        toast.warning(err.data.errors[e][0] || "An error occurred");
      }
    } 
    // Handle generic cases
    else if (err?.data) {
      toast.warning(err.data.message || "Something went wrong");
    } 
    // Handle 401 Unauthorized
    else if (err?.status === 401) {
      toast.warning("Please login");
      window.history.pushState({}, "LoginPage", "/login");
    } else {
      toast.warning("Unexpected error occurred");
    }
  } else {
    console.error("Unexpected error:", error);
    toast.error("Unexpected error occurred");
  }
};
