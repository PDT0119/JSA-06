const container = document.getElementById("container")
const guest = {email: "danganhkhoi06@gmail.com", first_name: "Dang", last_name: "Khoi(Da co bo)" , avatar: "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-1/273552489_994257611181377_238792192076292197_n.jpg?stp=dst-jpg_p320x320&_nc_cat=105&ccb=1-5&_nc_sid=7206a8&_nc_ohc=UyicXc4eO3UAX-pTTgD&_nc_oc=AQnOBc25iysoLmRRasdCIYFyqOEmAegh56xEQR9v-fpP2OLJtZBUaHe-lOzcbTBjHdg&tn=FkhEpRe6J3lyaIyA&_nc_ht=scontent.fsgn5-9.fna&oh=00_AT8ynarVtGY5DboJRC4-216qzZ5eCdxzVtbQqpBOV4Do4Q&oe=6243AEAB"}
const getaData = (url) => {
    const request = fetch(url)
    // console.log(request)
    request.then((response) => {
        // console.log(response)
        return response.json()
    }).then((data) => {
        const users = data.data
        renderUser(users)
    }).catch((err) => {
        alert(err)
    })
}
getaData("https://reqres.in/api/users?page=2")
const renderUser = (users) => {
    let usersElement =""
    // console.log(users)
    users.push(guest)
    for (let i = 0; i< users.length; i++) {
        usersElement += usersGenerator(users[i])
        console.log(users[i])
    }
    container.insertAdjacentHTML("beforeend", usersElement)
}
function usersGenerator(a) {
    return `
<div class="flex flex-col content-center justify-between items">
    <img class = "${a.email === "danganhkhoi06@gmail.com" && "test"}" src="${a.avatar}" alt="">
    <p>${a.first_name} ${a.last_name}</p>
    <p>${a.email}</p>
</div>`
}
