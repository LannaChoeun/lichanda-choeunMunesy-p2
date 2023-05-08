const pets = [
  {
    name: "Max",
    species: "Dog",
    breed: "Golden Retriever",
    age: 3,
    image: "./images/dog.jpeg",
    description: "Max is a lovable and friendly dog who enjoys long walks in the park."
  },
  {
    name: "Buddy",
    species: "Dog",
    breed: "Labrador Retriever",
    age: 2,
    image: "./images/lab.jpg",
    description: "Buddy is a playful and energetic dog who loves to play fetch."
  },
  {
    name: "Simba",
    species: "Cat",
    breed: "Persian",
    age: 5,
    image: "./images/cat1.jpg",
    description: "Simba is a regal and affectionate cat who enjoys cuddling."
  },
  {
    name: "Lola",
    species: "Dog",
    breed: "French Bulldog",
    age: 1,
    image: "./images/dog3.jpg",
    description: "Lola is a sweet and playful dog who loves to be around people."
  },
  {
    name: "Tiger",
    species: "Cat",
    breed: "Bengal",
    age: 4,
    image: "./images/cat2.jpg",
    description: "Tiger is a curious and adventurous cat who enjoys exploring."
  }
];


function displayAllPets() {
  const petsContainer = document.getElementById("pet-list-container");
  petsContainer.innerHTML = "";


  pets.forEach((pet) => {
    const card = document.createElement("div");
    card.classList.add("card");
   
    const img = document.createElement("img");
    img.src = pet.image;
    img.alt = pet.name;
    img.classList.add("card-img-top");
   
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
   
    const name = document.createElement("h5");
    name.classList.add("card-title");
    name.textContent = pet.name;
   
    const species = document.createElement("p");
    species.classList.add("card-text");
    species.textContent = `Species: ${pet.species}`;
   
    const breed = document.createElement("p");
    breed.classList.add("card-text");
    breed.textContent = `Breed: ${pet.breed}`;
   
    const age = document.createElement("p");
    age.classList.add("card-text");
    age.textContent = `Age: ${pet.age}`;
   
    const description = document.createElement("p");
    description.classList.add("card-text");
    description.textContent = pet.description;
   
    const adoptBtn = document.createElement("button");
    adoptBtn.classList.add("btn", "btn-primary");
    adoptBtn.textContent = "Adopt";
   
    cardBody.appendChild(name);
    cardBody.appendChild(species);
    cardBody.appendChild(breed);
    cardBody.appendChild(age);
    cardBody.appendChild(description);
    cardBody.appendChild(adoptBtn);
   
    card.appendChild(img);
    card.appendChild(cardBody);
   
    petsContainer.appendChild(card);
  });
  const petSelect = document.getElementById("pet-select");


  pets.forEach(pet => {
    const option = document.createElement("option");
    option.value = pet.name;
    option.text = `${pet.name} (${pet.species}) - ${pet.breed}`;
    petSelect.add(option);
  });
  function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById("name-input").value;
    const email = document.getElementById("email-input").value;
    const petSelect = document.getElementById("pet-select");
    const selectedPet = petSelect.options[petSelect.selectedIndex].value;
 
    // Show thank you message
    const message = `Thank you for adopting ${selectedPet}, ${name}!`;
    const messageDiv = document.createElement("div");
    messageDiv.textContent = message;
    messageDiv.classList.add("alert", "alert-success");
    const formSection = document.getElementById("adopt-form");
    formSection.parentNode.insertBefore(messageDiv, formSection.nextSibling);
 
    // Clear form inputs
    document.getElementById("name-input").value = "";
    document.getElementById("email-input").value = "";
    petSelect.selectedIndex = 0;
  }
  const form = document.querySelector('form');
form.addEventListener('submit', submitForm);

 






}








displayAllPets();

