import { plants } from "./plantdata";
console.log(plants)
const getPlantsByTheme = (theme) => {
    return Object.entries(plants)
      .filter(([key, plant]) => plant.theme.toLowerCase() === theme.toLowerCase())
      .map(([key, plant]) => ({ key, ...plant }));
  };
  
  // Example usage:
  const medicinal = getPlantsByTheme("Medicinal");
  export default medicinal;
