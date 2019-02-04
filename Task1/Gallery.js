class imageItem{
    constructor(classImage,src,alt){
        this.src=src;
        this.alt=alt;
        this.className=classImage;
    }
    render(){
        document.getElementById('gallery').innerHTML+=`<img src="${this.src}" alt="${this.alt}" class="${this.className}">`;
    }
}

//загрузка картинок
            fetch('gallery.json')
                .then(result => result.json())
                .then(data => {
                    data.forEach(item => {
                        console.log(item);
                        let newImage = new imageItem("small_image", item.src, item.alt);
                        newImage.render();
                    });
                })
                .catch(error => console.log(error));