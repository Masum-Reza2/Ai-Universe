let allAi = async () => {
    let res = await fetch('https://openapi.programming-hero.com/api/ai/tools')
    let data = await res.json()
    let allData = data.data.tools

    showAllData(allData)
}

allAi()

let showAllData = (allData) => {
    let cardParent = document.getElementById('cardParent');

    allData.forEach(item => {
        let div = document.createElement('div');
        div.classList = 'card bg-base-100 shadow-xl border';
        div.innerHTML = `
        <figure class="px-3 pt-3">
                <img src="${item?.image}" alt="AI"
                class="rounded-xl" />
        </figure>
            <div class="card-body space-y-1">
                <h2 class="card-title">Features</h2>
                <p>1.${item?.features[0]}</p>
                <p>2.${item?.features[1]}</p>
                <p>3.${item?.features[2]}</p>

                <div class="border-t border-gray-400 w-full">

                    <div class="flex items-center justify-between mt-5">
                        <div>
                            <h1 class="card-title">${item.name}</h1>
                            <p>
                            <i class="fa-solid fa-suitcase text-gray-500"></i>
                            ${item.published_in}
                            </p>
                        </div>

                        <button class="btn btn-sm text-red-500">
                        <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>

                </div>
            </div>
        `
        cardParent.appendChild(div)
        console.log(item)
    });
}
