// Get references to the category links and products
const categoryLinks = document.querySelectorAll('.col-category a');
const products = document.querySelectorAll('.col-products .product');

// Show only the burgers category by default
const defaultCategory = 'Burgers';
products.forEach(product => {
  const productCategory = product.dataset.category;

  if (productCategory === defaultCategory) {
    product.style.display = 'block';
  } else {
    product.style.display = 'none';
  }
});

// Add event listener to each category link
categoryLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    // Get the selected category from the clicked link's data attribute
    const selectedCategory = link.dataset.category;

    // Loop through each product and show/hide based on selected category
    products.forEach(product => {
      const productCategory = product.dataset.category;

      if (productCategory === selectedCategory) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  });
});
