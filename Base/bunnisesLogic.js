var serviceList = []; // Array de servicios
var habtacionesList = []; // Array de habitaciones
var empleadosList = []; // Array de empleados
var clientesList = []; // Array de clientes
var reservasList = []; // Array de reservas

// FUNCIONES PARA SERVICIOS
function addServiceToSystem(
  pid,
  pname,
  ptipo,
  pprecio,
  pdescripcion,
  pimagen,
  pfechaI,
  pfechaF
) {
  var newService = {
    id: pid,
    name: pname,
    tipo: ptipo,
    precio: pprecio,
    descripcion: pdescripcion,
    imagen: pimagen,
    fechaI: pfechaI,
    fechaF: pfechaF,
  };
  serviceList.push(newService);
  localStorageServiceList(serviceList);
}

function getServiceList() {
  var storageListService = localStorage.getItem("localServiceList");
  if (storageListService == null) {
    serviceList = [];
  } else {
    serviceList = JSON.parse(storageListService);
  }
  return serviceList;
}

function localStorageServiceList(pServicelist) {
  localStorage.setItem("localServiceList", JSON.stringify(pServicelist));
}

// FUNCIONES PARA HABITACIONES

function addHabitacionToSystem(
  pnroh,
  pnombreh,
  ptipoh,
  pdescripcionh,
  pcamah,
  pvistah,
  ptamañoh,
  ppersonash,
  pprecioh,
  pimagenh
) {
  var newHabitacion = {
    nro: pnroh,
    nombre: pnombreh,
    tipo: ptipoh,
    descripcion: pdescripcionh,
    cama: pcamah,
    vista: pvistah,
    tamaño: ptamañoh,
    personas: ppersonash,
    precio: pprecioh,
    imagen: pimagenh,
  };
  habtacionesList.push(newHabitacion);
  localStorageHabitacionList(habtacionesList);
}

function getHabitacionList() {
  var storageListHabitacion = localStorage.getItem("localHabitacionList");
  if (storageListHabitacion == null) {
    habtacionesList = [];
  } else {
    habtacionesList = JSON.parse(storageListHabitacion);
  }
  return habtacionesList;
}

function localStorageHabitacionList(pHabitacionlist) {
  localStorage.setItem("localHabitacionList", JSON.stringify(pHabitacionlist));
}

// FUNCIONES PARA EMPLEADOS

function addEmpleadoToSystem(
  pnombreEmp,
  papellidoEmp,
  pdniEmp,
  ptelefonoEmp,
  pfechanacEmp,
  pciudadEmp,
  ppostalEmp,
  pcargoEmp,
  pdireccionEmp,
  pcorreoEmp,
  pusuarioEmp
) {
  var newEmpleado = {
    nombre: pnombreEmp,
    apellido: papellidoEmp,
    dni: pdniEmp,
    telefono: ptelefonoEmp,
    fechanac: pfechanacEmp,
    ciudad: pciudadEmp,
    postal: ppostalEmp,
    cargo: pcargoEmp,
    direccion: pdireccionEmp,
    correo: pcorreoEmp,
    usuario: pusuarioEmp,
  };
  empleadosList.push(newEmpleado);
  localStorageEmpleadoList(empleadosList);
}

function getEmpleadoList() {
  var storageListEmpleado = localStorage.getItem("localEmpleadoList");
  if (storageListEmpleado == null) {
    empleadosList = [];
  } else {
    empleadosList = JSON.parse(storageListEmpleado);
  }
  return empleadosList;
}

function localStorageEmpleadoList(pEmpleadolist) {
  localStorage.setItem("localEmpleadoList", JSON.stringify(pEmpleadolist));
}

// FUNCIONES PARA CLIENTES

function addClienteToSystem(
  pnombreCli,
  pdniCli,
  ptelefonoCli,
  ppaisCli,
  pciudadCli,
  ppostalCli,
  pdireccionCli,
  pcorreoCli,
  pusuarioCli,
  pnumtarjetaCli,
  pfechavenCli
) {
  var newCliente = {
    nombre: pnombreCli,
    dni: pdniCli,
    telefono: ptelefonoCli,
    pais: ppaisCli,
    ciudad: pciudadCli,
    postal: ppostalCli,
    direccion: pdireccionCli,
    correo: pcorreoCli,
    usuario: pusuarioCli,
    numtarjeta: pnumtarjetaCli,
    fechaven: pfechavenCli,
  };
  clientesList.push(newCliente);
  localStorageClienteList(clientesList);
}

function getClienteList() {
  var storageListCliente = localStorage.getItem("localClienteList");
  if (storageListCliente == null) {
    clientesList = [];
  } else {
    clientesList = JSON.parse(storageListCliente);
  }
  return clientesList;
}

function localStorageClienteList(pClientelist) {
  localStorage.setItem("localClienteList", JSON.stringify(pClientelist));
}

// FUNCIONES PARA RESERVAS

function addReservaToSystem(
  pcodres,
  phuespedres,
  ptipohabres,
  pnumhabres,
  ppreciores,
  pfechallegres,
  pfechasalres,
  padultosres,
  pniñosres,
  pbebesres
) {
  var newReserva = {
    codigo: pcodres,
    huesped: phuespedres,
    tipohab: ptipohabres,
    numhab: pnumhabres,
    precio: ppreciores,
    fechalleg: pfechallegres,
    fechasal: pfechasalres,
    adultos: padultosres,
    niños: pniñosres,
    bebes: pbebesres,
  };
  reservasList.push(newReserva);
  localStorageReservaList(reservasList);
}

function getReservaList() {
  var storageListReserva = localStorage.getItem("localReservaList");
  if (storageListReserva == null) {
    reservasList = [];
  } else {
    reservasList = JSON.parse(storageListReserva);
  }
  return reservasList;
}

function localStorageReservaList(pReservalist) {
  localStorage.setItem("localReservaList", JSON.stringify(pReservalist));
}
