import { RetroItem } from './retro-item';

export type RetroBoard = Readonly<Partial<{
  $key: string,
  title: string,
  retroItems: [RetroItem]
  date: number;
}>>;
