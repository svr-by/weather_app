export function formatTime(timestamp) {
  const date = new Date(timestamp);
  const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  return formattedTime;
}

export function formatDate(timestamp) {
  const date = new Date(timestamp);
  const formattedDate = date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  return formattedDate;
}

export function formatTemp(temp) {
  const sign = temp > 0 ? '+' : '';
  const value = Math.round(temp);
  return `${sign}${value}°C`;
}
