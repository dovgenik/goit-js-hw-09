const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];
  
  function createGalleryItem(arrayImgs) {
    const fragment = document.createDocumentFragment();
    const perentUl = document.querySelector(".gallery");
    // perentUl.innerHTML = "";
  
    for (const element of arrayImgs) {
      const {
        preview: smallImage,
        original: largeImage,
        description: imageDescription,
      } = element;
  
      //   створив li
      
    const liChaild = document.createElement("li");
    liChaild.classList.add("gallery-item");
    // liChaild.style.width = "360px";
    liChaild.style.maxWidth = "360px";
    // liChaild.style.height = "200px";
    liChaild.style.maxHeight = "200px";
    liChaild.style.overflow = "hidden";
    liChaild.style.transition = "transform 0.3s ease-in-out";

    const aChaild = document.createElement("a");
    aChaild.classList.add("gallery-link");
    aChaild.href = largeImage;

    const imgChaild = document.createElement("img");
    imgChaild.classList.add("gallery-image");
    imgChaild.src = smallImage;
    imgChaild.alt = imageDescription;
    imgChaild.style.maxWidth = "100%";
    imgChaild.style.objectFit = "cover";

    aChaild.appendChild(imgChaild);
    liChaild.appendChild(aChaild);
    fragment.appendChild(liChaild);
    }
  
    perentUl.appendChild(fragment);
  }
  
  createGalleryItem(images);

  document.querySelector(".gallery").addEventListener("mouseover", (event) => {
    const item = event.target.closest(".gallery-item");
    if (item) item.style.transform = "scale(1.1)";
  });
  document.querySelector(".gallery").addEventListener("mouseout", (event) => {
    const item = event.target.closest(".gallery-item");
    if (item) item.style.transform = "scale(1)";
  });
  
  import SimpleLightbox from "simplelightbox";
  import "simplelightbox/dist/simple-lightbox.min.css";

  const lightbox = new SimpleLightbox('.gallery a', {
      captions: true,
      captionsData: 'alt',
      captionDelay: 250,
      showCounter: false,
  });
  


  