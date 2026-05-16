export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  beds: number | string;
  baths: number | string;
  area: string;
  image: string;
  label?: string;
  type?: "FOR SALE" | "FOR RENT";
  className?: string; // para el manejo de display en responsive de algunos mock items
}
