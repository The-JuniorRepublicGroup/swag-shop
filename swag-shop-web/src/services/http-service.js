import 'whatwg-fetch';

class HttpService{
    getProducts = () => {
        fetch('http://localhost:3000/product')
            .then(res => {
                console.log(res.json());
            })
    }
}

export default HttpService;