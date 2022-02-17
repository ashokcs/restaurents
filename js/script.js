const findPizzaRestauents = async () => {
    var modal = document.querySelector(".modal");
    const response = await fetch('https://private-4bb79-ashokchakravarthinagarajan.apiary-mock.com/restaurents/pizza/nearby');
    const myJson = await response.json();
    console.log(myJson);

    for(let i=0; i<3; i++)
    {
        let restaurentName = myJson.restaurents[i].name;
        modal.style.display = "block";
        document.getElementById("modal_image"+ (i+1)).src = "./images/pizza_" + (i+1) +".jpeg";
        document.getElementById("textcontent"+ (i+1)).innerHTML = restaurentName;
    }

    var span = document.querySelector(".close");
    span.onclick = function() {
     modal.style.display = "none";
    }


  }

  const findChickenRestauents = async () => {
    var modal = document.querySelector(".modal");
    const response = await fetch('https://private-4bb79-ashokchakravarthinagarajan.apiary-mock.com/restaurents/chicken/nearby');
    const myJson = await response.json();
    console.log(myJson);

    for(let i=0; i<3; i++)
    {
        let restaurentName = myJson.restaurents[i].name;
        modal.style.display = "block";
        document.getElementById("modal_image"+ (i+1)).src = "./images/chicken_" + (i+1) +".jpeg";
        document.getElementById("textcontent"+ (i+1)).innerHTML = restaurentName;
    }

    var span = document.querySelector(".close");
    span.onclick = function() {
     modal.style.display = "none";
    }
  }

  const submitRest = async () => {
      var name = document.getElementById("restaurent").value;
    const response = await fetch('http://127.0.0.1:8080/', {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow', 
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify('{name:' + restaurent +'}') 
      });

      alert("Restaurent Added Successfully");
      return response.json(); 
  }