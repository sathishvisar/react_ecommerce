// Slugify.js
const slugify = (name) => {
    return name
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/[^\w-]+/g, '') // Remove non-word characters (except hyphens)
      .replace(/--+/g, '-') // Replace consecutive hyphens with a single hyphen
      .replace(/^-+/, '') // Remove leading hyphens
      .replace(/-+$/, ''); // Remove trailing hyphens
};
  
export default slugify;
  