export const create_user = (req, res) => {
    try {

        const data = req.body;

        const { name, age } = data;

        if (!name) return res.status(400).send({ status: false, message: 'Name is Required.' })
        if (!age) return res.status(400).send({ status: false, message: 'Age is Required.' })

        res.status(200).send('Hyyyy')
    }
    catch (err) {
        res.status(500).send({ message: "Server Error", err: err.message })
    }
}  

// status code 
// 200 => ok sucessfully fatch data 
// 201 => create new resource data in DB
// 400 => user site error
// 404 => not found 
// 500 => server site error 