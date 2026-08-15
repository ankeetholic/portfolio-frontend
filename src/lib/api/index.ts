const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

export async function fetchProjects() {
  const res = await fetch(`${API_URL}/projects/`, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error('Failed to fetch projects');
  return res.json();
}

export async function fetchResearch() {
  const res = await fetch(`${API_URL}/research/`, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error('Failed to fetch research');
  return res.json();
}

export async function fetchExperience() {
  const res = await fetch(`${API_URL}/experience/`, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error('Failed to fetch experience');
  return res.json();
}

export async function fetchEducation() {
  const res = await fetch(`${API_URL}/education/`, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error('Failed to fetch education');
  return res.json();
}

export async function fetchSkills() {
  const res = await fetch(`${API_URL}/skills/`, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error('Failed to fetch skills');
  return res.json();
}

export async function sendContactMessage(data: any) {
  const res = await fetch(`${API_URL}/contact/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to send message');
  return res.json();
}

export async function sendChatMessage(message: string) {
  const res = await fetch(`${API_URL}/chat/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
  });
  const data = await res.json();
  if (!res.ok) {
    // Return the actual backend error message instead of throwing
    return { answer: data.answer || "An error occurred connecting to the backend." };
  }
  return data;
}
