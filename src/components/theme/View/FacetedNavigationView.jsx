/**
 * FacetedNavigationView component.
 * @module components/theme/View/FacetedNavigationView
 */

import React from 'react';
import { defineMessages, injectIntl } from 'react-intl';

import { Container, Segment } from 'semantic-ui-react';
import { map } from 'lodash';


import { FacetedNavigation } from '@rohberg/volto-facetednavigation/components';

/**
 * Component to display the default view.
 * @function DefaultViewLeadimage
 * @param {Object} content Content object.
 * @returns {string} Markup of the component.
 */
const FacetedNavigationView = ({ intl }) => {
    return (
        <Container>
            <Segment>
                <div>I am the FacetedNavigationView</div>
                
                <div className="debug-wrapper">
                    <FacetedNavigation portaltypes="{['Pages', 'Events']}" />
                </div>
            </Segment>
        </Container>
    )
}

export default injectIntl(FacetedNavigationView);
