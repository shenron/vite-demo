import type { SetupContext } from 'vue';

export type FunctionalContext = Omit<SetupContext, 'expose'>;
