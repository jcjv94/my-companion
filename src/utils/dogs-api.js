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

export function update(dog) {
    return fetch(`${BASE_URL}/${dog._id}`, {
      method: 'PUT',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(dog)
    }).then(res => res.json());
  }

export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE'
    }).then(res => res.json());
  }

  export function addNote(note, id) {
    return fetch(`${BASE_URL}/notes/${id}`, {
        method: 'PUT',
        headers:{'content-type': 'application/json'},
        body:JSON.stringify(note)
    }).then(res => res.json());
  }