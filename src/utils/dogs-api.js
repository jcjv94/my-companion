const BASE_URL = '/api/dogs';

export function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json());
}

export function create(dog) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(dog)
    }).then(res => res.json());
}

