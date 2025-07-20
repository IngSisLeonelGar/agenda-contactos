const BASE_URL = '/api/contacts';

export async function fetchContacts() {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error('Error fetching contacts');
  return res.json();
}

export async function addContact(contact) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(contact),
  });
  if (!res.ok) throw new Error('Error adding contact');
  return res.json();
}

export async function updateContact(id, contact) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(contact),
  });
  if (!res.ok) throw new Error('Error updating contact');
  return res.json();
}

export async function deleteContact(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Error deleting contact');
  return true;
}
