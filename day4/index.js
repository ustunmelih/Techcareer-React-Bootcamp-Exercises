// const ulElement = document.createElement('ul')
// ulElement.id = 'list'
// const bodyElement = document.querySelector('body')

// bodyElement.appendChild(ulElement)

// fetch('https://northwind.vercel.app/api/products')
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data)
//     data.forEach((item) => {
//       if (item.name.includes(' ')) {
//         const productName = item.name
//         ulElement.innerHTML += `<li style="color:red" >${productName}</li>`
//       } else {
//         const productName = item.name
//         ulElement.innerHTML += `<li>${productName}</li>`
//       }
//     })
//   })

// const addData = () => {
//   const companyName = document.querySelector('#companyName')?.value
//   const contactName = document.querySelector('#contactName')?.value
//   if (companyName && contactName) {
//     let object = {
//       companyName,
//       contactName,
//     }
//     const requestOptions = {
//       method: 'POST', // or 'PUT'
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(object),
//     }
//     fetch('https://northwind.vercel.app/api/suppliers', requestOptions)
//       .then((res) => res.json())
//       .then((data) => console.log(data))
//   } else {
//     console.log('required')
//   }
// }

// const btn = document.querySelector('button')
// btn.addEventListener('click', addData)

// const addData = () => {
//   const companyName = document.querySelector('#companyName')?.value
//   const contactTitle = document.querySelector('#contactTitle')?.value
//   if (companyName && contactTitle) {
//     let sendObject = {
//       companyName,
//       contactTitle,
//     }
//     const requestOptions = {
//       method: 'POST', // or 'PUT'
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(sendObject),
//     }
//     fetch('https://northwind.vercel.app/api/suppliers', requestOptions)
//       .then((res) => res.json())
//       .then((data) => console.log(data))
//   } else {
//     console.log('required')
//   }
// }

// const btn = document.querySelector('button')
// btn.addEventListener('click', addData)

let colors = [
  'red',
  'tomato',
  'brown',
  'yellow',
  'black',
  'gray',
  'orange',
  'purple',
]

let heights = ['400px', '3000px', '222px', '666px', '555px']
let widths = ['400px', '3000px', '222px', '666px', '555px']

setInterval(() => {
  const randomColor = Math.floor(Math.random() * 10)
  const randomheight = Math.floor(Math.random() * 10)
  const randomweight = Math.floor(Math.random() * 10)
  document.querySelector('.box').style.backgroundColor = colors[randomColor]
  document.querySelector('.box').style.height = heights[randomheight]
  document.querySelector('.box').style.width = widths[randomweight]
}, 500)
