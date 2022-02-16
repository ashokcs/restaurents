const userAction = async () => {
    const response = await fetch('https://private-4bb79-ashokchakravarthinagarajan.apiary-mock.com/restaurents/nearby');
    const myJson = await response.json();
    console.log(myJson);
  }