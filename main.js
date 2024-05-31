let wrapper = document.querySelector('.wrapper')
let add_btn = document.querySelector('.add_btn')
let input_cost = document.querySelector('.input_cost')
let input_desc = document.querySelector('.input_desc')
let input_title = document.querySelector('.input_title')
let input_url = document.querySelector('.input_url')


let foods = [
    {
        id: 1,
        imgUrl: 'https://cp.ectn.uz/files//lavash_mini_13_05_wb.png',
        title: 'акция лаваш мини',
        descripton: 'акция лаваш мини',
        cost: '19 000'
    },
    {
        id: 2,
        imgUrl: 'https://cp.ectn.uz/files//lavash_standart_govajiy_22_01.png',
        title: 'акция лаваш',
        descripton: 'акция лаваш',
        cost: '32 000'
    },
    {
        id: 3,
        imgUrl: 'https://cp.ectn.uz/files//lavash_standart_kuriniy_22_01.png',
        title: 'акция лаваш',
        descripton: 'акция лаваш',
        cost: '30 000'
    },
    {
        id: 4,
        imgUrl: 'https://cp.ectn.uz/files//lavash_standart_govajiy_mini_22_01.png',
        title: 'акция лаваш',
        descripton: 'акция лаваш',
        cost: '55 000'
    },

]
const ReadCardFoods = () => {
    foods.map((v) => {
        let card = document.createElement('div')
        card.innerHTML = `<img src="${v.imgUrl}" class="card_img" alt=""> <h3>${v.title}</h3> <p>${v.descripton}</p> <p>${v.cost}</p>`
        wrapper.appendChild(card)
    })
}
ReadCardFoods()


add_btn.addEventListener('click', () => {
    const AddFoods = () => {
        wrapper.innerHTML = ''
        let obj = {
            id: foods.length + 1,
            imgUrl: input_url.value,
            title: input_title.value,
            descripton: input_desc.value,
            cost: input_cost.value
        }
        foods.push(obj)
        ReadCardFoods()
    }
    AddFoods()
    console.log(foods);
})

console.log(foods);
