import TPackage from "./package.interface";
import { Package } from "./package.model";

const createPackageIntoDB = async (payload: TPackage) => {
  const result = await Package.create();
  return result;
};

export const packageServices = {
  createPackageIntoDB,
};
