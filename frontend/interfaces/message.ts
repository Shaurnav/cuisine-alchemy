export interface MessageProps {
  text: string;
  sender: 'user' | 'bot'; // Assuming only two sides, user and bot
}
