import express from "express";
const router = express.Router();
import productosEnEmpresa from "../manangers/productMananger.js";
const productMananger=productosEnEmpresa
export let data = await productMananger.getProducts();


router.get(`/`, async (req, res) => {
  res.render(`home`, {
    data,
    style:"listaEstatica.css"
  });
});

router.get(`/realtimeproducts`, async (req, res) => {
  res.render(`realtimeProducts`, {
    style:"listaEstatica.css"
  });
});
export default router;
