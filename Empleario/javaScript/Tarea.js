class Tarea {
    constructor(id, titulo, descripcion, estado, prioridad, fechaEntrega) {
        this.id = id
        this.titulo = titulo
        this.descripcion = descripcion
        this.estado = estado
        this.prioridad = prioridad
        this.fechaEntrega = fechaEntrega
    }
}

class ServicioTareas {
    constructor() {
        this.tareas = [];
    }

    //METODOS
    nuevaTarea(tarea) {
        this.tareas.push(tarea);
    }
    tareasTodas() {
        return this.tareas;
    }

    tareasPorEstado(estado) {
        return this.tareas.filter(t => t.estado === estado);
    }

    tareasPorPrioridad(prioridad) {
        return this.tareas.filter(p => p.prioridad === prioridad)

    }

    tareasActualizar(id, data) {
        const t = this.tareas.find(t => t.id === id);
        if (!t) return false;
        Object.assign(t, data);
        return true;
    }

    tareasBorrar(id) {
        const i = this.tareas.findIndex(t => t.id === id);
        if (i === -1) return false;
        this.tareas.splice(i, 1);
        return true;
    }
}

const service = new ServicioTareas();

service.nuevaTarea(new Tarea(1, "Comprar comida", "Ir al super", "pendiente", "alta", new Date("2025-07-02")));
service.nuevaTarea(new Tarea(2, "Entrenamiento", "Ir al Gym", "en progreso", "media", new Date("2025-07-05")));
service.nuevaTarea(new Tarea(3, "Estudiar para el Examen", "Capitulo 4 y 5", "completada", "baja", new Date("2025-07-01")));

// Todas las tareas
console.log("Todas las tareas:", service.tareasTodas());

// Filtrar por estado de Tareas
console.log("Tareas pendientes:", service.tareasPorEstado("pendiente"));

// Filtrar por prioridad de Tareas
console.log("Tareas de prioridad alta:", service.tareasPorPrioridad("alta"));
console.log("Tareas de prioridad baja:", service.tareasPorPrioridad("baja"));

// Actualizando una tarea
service.tareasActualizar(2, { estado: "completada", prioridad: "alta" });
console.log("Tareas después de actualizar el estado y/o la prioridad:", service.tareasTodas());

// Borrar una tarea
service.tareasBorrar(1);
console.log("Después de eliminar la tarea 1:", service.tareasTodas());