export interface ITarget {
  write<T>(logs: T[]):void;
}
