import { plants } from "./plantdata"
const getPlantsByTheme = (theme) => {
    return Object.entries(plants)
      .filter(([key, plant]) => plant.theme === theme)
      .map(([key, plant]) => ({ name: plant.title, ...plant }));
  };
  
  // Example usage:
  const haircare = getPlantsByTheme("Haircare");
  export default haircare;
