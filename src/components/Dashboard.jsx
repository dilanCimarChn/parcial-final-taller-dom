import { useState } from 'react';
import { assignments, filterAssignments } from '../data/demo';
export default function Dashboard({ items = assignments }) {
  const [status, setStatus] = useState('todas');
  const visible = filterAssignments(items, status);
  return <main><h2>Entregas de demostración</h2><p>Datos académicos ficticios, sin backend.</p>
    <label htmlFor="assignment-status">Estado</label>
    <select id="assignment-status" value={status} onChange={event => setStatus(event.target.value)}>
      <option value="todas">Todas</option><option value="pendiente">Pendientes</option><option value="completada">Completadas</option>
    </select><p role="status">{visible.length} entregas</p>
    {visible.length ? <ul>{visible.map(item => <li key={item.id}>{item.title} — {item.status}</li>)}</ul> : <p>No hay entregas para este estado.</p>}
  </main>;
}
