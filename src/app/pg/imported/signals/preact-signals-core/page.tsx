'use client';

import React from 'react';
import { computed, effect, signal } from '@/imported/signals/preact-signals-core';
import { useSignal } from '@/imported/signals/preact-signals-react-runtime';
console.log('start');
const counter = signal(0);

console.log('signal value with peek', counter.peek());

const counterSubscribed = computed(() => {
  console.log('Calculate counter subscribed...');
  return counter.value + 1;
});

const counterPeek = computed(() => {
  console.log('Calculate counter peek...');
  return counter.peek() + 1;
});

/**
 * updating initial signals relation to computed signals
 */
console.log('Initial, updating...');
counter.value = counter.value + 1;

console.log('getting the value of the computed signals', {
  sub: counterSubscribed.value,
  peek: counterPeek.value,
});

console.log('again...');
// only the subscribed signals updates, the peek one is left alone
counter.value = counter.value + 1;

console.log('getting the value of the computed signals', {
  sub: counterSubscribed.value,
  peek: counterPeek.value,
});

/**
 * effect
 */
const name = signal('Jane');
const surname = signal('Doe');
const fullName = computed(() => name.value + ' ' + surname.value);

// Logs: "Jane Doe", logs twice
effect(() => console.log('twice', fullName.value));

// this effect logs only once
effect(() => console.log('once', fullName.peek()));

// Updating one of its dependencies will automatically trigger
// the effect above, and will print "John Doe" to the console.
name.value = 'John'; // logs again

export default function PagePgPreactSignalsCore() {
  const s = useSignal(0);
  return <div>See the console and code {s}</div>;
}
