export interface IDisposable {
  dispose(): void;
}

export const toDisposable = (dispose: () => void): IDisposable => ({ dispose })