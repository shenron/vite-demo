import { Context } from '../getContextValues';
import type setup from './useApp';

export type App = Context<ReturnType<typeof setup>>;
