function trocarMapa(cidade) {
  let mapa = document.getElementById("mapa");
  let endereco = document.getElementById("endereco");
  let botoes = document.querySelectorAll(".loja-button");

  botoes.forEach((botao) => {
    botao.classList.remove("active");
  });

  document.getElementById(cidade).classList.add("active");

  if (cidade === "patos") {
    mapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1290.700831278257!2d-46.51472872953429!3d-18.585471488016417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ae8ad3071080b7%3A0x6a40af65d121f26b!2sP%C3%A1tio%20Central%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1729199963415!5m2!1spt-BR!2sbr";
    endereco.innerHTML =
      "<p>Endereço: Praça Alexina Cândida Conceição, 5 - Centro, Patos de Minas - MG, 38700-022</p>";
      
  } else if (cidade === "brasilia") {
    mapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124474.06622648844!2d-48.10029287336701!3d-15.84085229890913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3384b2380a29%3A0x2303da9639b4d631!2sLettera!5e0!3m2!1spt-BR!2sbr!4v1729200031213!5m2!1spt-BR!2sbr";
    endereco.innerHTML =
      "<p>Endereço: Centro, Av. das Araucárias, lote 1835 - Águas Claras, Brasília - DF, 71936-250</p>";

  } else if (cidade === "catalao") {
    mapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3790.8203418218104!2d-47.929345090293566!3d-18.17218828278357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a66719dc420325%3A0x5a474f3ad76aa9dd!2sLettera!5e0!3m2!1spt-BR!2sbr!4v1729200074742!5m2!1spt-BR!2sbr";
    endereco.innerHTML =
      "<p>Endereço: R. Juscelino Gomes Píres, 2300 - Nossa Senhora de Fátima, Catalão - GO, 75709-140</p>";

  } else if (cidade === "bh") {
    mapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7505.8527263445285!2d-43.95261580085271!3d-19.928115611808252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69712f576e19b%3A0xeeb16d1a0069c4a2!2sLeitura%20Diamond!5e0!3m2!1spt-BR!2sbr!4v1729200109226!5m2!1spt-BR!2sbr";
    endereco.innerHTML =
      "<p>Endereço: Av. Olegário Maciel, 1600, 3° piso, loja GD13, MG, 30180-915</p>";
  }
}
