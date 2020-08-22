import axios from 'axios';
import "regenerator-runtime/runtime.js";

const getUsers = async (req, res) => {
    const users = await axios.get('https://api.github.com/users');
    if (!users) res.status(500).json({ error: 'Something is wrong at the server' });
    res
        .status(200)
        .json(users.data)
}

const getUserByName = async (req, res) => {
    const name = req.params.name;
    try {
        const user = await axios.get(`https://api.github.com/users/${name}`);
        res
            .status(200)
            .json(user.data)
    } catch(response) {
        console.log(response)
        res
            .status(500)
            .json({ error: 'Something\'s wrong at the server' });
    }
}

export {
    getUsers,
    getUserByName
}
