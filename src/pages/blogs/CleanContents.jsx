/* eslint-disable react/prop-types */

const CleanContents = ({ text, className }) => {
  const sanitizeHtml = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    const traverse = (node) => {
      let output = "";

      node.childNodes.forEach((child) => {
        if (child.nodeType === Node.TEXT_NODE) {
          output += child.textContent;
        } else if (child.nodeType === Node.ELEMENT_NODE) {
          const tagName = child.tagName.toLowerCase();
          const style = child.getAttribute("style");
          if (tagName === "b" || tagName === "strong") {
            output += `<b>${traverse(child)}</b>`;
          } else if (tagName === "span" && style) {
            output += `<span style="${style}">${traverse(child)}</span>`;
          } else if (tagName === "br") {
            output += "<br />";
          } else {
            const newTag = tagName; // Preserve the original tag name
            const attributes = Array.from(child.attributes)
              .filter((attr) => attr.name === "style") // Retain only the 'style' attribute
              .map((attr) => `${attr.name}="${attr.value}"`)
              .join(" ");

            output += `<${newTag} ${attributes}>${traverse(child)}</${newTag}>`;
          }
        }
      });

      return output;
    };

    return traverse(doc.body);
  };

  const sanitizedHtml = sanitizeHtml(text);

  return (
    <h2
      className={className}
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  );
};

export default CleanContents;
