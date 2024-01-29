import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.0.114:8080/"
});

function createacont() {
    api.post('/api/createacont')
    .then(response => {
        console.log(response.data); // Aqui estão os dados dos usuários
    })
    .catch(error => {
        console.error(error);
    });
}

const UserService = {
    createacont,
}

export default UserService;
