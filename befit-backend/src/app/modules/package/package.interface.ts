type TPackage = {
  pkgId: string;
  name: string;
  price: number;
  duration: "মাসিক" | "ত্রৈমাসিক" | "বাৎসরিক";
  features: string[];
  isDeleted?: boolean;
};

export default TPackage;
