export interface Heroes {
  name: string;
  age: number;
  powers: string[];
  getName?: () => string;
}
