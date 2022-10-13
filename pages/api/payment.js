import { nanoid } from "nanoid";
import Xendit from "xendit-node";

export default async function handler(req, res) {
  const { method, body } = req;
  const { email, name, numPhone, paket, program } = body;
  //   console.log(method, body);
  if (method != "POST") {
    res.status(400).json({ message: "Bad Request", status: "400" });
  }
  const x = new Xendit({
    secretKey: process.env.XENDIT_API_KEY,
  });
  const { Invoice } = x;
  const invoiceSpecificOptions = {};
  const i = new Invoice(invoiceSpecificOptions);
  i.createInvoice({
    externalID: `invoice-${nanoid(16)}`,
    payerEmail: email,
    description:
      "Invoice pembelian kelas " + paket + ", untuk program " + program,
    amount: 4015050,
    invoiceDuration: 300,
    shouldSendEmail: true,
    successRedirectURL:
      "https://startupcampus-web-app.vercel.app/payment/success",
    customer: {
      givenNames: name,
      surname: " ",
      email: email,
      mobile_number: numPhone,
      addresses: [
        {
          city: "Jakarta Selatan",
          country: "Indonesia",
          postal_code: "12345",
          state: "Daerah Khusus Ibukota Jakarta",
          street_line1: "Jalan Makan",
          street_line2: "Kecamatan Kebayoran Baru",
        },
      ],
    },
    customerNotificationPreference: {
      invoice_created: ["email", "whatsapp"],
      invoice_reminder: ["email", "whatsapp"],
      invoice_paid: ["email", "whatsapp"],
      invoice_expired: ["email", "whatsapp"],
    },
  })
    .then((val) => {
      //   console.log(`Invoice created with ID: ${val.id}`);
      res.status(200).json(val);
    })
    .catch((err) => {
      console.log(`Fail: ${err.message}`);
      res.status(500).json({ message: err.message });
    });
}
