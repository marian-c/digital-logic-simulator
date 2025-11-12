import type { effect, ReadonlySignal, Signal } from '@/imported/signals/preact-signals-core';

export type CleanupFunction = () => void;

export type Effect = Parameters<typeof effect>[0];

export type Sig<T> = Signal<T> | ReadonlySignal<T>;
