import React from 'react';
import DOMPurify from 'dompurify';

const sanitizeAndRenderHTML = (htmlContent) => {
  const sanitizedHTML = DOMPurify.sanitize(htmlContent);
  return { __html: sanitizedHTML };
};

const SanitizeAndRenderHTML = ({html}) => {
  return (
    <div dangerouslySetInnerHTML={sanitizeAndRenderHTML(html)} />
  );
};

export default SanitizeAndRenderHTML;


// const config = {
//     ALLOWED_TAGS: ['p', 'strong', 'em', 'a'],
//     ALLOWED_ATTR: ['href', 'title'],
// };
// const sanitizedHTML = DOMPurify.sanitize(userGeneratedHTML, config);