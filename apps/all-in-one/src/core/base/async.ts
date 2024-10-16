export type Resolve<T> = (value: T | PromiseLike<T>) => void;

export const createDeferredPromise = <T>() => {
  let resolve: Resolve<T> = () => {};
  const promise = new Promise<T>((res) => {
    resolve = res;
  });
  return {
    promise,
    resolve,
  };
};
