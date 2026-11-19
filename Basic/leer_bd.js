import bd from "./bd.json" with { type: "json" };

// for (const usuario of bd.usuarios) {
//     console.log(usuario.id, usuario.name);
// }


const contenedor = document.getElementById("usuarios");

contenedor.innerHTML = bd.usuarios.map(data => `
    <div>
      <ul>
        <li>
           ${data.id}
        </li>
        <li>
           ${data.name}
        </li>
      </ul>
    </div>
`).join("");