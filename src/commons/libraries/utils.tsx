export const getFirstTwoChars = (address: any) => {
  return address.substring(0, 2);
};
export const getDate = (date: any) => {
  const _date = new Date(date);
  const yyyy = _date.getFullYear();
  const mm = _date.getMonth() + 1;
  const dd = _date.getDate();
  return `${yyyy}-${mm}-${dd}`;
};

export const IDSlice = (a: any) => {
  String(a).slice(-4).toUpperCase();
};

export const checkValidationFile = (file?: File): boolean => {
  if (typeof file === "undefined") {
    alert("파일이 없습니다!");
    return false;
  }

  if (file?.size > 5 * 1024 * 1024) {
    alert("파일 용량이 너무 큽니다.(제한: 5MB)");
    return false;
  }

  if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    alert("jpeg 또는 png 파일만 업로드 가능합니다!!!");
    return false;
  }

  return true;
};

export const formatPhoneNumber = (phoneNumber: string) => {
  const cleaned = phoneNumber.replace(/\D/g, ""); // 숫자를 제외한 모든 문자 제거
  const match = cleaned.match(/^(\d{3})(\d{3,4})(\d{4})$/); // 정규식을 사용하여 그룹화

  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`; // 그룹화된 숫자를 '-'로 구분하여 조합
  }

  return phoneNumber; // 변환할 수 없는 경우 원래 번호 반환
};

export const Money = (date: any) => {
  const mmmm = date?.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  return `${mmmm}원`;
};

export const formatDateString = (date: any) => {
  const pattern = /(\d{4})-(\d{2})-(\d{2})/;
  const match = date.toString().match(pattern);

  if (match) {
    const year = match[1];
    const month = match[2];
    const day = match[3];
    return `${year}.${month}.${day}`;
  } else {
    return "Invalid date format.";
  }
};

export function replaceImageTags(content: any) {}
