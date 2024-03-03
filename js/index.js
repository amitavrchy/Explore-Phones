const loadData = async(searchText) => {
    let response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    let data = await response.json();
    displayData(data.data);
    console.log(data.data);
}

const displayData = (data) => {
    const phoneLayout = document.getElementById('phone-layout');
    phoneLayout.textContent = '';
    data.forEach(item => {
        console.log(item);
        let div = document.createElement('div');
        div.classList = 'card w-96 shadow-xl text-[#403F3F]';
        div.innerHTML = `
        <figure><img src="${item.image}" alt="${item.brand}" /></figure>
        <div class="card-body">
          <h2 class="card-title w-full justify-center font-bold">${item.phone_name}</h2>
          <p class="text-center">There are many variations of this phone are available. Visit to  see them.</p>
          <h2 class="card-title w-full justify-center font-bold">$999</h2>
          <div class="card-actions justify-center">
            <button class="btn btn-sm border-0 bg-[#0D6EFD] text-white">Buy Now</button>
          </div>
        </div>
        `;
        phoneLayout.appendChild(div);
    })
}

const searchPhone = () => {
    const searchText = document.getElementById('searchText').value.toLowerCase();
    loadData(searchText);
}
