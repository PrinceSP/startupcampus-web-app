import Xendit from "xendit-node";

export default async function handler(req, res) {
  const { id, status } = req.body;
  res.redirect(307, `/payment/${id}`);
}
