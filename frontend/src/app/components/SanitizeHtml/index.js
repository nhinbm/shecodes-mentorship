import { cloneDeep } from "lodash";
import React, { useMemo } from "react";
import sanitizeHtml from "sanitize-html";

const SanitizeHtml = ({
  rawHtml,
  allowedTags,
  allowedAttributes,
  className = "",
  htmlElement = "div",
  exclusiveFilter,
}) => {
  const allowedTagsFinal = useMemo(() => {
    if (allowedTags !== undefined && allowedTags.length) {
      return [...sanitizeHtml.defaults.allowedTags, ...allowedTags];
    }

    return [...sanitizeHtml.defaults.allowedTags];
  }, [allowedTags]);

  const allowAttributesFinal = useMemo(() => {
    const clonedAllowedAttributes = cloneDeep(
      sanitizeHtml.defaults.allowedAttributes
    );

    if (allowedAttributes !== undefined) {
      Object.keys(allowedAttributes).forEach((key) => {
        clonedAllowedAttributes[key] = allowedAttributes[key];
      });
    }
    return clonedAllowedAttributes;
  }, [allowedAttributes]);

  const cleanHtml = useMemo(
    () =>
      sanitizeHtml(rawHtml, {
        allowedTags: allowedTagsFinal,
        allowedAttributes: allowAttributesFinal,
        exclusiveFilter,
      }),
    [rawHtml, allowedTagsFinal, allowAttributesFinal]
  );

  return React.createElement(htmlElement, {
    className: `${className}`,
    dangerouslySetInnerHTML: { __html: cleanHtml },
  });
};

export default SanitizeHtml;
