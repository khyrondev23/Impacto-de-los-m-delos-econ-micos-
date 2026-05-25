```javascript
// SCROLL SUAVE ENTRE SECCIONES

function scrollToSection(id){

  const section = document.getElementById(id);

  section.scrollIntoView({
    behavior:"smooth"
  });

}

// CRUCIGRAMA

function verificarCrucigrama(){

  const respuestas = [

    {
      input:"p1",
      correcta:"CAPITALISMO"
    },

    {
      input:"p2",
      correcta:"FEUDALISMO"
    },

    {
      input:"p3",
      correcta:"MERCANTILISMO"
    },

    {
      input:"p4",
      correcta:"COMUNISMO"
    },

    {
      input:"p5",
      correcta:"NEOLIBERALISMO"
    },

    {
      input:"p6",
      correcta:"GLOBALIZACION"
    }

  ];

  let correctas = 0;

  respuestas.forEach(item => {

    const input = document.getElementById(item.input);

    const valor = input.value
      .toUpperCase()
      .trim();

    // VALIDAR RESPUESTA

    if(valor === item.correcta){

      correctas++;

      input.style.border =
      "2px solid #00ff88";

    }

    else{

      input.style.border =
      "2px solid red";

    }

  });

  const resultado =
  document.getElementById(
    "resultadoCrucigrama"
  );

  // RESULTADO FINAL

  if(correctas === 6){

    resultado.innerHTML =
    "🎉 ¡Perfecto! Todas las respuestas son correctas.";

    resultado.style.color =
    "#00ff88";

  }

  else{

    resultado.innerHTML =
    "✅ Respuestas correctas: "
    + correctas + " de 6";

    resultado.style.color =
    "#ffd700";

  }

}
```
