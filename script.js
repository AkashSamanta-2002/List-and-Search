const user = [
    {
        name : "Soumalya Santra",
        email : "soumalyasantra2002@gmail.com",
        image : "https://media.istockphoto.com/id/906808234/photo/handsome-man.jpg?s=612x612&w=0&k=20&c=Ec8IY-ETslaS56vmO77BJyEOpPM1hzJlLbs6xeKRoAc="
    },
    {
        name : "Ashoke Samanta",
        email : "ashokesamanta.snd@gmail.com",
        image : "https://t3.ftcdn.net/jpg/00/64/44/46/360_F_64444686_VW2695QVgibfTu0Hhxlg879nFQJq3ODO.jpg"
    },
    {
        name : "Sangeeta Chatterjee",
        email : "sangeeta@gmail.com",
        image : "https://www.mgfilmproductions.com/uploads/1/4/5/8/145812880/515640122_3.jpeg"
    },
    {
        name : "Rahul Sengupta",
        email : "senguptarahul@gmail.com",
        image : "https://static.vecteezy.com/system/resources/previews/039/190/252/non_2x/ai-generated-young-male-fashion-model-on-a-single-colored-background-photo.jpg"
    },
    {
        name : "Biki Banerjee",
        email : "bikibanerjeeofficial@gmail.com",
        image : "https://media.istockphoto.com/id/1201026026/photo/stylish-man-wearing-sunglasses-and-white-shirt-city-life.jpg?s=612x612&w=0&k=20&c=Lw3M3Eq3Cwwc7OqR4z3xVqEQvRBrGvQXbUDY8jB7eOE="
    },
    {
        name : "Akash Samanta",
        email : "akashsamanta427@gmail.com",
        image : "https://images.squarespace-cdn.com/content/v1/6204821bfe06b76898b431c5/80221678-0539-4495-8007-0096677e1eca/image00016.jpeg"
    },
]

let userContainer = document.querySelector('.userContainer');

const renderUser = (arr) =>{
    userContainer.innerHTML = '';
    arr.map((obj)=>{
        let {name, email, image} = obj;
        let ele = document.createElement('div');
        ele.className = "user";
        ele.innerHTML = `<div class="image">
                            <img src=${image}
                                alt="user" />
                        </div>
                        <div class="userDetails">
                            <div class="name">
                                <h3>${name}</h3>
                            </div>
                            <div class="email">
                                <p>${email}</p>
                            </div>
                        </div>
                    `;
        userContainer.append(ele);
    })
}

renderUser(user);

// Search Property
let searchInput = document.querySelector('#input');
const handleSearch = (e)=>{
    let inputValue = e.target.value;
    let filteredArr = user.filter((obj)=>{
        return (obj.name.toLowerCase().includes(inputValue.toLowerCase()) || obj.email.toLowerCase().includes(inputValue.toLowerCase()));
    })
    renderUser(filteredArr);   
}

searchInput.addEventListener('input',handleSearch);