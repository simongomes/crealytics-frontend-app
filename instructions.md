# Auto-complete product list with basic filtering

The general idea of this coding challenge is to implement a basic auto-complete list which will be updated dynamically while the user types in a search box. The result will be comprised of products containing information like title, price and a couple of images.

## Scope
- Please use [React](https://reactjs.org/) as your main Javascript framework. You may use additional libraries in case you feel like it.
- Since we put quite some emphasis on __tests__, we would also like to see how you verify the functionality of your service by writing some tests.
- Together with the implementation, provide a short description for other developers on how to run and use your application.
  Run and build __instructions__ as well as general __documentation__ are evaluated in a positive manner,
  as it indicates you know how to work in that environment (spoiler alert: we love documentation!).
- We also like to see your 'long division' i.e. the working out of the problem in code, so please use a public
  git repository and add commits for significant working steps.
- Create a git repository for your solution and send us the git url once done. This is not mandatory though as you may send
  the challenge as a compressed file.
## Task Description
1. Parse and load all the items from the provided product feed file (products.csv). The file contains around 20K products with the following basic product information:
	* **title**: the title of the product.
	* **gtin**: a unique identifier.
	* **gender**: The gender of that particular product can take 3 values (female, male, unisex).
	  Some falsely values in this column are inserted on purpose to see how you deal with error cases. That said, it's completely up to you to decide how you treat these rows.
	* **price**: The normal retail price of the product.
	* **sale_price**: The price of the product after a discount is applied.
	* **image_link**: The main image of the product.
	* **additional_image_link**: A comma-separated list of additional images (might be an empty field).
2. Create a web page which at its very top will contain a search box. The latter will have an auto-complete feature which will display all the products in a grid list below the search component.
3. The list should be updated on every key-press event.
4. A pagination limit of 100 elements should be applied to the results.
5. Every item of the list should contain the title, gtin, gender, the two prices (price and sale_price) together with a thumbnail of the `image_link`.
6. Each item should be expandable and on mouse click it should reveal the rest of the images as defined in the `additional_image_link`
7. The specifics of the page layout as well as the design of the individual result items is up to you.

Optional:
1. Create some basic filtering by `gender` and by `sale_price`. Specifically, create a drop down containing the three options for gender (male, female and unisex) and a check-box which once checked will include only items that are currently on sale (sale_price < price). The update on the resulting list must happen dynamically on selection.
2. Gain extra points if you fetch the images asynchronously.
3. Additional points for making the images cache-able and displayable in off-line mode, i.e. while off-line, make sure that all the images that have already been fetched from previous queries to be immediate accessible.


Good luck!