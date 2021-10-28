/**
 * JSX a11y (v6.4.1)
 *
 * https://github.com/evcohen/eslint-plugin-jsx-a11y
 */
 module.exports = {
    plugins: ['jsx-a11y'],
    rules: {
        'jsx-a11y/alt-text': 'error',                                       // Enforce all elements that require alternative text have meaningful information to relay back to end user.
        'jsx-a11y/anchor-has-content': 'error',                             // Enforce all anchors to contain accessible content.
        'jsx-a11y/anchor-is-valid': 'error',                                // Enforce all anchors are valid, navigable elements.
        'jsx-a11y/aria-activedescendant-has-tabindex': 'error',             // Enforce elements with aria-activedescendant are tabbable.
        'jsx-a11y/aria-props': 'error',                                     // Enforce all aria-* props are valid.
        'jsx-a11y/aria-proptypes': 'error',                                 // Enforce ARIA state and property values are valid.
        'jsx-a11y/aria-role': 'error',                                      // Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.
        'jsx-a11y/aria-unsupported-elements': 'error',                      // Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
        'jsx-a11y/autocomplete-valid': 'error',                             // Ensure the autocomplete attribute is correct and suitable for the form field it is used with.
        'jsx-a11y/click-events-have-key-events': 'error',                   // Enforce a clickable non-interactive element has at least one keyboard event listener.
        'jsx-a11y/heading-has-content': 'error',                            // Enforce heading (h1, h2, etc) elements contain accessible content.
        'jsx-a11y/html-has-lang': 'error',                                  // Enforce <html> element has lang prop.
        'jsx-a11y/iframe-has-title': 'error',                               // Enforce iframe elements have a title attribute.
        'jsx-a11y/img-redundant-alt': 'error',                              // Enforce <img> alt prop does not contain the word 'image', 'picture', or 'photo'.
        'jsx-a11y/interactive-supports-focus': 'error',                     // Enforce that elements with interactive handlers like onClick must be focusable.
        'jsx-a11y/label-has-associated-control': 'error',                   // Enforce that <label> elements have the htmlFor prop, or have form control nested within. We have to turn this off because it doesn’t work nicely with styled-components: it doesn’t know what is or isn’t a label/input and having a manually curated list of styled-component names (eg. StyledLabel, StyledInput) is terrible. So, off for now.
        'jsx-a11y/lang': 'error',                                           // Enforce lang attribute has a valid value.
        'jsx-a11y/media-has-caption': 'off',                                // Enforces that <audio> and <video> elements must have a <track> for captions.
        'jsx-a11y/mouse-events-have-key-events': 'error',                   // Enforce that onMouseOver/onMouseOut are accompanied by onFocus/onBlur for keyboard-only users.
        'jsx-a11y/no-access-key': 'error',                                  // Enforce that the accessKey prop is not used on any element to avoid complications with keyboard commands used by a screenreader.
        'jsx-a11y/no-autofocus': 'error',                                   // Enforce autoFocus prop is not used.
        'jsx-a11y/no-distracting-elements': 'error',                        // Enforce distracting elements are not used.
        'jsx-a11y/no-interactive-element-to-noninteractive-role': 'error',  // Interactive elements should not be assigned non-interactive roles.
        'jsx-a11y/no-noninteractive-element-interactions': 'error',         // Non-interactive elements should not be assigned mouse or keyboard event listeners.
        'jsx-a11y/no-noninteractive-element-to-interactive-role': 'error',  // Non-interactive elements should not be assigned interactive roles.
        'jsx-a11y/no-noninteractive-tabindex': 'error',                     // tabIndex should only be declared on interactive elements.
        'jsx-a11y/no-onchange': 'error',                                    // Enforce usage of onBlur over onChange on select menus for accessibility.
        'jsx-a11y/no-redundant-roles': 'error',                             // Enforce explicit role property is not the same as implicit/default role property on element.
        'jsx-a11y/no-static-element-interactions': 'error',                 // Enforce that non-interactive, visible elements (such as <div>) that have click handlers use the role attribute.
        'jsx-a11y/role-has-required-aria-props': 'error',                   // Enforce that elements with ARIA roles must have all required attributes for that role.
        'jsx-a11y/role-supports-aria-props': 'error',                       // Enforce that elements with explicit or implicit roles defined contain only aria-* properties supported by that role.
        'jsx-a11y/scope': 'error',                                          // Enforce scope prop is only used on <th> elements.
        'jsx-a11y/tabindex-no-positive': 'error',                           // Enforce tabIndex value is not greater than zero.
    },
};
