import { plants } from "./plantdata"
const getPlantsByTheme = (theme) => {
    return Object.entries(plants)
      .filter(([key, plant]) => plant.theme.toLowerCase() === theme.toLowerCase())
      .map(([key, plant]) => ({ key, ...plant }));
  };
  
  // Example usage:
  const skincare = getPlantsByTheme("Skincare");
  export default skincare;
