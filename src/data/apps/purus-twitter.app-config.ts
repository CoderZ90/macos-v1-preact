import { createAppConfig } from '__/helpers/create-app-config';

export const purusTwitterAppConfig = createAppConfig({
  title: `Twitter`,
  resizable: true,

  shouldOpenWindow: false,
  externalAction: () => window.open('https://twitter.com/', '_blank'),

  dockBreaksBefore: true,
});
