type TPackage = {
  pkgId: string;
  name: string;
  price: number;
  duration: "monthly" | "quarterly" | "yearly";
  features: string[];
  isDeleted?: boolean;
};

export default TPackage;
