<template>
  <div class="d-flex card mx-auto m-5">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">RUT</th>
          <th scope="col">Edad</th>
          <th scope="col">Fecha de nacimiento</th>
        </tr>
      </thead>
      <tbody>
        <!-- <tr>
        <th scope="row">1</th>
        <td>Andrea</td>
        <td>Castro</td>
        <td>12.345.678-9</td>
        <td>34</td>
        <td>09-01-1987</td>
      </tr> -->
        <tr v-for="(persona, $index) in personas" :key="$index">
          <th scope="row">{{ $index }}</th>
          <td>{{ persona.nombre }}</td>
          <td>{{ persona.apellido }}</td>
          <td>{{ persona.rut }}</td>
          <td>{{ persona.edad }}</td>
          <td>{{ persona.fechadenacimiento }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    personas: [
      {
        nombre: "Maria",
        apellido: "Maravilla",
        rut: "12.345.678-9",
        edad: "30",
        fechadenacimiento: "01-01-1999",
      },
      {
        nombre: "Juana",
        apellido: "Juntas",
        rut: "12.345.678-9",
        edad: "40",
        fechadenacimiento: "01-02-1998",
      },
      {
        nombre: "Loreto",
        apellido: "Lopez",
        rut: "12.345.678-9",
        edad: "50",
        fechadenacimiento: "01-03-1997",
      },
      {
        nombre: "Catalina",
        apellido: "Catalana",
        rut: "12.345.678-9",
        edad: "60",
        fechadenacimiento: "01-04-1996",
      },
    ],
  }),
};
</script>

<style>
.card {
  width: 90%;
  max-width: 600px;
  overflow-x: scroll;
}
</style>