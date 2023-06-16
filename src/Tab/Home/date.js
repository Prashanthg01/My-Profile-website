const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

export default function LiveDate() {
  return (
    <h1>{formatDate(today)}</h1>
  );
}
