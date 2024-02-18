export interface MessageProps {
  text: string;
  name: 'chefone' | 'cheftwo' | string; // Assuming only two sides, user and bot
  chefMapping: { countryOne: string; countryTwo: string; } | undefined;
}
