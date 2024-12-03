export type SelectedApp = "square" | "hex" | null;

declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}