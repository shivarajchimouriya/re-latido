import { useToast } from "@chakra-ui/react";
import Toast from "@/components/Toast";

export default function useHandleErrorToast() {
  const toast = useToast();
  const handleErrorToast = (error: unknown) => {
    if (error instanceof Error) {
      toast({
        position: "top",
        duration: 3000,
        render: ({ onClose }) => {
          return (
            <Toast status="error" onClose={onClose} message={error?.message} />
          );
        },
      });
    } else {
      toast({
        position: "top",
        duration: 3000,
        render: ({ onClose }) => {
          return (
            <Toast
              status="error"
              onClose={onClose}
              message={"Something went wrong!"}
            />
          );
        },
      });
    }
  };

  return handleErrorToast;
}
