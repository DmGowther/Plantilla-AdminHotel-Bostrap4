// LLAMAR AL EVENTO CLICK DE CADA BOTON
document.querySelector("#btnServicios").addEventListener("click", saveService);
document.querySelector("#btnHabitacion").addEventListener("click", saveRoom);
document.querySelector("#btnEmpleados").addEventListener("click", saveEmployee);
document.querySelector("#btnClientes").addEventListener("click", saveClient);
document.querySelector("#btnReservacion").addEventListener("click", saveReserv);

// DIBUJAR TABLAS
drawServiceTable();
drawHabitacionTable();
drawEmpleadoTable();
drawClienteTable();
drawReservasTable();

// PARA CAPTURAR DATOS DEL FORM SERVICIOS
function saveService() {
  var sid = document.querySelector("#txtIdServ").value,
    sname = document.querySelector("#txtNameServ").value,
    stipo = document.querySelector("#txtTipeServ").value,
    sprice = document.querySelector("#txtPriceServ").value,
    sdecrip = document.querySelector("#txtDescripServ").value,
    simgage = document.querySelector("#txtImgServ").value,
    sfechaI = document.querySelector("#txtFeIniServ").value,
    sfechaF = document.querySelector("#txtFeFinServ").value;

  addServiceToSystem(
    sid,
    sname,
    stipo,
    sprice,
    sdecrip,
    simgage,
    sfechaI,
    sfechaF
  );
  drawServiceTable();
}

function drawServiceTable() {
  var list = getServiceList(),
    tbody = document.querySelector("#tablaServicios tbody");

  tbody.innerHTML = "";

  for (var i = 0; i < list.length; i++) {
    var row = tbody.insertRow(i),
      idCell = row.insertCell(0),
      nameCell = row.insertCell(1),
      tipoCell = row.insertCell(2),
      precioCell = row.insertCell(3),
      descripcionCell = row.insertCell(4),
      imagenCell = row.insertCell(5),
      fechaICell = row.insertCell(6),
      fechaFCell = row.insertCell(7);
    // selectCell = row.insertCell(8);

    idCell.innerHTML = list[i].id;
    nameCell.innerHTML = list[i].name;
    tipoCell.innerHTML = list[i].tipo;
    precioCell.innerHTML = list[i].precio;
    descripcionCell.innerHTML = list[i].descripcion;
    imagenCell.innerHTML = list[i].imagen;
    fechaICell.innerHTML = list[i].fechaI;
    fechaFCell.innerHTML = list[i].fechaF;

    // var inputSelect = document.createElement("input");
    // inputSelect.type = "radio";
    // inputSelect.value = list[i].id;
    // selectCell.appendChild(inputSelect);

    tbody.appendChild(row);
  }
}

// PARA CAPTURAR DATOS DEL FORM HABITACIONES

function saveRoom() {
  var snroh = document.querySelector("#txtNumHab").value,
    snombreh = document.querySelector("#txtNomHab").value,
    stipoh = document.querySelector("#txtTipoHab").value,
    sdescripcionh = document.querySelector("#txtDescHab").value,
    scamah = document.querySelector("#txtTCamaHab").value,
    svistah = document.querySelector("#txtTVistaHab").value,
    stamañoh = document.querySelector("#txtTamHab").value,
    spersonash = document.querySelector("#txtMaxPHab").value,
    sprecioh = document.querySelector("#txtPrecioHab").value,
    simagenh = document.querySelector("#txtImgHab").value;

  addHabitacionToSystem(
    snroh,
    snombreh,
    stipoh,
    sdescripcionh,
    scamah,
    svistah,
    stamañoh,
    spersonash,
    sprecioh,
    simagenh
  );
  drawHabitacionTable();
}

function drawHabitacionTable() {
  var list = getHabitacionList(),
    tbody = document.querySelector("#tablaHabitacion tbody");

  tbody.innerHTML = "";

  for (var i = 0; i < list.length; i++) {
    var row = tbody.insertRow(i),
      nroCell = row.insertCell(0),
      nombreCell = row.insertCell(1),
      tipoCell = row.insertCell(2),
      descripcionCell = row.insertCell(3),
      camaCell = row.insertCell(4),
      vistaCell = row.insertCell(5),
      tamañoCell = row.insertCell(6),
      personasCell = row.insertCell(7),
      precioCell = row.insertCell(8),
      imagenCell = row.insertCell(9);

    nroCell.innerHTML = list[i].nro;
    nombreCell.innerHTML = list[i].nombre;
    tipoCell.innerHTML = list[i].tipo;
    descripcionCell.innerHTML = list[i].descripcion;
    camaCell.innerHTML = list[i].cama;
    vistaCell.innerHTML = list[i].vista;
    tamañoCell.innerHTML = list[i].tamaño;
    personasCell.innerHTML = list[i].personas;
    precioCell.innerHTML = list[i].precio;
    imagenCell.innerHTML = list[i].imagen;

    tbody.appendChild(row);
  }
}

// PARA CAPTURAR DATOS DEL FORM EMPLEADOS

function saveEmployee() {
  var snombreEmp = document.querySelector("#txtNombreEmpl").value,
    sapellidoEmp = document.querySelector("#txtApellEmpl").value,
    sdniEmp = document.querySelector("#txtDniEmpl").value,
    sareaEmp = document.querySelector("#txtAreaEmpl").value,
    stelefonoEmp = document.querySelector("#txtTelEmpl").value,
    sfechanacEmp = document.querySelector("#txtFNacEmpl").value,
    sciudadEmp = document.querySelector("#txtCiudadEmpl").value,
    spostalEmp = document.querySelector("#txtPostalEmpl").value,
    scargoEmp = document.querySelector("#txtCargoEmpl").value,
    sdireccionEmp = document.querySelector("#txtDirecEmpl").value,
    scorreoEmp = document.querySelector("#txtCorreoEmpl").value,
    susuarioEmp = document.querySelector("#txtUsuarioEmpl").value;

  addEmpleadoToSystem(
    snombreEmp,
    sapellidoEmp,
    sdniEmp,
    sareaEmp + stelefonoEmp,
    sfechanacEmp,
    sciudadEmp,
    spostalEmp,
    scargoEmp,
    sdireccionEmp,
    scorreoEmp,
    susuarioEmp
  );
  drawEmpleadoTable();
}

function drawEmpleadoTable() {
  var list = getEmpleadoList(),
    tbody = document.querySelector("#tablaEmpleados tbody");

  tbody.innerHTML = "";

  for (var i = 0; i < list.length; i++) {
    var row = tbody.insertRow(i),
      nombreCell = row.insertCell(0),
      apellidoCell = row.insertCell(1),
      dniCell = row.insertCell(2),
      telefonoCell = row.insertCell(3),
      fechanacCell = row.insertCell(4),
      ciudadCell = row.insertCell(5),
      postalCell = row.insertCell(6),
      cargoCell = row.insertCell(7),
      direccionCell = row.insertCell(8),
      correoCell = row.insertCell(9),
      usuarioCell = row.insertCell(10);

    nombreCell.innerHTML = list[i].nombre;
    apellidoCell.innerHTML = list[i].apellido;
    dniCell.innerHTML = list[i].dni;
    telefonoCell.innerHTML = list[i].telefono;
    fechanacCell.innerHTML = list[i].fechanac;
    ciudadCell.innerHTML = list[i].ciudad;
    postalCell.innerHTML = list[i].postal;
    cargoCell.innerHTML = list[i].cargo;
    direccionCell.innerHTML = list[i].direccion;
    correoCell.innerHTML = list[i].correo;
    usuarioCell.innerHTML = list[i].usuario;

    tbody.appendChild(row);
  }
}

// PARA CAPTURAR DATOS DEL FORM CLIENTES

function saveClient() {
  var snombreCli = document.querySelector("#txtNombreCli").value,
    sapellidoCli = document.querySelector("#txtApellCli").value,
    sdniCli = document.querySelector("#txtDniCli").value,
    sareaCli = document.querySelector("#txtAreaCli").value,
    stelefonoCli = document.querySelector("#txtTelefonoCli").value,
    spaisCli = document.querySelector("#txtPaisCli").value,
    sciudadCli = document.querySelector("#txtCiudadCli").value,
    spostalCli = document.querySelector("#txtPostalCli").value,
    sdireccionCli = document.querySelector("#txtDirecCli").value,
    scorreoCli = document.querySelector("#txtCorreoCli").value,
    susuarioCli = document.querySelector("#txtUsuarioCli").value,
    snumeroCli = document.querySelector("#txtNumTarCli").value,
    sañoexpCli = document.querySelector("#txtAñoExpCli").value,
    smesexpCli = document.querySelector("#txtMesExpCli").value;

  addClienteToSystem(
    snombreCli + sapellidoCli,
    sdniCli,
    sareaCli + stelefonoCli,
    spaisCli,
    sciudadCli,
    spostalCli,
    sdireccionCli,
    scorreoCli,
    susuarioCli,
    snumeroCli,
    sañoexpCli + "/" + smesexpCli
  );
  drawClienteTable();
}

function drawClienteTable() {
  var list = getClienteList(),
    tbody = document.querySelector("#tablaClientes tbody");

  tbody.innerHTML = "";

  for (var i = 0; i < list.length; i++) {
    var row = tbody.insertRow(i),
      nombreCell = row.insertCell(0),
      dniCell = row.insertCell(1),
      telefonoCell = row.insertCell(2),
      paisCell = row.insertCell(3),
      ciudadCell = row.insertCell(4),
      postalCell = row.insertCell(5),
      direccionCell = row.insertCell(6),
      correoCell = row.insertCell(7),
      usuarioCell = row.insertCell(8),
      numetarjetaCell = row.insertCell(9),
      fechavenCell = row.insertCell(10);

    nombreCell.innerHTML = list[i].nombre;
    dniCell.innerHTML = list[i].dni;
    telefonoCell.innerHTML = list[i].telefono;
    paisCell.innerHTML = list[i].pais;
    ciudadCell.innerHTML = list[i].ciudad;
    postalCell.innerHTML = list[i].postal;
    direccionCell.innerHTML = list[i].direccion;
    correoCell.innerHTML = list[i].correo;
    usuarioCell.innerHTML = list[i].usuario;
    numetarjetaCell.innerHTML = list[i].numtarjeta;
    fechavenCell.innerHTML = list[i].fechaven;

    tbody.appendChild(row);
  }
}

// PARA CAPTURAR DATOS DEL FORM RESERVAS

function saveReserv() {
  var scodReserv = document.querySelector("#txtCodResv").value,
    shuespedReserv = document.querySelector("#txtHuespedResv").value,
    stipohabReserv = document.querySelector("#txtThabResv").value,
    snumhabReserv = document.querySelector("#txtNumhabResv").value,
    sprecioReserv = document.querySelector("#txtPreciohabResv").value,
    sfllegadaReserv = document.querySelector("#txtLlegResv").value,
    sfsalidaReserv = document.querySelector("#txtSalResv").value,
    sadultosReserv = document.querySelector("#txtAdultosResv").value,
    sniñosReserv = document.querySelector("#txtNiñosResv").value,
    sbebesReserv = document.querySelector("#txtBebesResv").value;

  addReservaToSystem(
    scodReserv,
    shuespedReserv,
    stipohabReserv,
    snumhabReserv,
    sprecioReserv,
    sfllegadaReserv,
    sfsalidaReserv,
    sadultosReserv,
    sniñosReserv,
    sbebesReserv
  );
  drawReservasTable();
}

function drawReservasTable() {
  var list = getReservaList(),
    tbody = document.querySelector("#tablaReservas tbody");

  tbody.innerHTML = "";

  for (var i = 0; i < list.length; i++) {
    var row = tbody.insertRow(i),
      codigoCell = row.insertCell(0),
      huespedCell = row.insertCell(1),
      tipohabCell = row.insertCell(2),
      numhabCell = row.insertCell(3),
      precioCell = row.insertCell(4),
      fechallegCell = row.insertCell(5),
      fechasalCell = row.insertCell(6),
      adultosCell = row.insertCell(7),
      niñosCell = row.insertCell(8),
      bebesCell = row.insertCell(9);

    codigoCell.innerHTML = list[i].codigo;
    huespedCell.innerHTML = list[i].huesped;
    tipohabCell.innerHTML = list[i].tipohab;
    numhabCell.innerHTML = list[i].numhab;
    precioCell.innerHTML = list[i].precio;
    fechallegCell.innerHTML = list[i].fechalleg;
    fechasalCell.innerHTML = list[i].fechasal;
    adultosCell.innerHTML = list[i].adultos;
    niñosCell.innerHTML = list[i].niños;
    bebesCell.innerHTML = list[i].bebes;

    tbody.appendChild(row);
  }
}
