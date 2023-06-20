import { api } from '@/services/api.js'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { first_name, last_name, email } = req.body

        const resp = await api.post("auth/token", {
            email: email,
            token: "TOKEN_VALUE"
        });

        //console.log( resp )

        //res.setHeader("Set-Cookie", "my-cookie=my-cookie-value; Path=/; HttpOnly");

        res.status(200).json({ resp: resp.data }); // Alterei para resp.data para enviar a resposta real da API
    } else {
        res.status(200).json({ name: 'John Doe' });
    }
}
