// Token de acesso da API do Instagram Graph
const token = "IGQWRQNThJR2EzSU5rczlFR3FlckpxQzJhRDRBYUJ0Q0hGcEtja2w5UXJWQUxGMmNrLXpmLUZAFX0ZAKUU5JbGpBc25TSWZARc2xZAWU93bkJIUU5FWmN2c3pTdFd6Y2F6Uk96SUtaMDJMRDBjQ2VkZAXFCNHhVU2V3dWcZD";

// Função para buscar os dados do perfil e posts do Instagram
fetch(`https://graph.instagram.com/me?fields=id,username,media_count,account_type,profile_picture_url,followers_count,follows_count,biography&access_token=${token}`)
  .then(response => response.json())
  .then(profileData => {
    // Exibe os dados do perfil
    const profileContainer = document.getElementById('profile-info');
    profileContainer.innerHTML = `
    <div class="instagram">  
      <div class="row">
        <div class="col-12">
          <h1>${profileData.username}</h1>
        </div>
        <div class="col-12">
          <div class="row justify-content-center">
            <div class="col-4">
              <h5><strong>${profileData.media_count}</strong> Publicações</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;

    // Chamada para a API para buscar os posts
    return fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=${token}`);
  })
  .then(response => response.json())
  .then(postData => {
    const feedContainer = document.getElementById('instagram-feed');  // Div onde o feed será exibido
    let postCounter = 0;
    let rowElement;

    // Limita os posts para os 6 mais recentes
    const recentPosts = postData.data.slice(0, 6);

    // Itera sobre os posts recebidos
    recentPosts.forEach(post => {
      if (postCounter % 3 === 0) {
        rowElement = document.createElement('div');  // Cria uma nova linha a cada 3 posts
        rowElement.classList.add('row', 'align-items-start', 'mb-3');  // Adiciona margem inferior
        feedContainer.appendChild(rowElement);  // Adiciona a linha ao container
      }

      // Cria um novo elemento de div para cada postagem
      const postElement = document.createElement('div');
      postElement.classList.add('col-md-4', 'mb-3');  // Define como uma coluna no grid com margem inferior

      // Define o conteúdo HTML de cada postagem com a imagem e o link
      postElement.innerHTML = `
      <div style="box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.3); border-radius: 10px;">
        <a href="${post.permalink}" target="_blank">
          <img src="${post.media_url}" alt="${post.caption}" class="img-fluid rounded" style="width: 100%; height: auto; object-fit: cover;">
        </a>
      </div>
      `;

      // Adiciona a div da postagem à linha atual
      rowElement.appendChild(postElement);

      postCounter++;
    });
  })
  .catch(error => console.error('Erro ao buscar o feed do Instagram:', error));