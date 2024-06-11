/* eslint-disable react/prop-types */
const ShortDesClean = ({ text }) => {
    const htmlToPlainText = (html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      return doc.body.textContent || "";
    };
  
    const plainText = htmlToPlainText(text);
  
    return <p>{plainText}</p>;
  };
  
  export default ShortDesClean;
  