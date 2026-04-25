export enum Category {
  VEGETARIAN = "Vegetarisch",
  VEGAN = "Vegan",
  MEAT = "Fleisch",
  DRINK = "Getränke",
}

export interface Dish {
  id: string;
  number: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  icon?: string;
  image?: string;
  isBestseller?: boolean;
}
