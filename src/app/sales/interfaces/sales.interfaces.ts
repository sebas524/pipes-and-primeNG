export enum Color {
  red,
  yellow,
  blue,
  green,
  black,
  purple,
}

export interface Hero {
  name: string;
  flies: boolean;
  color: Color;
}
