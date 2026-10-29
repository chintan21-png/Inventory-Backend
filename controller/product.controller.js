import Product from "../model/product.model.js";

export const createProduct = async (req, res) => {
     const {
      name,
      category,
      price,
      quantity,
    //   manufactureDate,
    //   supplier,
      availability,
    } = req.body;

  try {
    const product = await Product.create({
      name,
      category,
      price,
      quantity,
    //   manufactureDate,
    //   supplier,
      availability,
    });

    return res.status(201).json({
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    if (!products) {
      return res.status(404).json({
        message: "Product Not Found",
      });
    }

    return res.status(200).json({
      message: "Product fetched successfully",
      products,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const updateProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const {
      name,
      category,
      price,
      quantity,
    //   manufactureDate,
    //   supplier,
      availability,
    } = req.body;
        const product = await Product.findById(id);

        if(!product) {
            return res.status(404).json({
                message: "Product not found"
            })
        }

        product.name = name ?? product.name
        product.category = category ?? product.category
        product.price = price ?? product.price
        product.quantity = quantity ?? product.quantity
        // product.manufactureDate = manufactureDate ?? product.manufactureDate
        // product.supplier = supplier ?? product.supplier
        product.availability = availability ?? product.availability

        await product.save();

        return res.status(200).json({
            message: "Product Updated Successfully",
            product
        })
    }

    catch(error) {
        res.status(500).json({
            message: "Internal server error"
        })
    }
};

export const deleteProduct = async(req,res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);

        if(!product) {
            return res.status(404).json({
                message: "Product not found"
            })
        }

        await product.deleteOne();

        return res.status(200).json({
            message: "Product deleted Successfully"
        })
    }

    catch(error) {
        res.status(500).json({
            message: 'Internal server error'
        })
    }
}
