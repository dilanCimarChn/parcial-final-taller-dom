export const assignments = [
  { id: 'demo-1', title: 'Ejercicio de componentes', status: 'pendiente' },
  { id: 'demo-2', title: 'Práctica de rutas', status: 'completada' },
];
export function filterAssignments(items, status) {
  return status === 'todas' ? items : items.filter(item => item.status === status);
}
