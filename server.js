// Backend starter: payment secrets must remain server-side, never in GitHub Pages files.
import express from "express";
import dotenv from "dotenv";
import { create } from "yookassa";
dotenv.config();
const app=express();app.use(express.json());
const shop=create({shopId:process.env.YOOKASSA_SHOP_ID,secretKey:process.env.YOOKASSA_SECRET_KEY});
app.post("/api/create-payment",async(req,res)=>{
 try{
  const {items,name,phone,method,address,comment}=req.body;
  if(!Array.isArray(items)||!items.length||!name||!phone)return res.status(400).json({error:"Заполните данные заказа."});
  // TODO: load product prices from trusted server-side catalog; never trust client-submitted totals.
  // This starter deliberately does not create a live charge until catalog/order validation is implemented.
  return res.status(501).json({error:"Платёжный endpoint требует подключения каталога и настройки YooKassa."});
 }catch(e){return res.status(500).json({error:"Ошибка обработки заказа."})}
});
const port=process.env.PORT||3000;app.listen(port,()=>console.log(`API listening on ${port}`));
