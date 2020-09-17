declare const React: string;
declare module '*.jpeg';
declare module '*.json';
declare module '*.png';
declare module '*.jpg';

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
