import { IDisposable, toDisposable } from "./disposable";

export type Event<T> = (listener: (e: T) => any) => IDisposable;
export type ListenerOfEvent<T> = Parameters<Event<T>>[0]

export const createDisposableListenerKeeper = <T>() => {
    const set = new Set<ListenerOfEvent<T>>()
    const addItem = (listener: ListenerOfEvent<T>) => {
        return toDisposable(() => {
            set.delete(listener)
        })
    }
    return {
        add: addItem
    }
}