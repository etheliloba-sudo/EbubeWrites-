export function ErrorPanel({ title = 'Something went wrong', message = 'Please try again.' }) {
  return (
    <div className="error-panel">
      <strong>{title}</strong>
      <div style={{ marginTop: 8, color: '#ffd1d1' }}>{message}</div>
    </div>
  );
}