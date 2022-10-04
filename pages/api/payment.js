import { nanoid } from "nanoid";
import Xendit from "xendit-node";

export default async function handler(req, res) {
  const x = new Xendit({
    secretKey: process.env.XENDIT_API_KEY,
  });
  const { Invoice } = x;
  const invoiceSpecificOptions = {};
  const i = new Invoice(invoiceSpecificOptions);
  i.createInvoice({
    externalID: `invoice-${nanoid(16)}`,
    payerEmail: "yora9f@gmail.com",
    description: "Invoice for Course Purchase",
    amount: 100000,
  }).then((val) => {
    console.log(`Invoice created with ID: ${val.id}`);
    res.status(200).json(val);
  });
}
