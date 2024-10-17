export async function sendMessage(message) {
  const response = await fetch('http://localhost:5000/api/ai/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) throw new Error('Failed to send message');
  const data = await response.json();
  return data.response;
}
