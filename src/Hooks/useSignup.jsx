import { toast } from "react-hot-toast";

export const useSignup = (email, name) => {
  fetch("https://college-admission-server-ten.vercel.app/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      name,
    }),
  })
    .then((res) => res.json())
    .then((result) => {
      if (result.result === "User already exists!") {
        return toast.success("Successfully Logged in!");
      } else {
        toast.success("Account created successfully");
      }
    })
    .catch((error) => {
      toast.error("Something went wrong. Try again.");
    });
};
