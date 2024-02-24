import iconArcade from "./assets/images/icon-arcade.svg";
import iconAdvanced from "./assets/images/icon-advanced.svg";
import iconPro from "./assets/images/icon-pro.svg";

export const fetchedAddOns = [
    {
      id: 1,
      header: "Online service",
      subtext: "Access to multiplayer games",
      basePrice: 1,
      discount: 2,
    },
    {
      id: 2,
      header: "Larger storage",
      subtext: "Extra 1TB of cloud save",
      basePrice: 2,
      discount: 2,
    },
    {
      id: 3,
      header: "Customizable profile",
      subtext: "Custom theme on your profile",
      basePrice: 2,
      discount: 2,
    },
  ];
  
  export const fetchedPlans = [
    { id: 1, icon: iconArcade, name: "Arcade", basePrice: 9, discount: 2 },
    {
      id: 2,
      icon: iconAdvanced,
      name: "Advanced",
      basePrice: 12,
      discount: 2,
    },
    { id: 3, icon: iconPro, name: "Pro", basePrice: 15, discount: 2 },
  ];