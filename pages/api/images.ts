import { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const configuration = new Configuration({
    apiKey: req.query.t as string,
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createImage({
    prompt: req.query.p as string,
    n: parseInt(req.query.n as string),
    size: "256x256",
  });
  console.log(response.data.data);
  res.status(200).json({ result: response.data.data })
}
