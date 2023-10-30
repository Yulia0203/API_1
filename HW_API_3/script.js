window.addEventListener('load', function() {
    const accessKey = 'IpkvK_EnfsuESaBivHlqrTXjQh26IS3CCysS7bWATQc';
    const photoElement = document.getElementById('photo');
    const photographerNameElement = document.getElementById('photographer-name');
    const likeButton = document.getElementById('like-button');
    const likeCountElement = document.getElementById('like-count');
  
    // Функция для получения случайного изображения из Unsplash
    function getRandomPhoto() {
      fetch(`https://api.unsplash.com/photos/random/?client_id=${accessKey}`)
        .then(response => response.json())
        .then(data => {
          const photographerName = data.user.name;
          const photoUrl = data.urls.regular;
  
          photoElement.src = photoUrl;
          photographerNameElement.textContent = photographerName;
        })
        .catch(error => console.log(error));
    }
  
    // Вызываем функцию при загрузке страницы
    getRandomPhoto();
  
    // Обработчик события для кнопки "лайк"
    likeButton.addEventListener('click', function() {
      let likeCount = Number(likeCountElement.textContent);
      likeCount++;
      likeCountElement.textContent = likeCount.toString();
      // Сохраняем количество лайков в локальное хранилище
      localStorage.setItem('likeCount', likeCount.toString());
    });
  
    // Проверяем наличие сохраненного значения в локальном хранилище
    if (localStorage.getItem('likeCount')) {
      const savedLikeCount = parseInt(localStorage.getItem('likeCount'));
      likeCountElement.textContent = savedLikeCount.toString();
    }
  });