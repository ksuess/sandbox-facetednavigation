/**
 * Add your config changes here.
 * @module config
 * @example
 * export const settings = {
 *   ...defaultSettings,
 *   port: 4300,
 *   listBlockTypes: {
 *     ...defaultSettings.listBlockTypes,
 *     'my-list-item',
 *   }
 * }
 */

import {
  settings as defaultSettings,
  views as defaultViews,
  widgets as defaultWidgets,
  blocks as defaultBlocks,
} from '@plone/volto/config';

import { FacetedNavigationView } from '~/components';

export const settings = {
  ...defaultSettings,
};

export const views = {
  ...defaultViews,
  // layoutViews: {
  //   ...defaultViews.layoutViews,
  //   facetednavigation_view: FacetedNavigationView,
  // },
  contentTypesViews: {
    ...defaultViews.contentTypesViews,
    Document: FacetedNavigationView,
  },
};

export const widgets = {
  ...defaultWidgets,
};

export const blocks = {
  ...defaultBlocks,
};

export const addonRoutes = [];
export const addonReducers = {};
