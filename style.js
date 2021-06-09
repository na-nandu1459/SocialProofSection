async function getFromServer(){
        fetch('https://animechan.vercel.app/api/quotes/anime?title=naruto')
              .then(response => response.json())
              .then(quotes => {
                  function createCard(anime, quote){
                      let card = document.createElement('div')
                      card.className = "mainClass";
                      let  imageElemet = document.createElement('img')
                      imageElemet.className = "image";
                    imageElemet.src = "images/image-anne.jpg";
                      let title = document.createElement('h2')
                      title.innerText = anime;
                      let content = document.createElement('p')
                      content.innerText = quote
        
                        card.appendChild(imageElemet)
                        card.appendChild(title)
                        card.appendChild(content)
                        
                    return card;
                  }
                  quotes.map(quote => {
                     document.getElementById('main').appendChild(createCard(quote.anime, quote.quote))
                  })
                 
              })
        
        }
        getFromServer();
        
     let col1 = document.getElementById('right-col1')
     col1.innerText = "10,000+ of our users love our products.";
     console.log(col1);

     let col2 = document.getElementById('right-col2')
     col2.innerText = "We only provide great products combined with excellent customer service See what our satisfied customers are saying about our services.";
     console.log(col2);

    // let btn = document.getElementById('btn1')
    // col1.innerText = " Rated 5 Stars in Reviews";
    // console.log(btn);

    // let btn1 = document.getElementById('btn2');
    // col1.innerText = " Rated 5 Stars in Report Guru";
    // console.log(btn1);

    // let btn2 = document.getElementById('btn3')
    // col1.innerText = " Rated 5 Stars in BestTech";
    // console.log(btn2);

    