export const AddSpaceOnPhone = (phoneNo: string): string => {
    return phoneNo.substring(0, 4) + ' ' + phoneNo.substring(4, phoneNo.length);
  };
  