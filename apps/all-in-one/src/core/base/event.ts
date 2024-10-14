import { IDisposable } from "./disposable";

export type Event<T> = (listener: (e: T) => any) => IDisposable;
export type ListenerOfEvent<T> = Parameters<Event<T>>[0]