
import { Cultura, Esenciales } from "../interfaces";
import fetchApi from "../lib/strapi";

type ModelType = Esenciales | Cultura | null;
type CategoryType = "esencials" | "cultures"| "sapeos";

export const getApiData: (category: CategoryType) => Promise<ModelType[]> = async (category: CategoryType) => {
  const data = await fetchApi<ModelType[]>({
    endpoint: `${category}?populate=*`,
    wrappedByKey: "data",
  });
  return data;
}
