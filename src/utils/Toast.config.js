import toast from "react-hot-toast";

export const toastView = (message, type, positionToast = "top-center") => {
  switch (type) {
    case "success":
      toast.success(message, { position: positionToast });
      break;
    case "error":
      toast.error(message, { position: positionToast });
      break;
    default:
      break;
  }
};
