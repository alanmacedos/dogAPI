const DOG_API = "https://dog.ceo/api/breed/dachshund/images/random";

async function getData(url) {

    try {
        let response = await fetch(url)

        if (!response.ok) {
            throw new Error(`Respoonse status: ${response.status}`);

        }

        return await response.json();

    } catch (error) {
        console.error(error.message);
    }
}

export { getData, DOG_API };