import './App.css';
function Question_three() {
    const users = [
        {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
            address: {
                street: "Kulas Light",
                suite: "Apt. 556",
                city: "Gwenborough",
                zipcode: "92998-3874",
                geo: {
                    lat: "-37.3159",
                    lng: "81.1496"
                }
            },
            phone: "1-770-736-8031 x56442",
            website: "hildegard.org",
            company: {
                name: "Romaguera-Crona",
                catchPhrase: "Multi-layered client-server neural-net",
                bs: "harness real-time e-markets"
            }
        },
        {
            id: 2,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv",
            address: {
                street: "Victor Plains",
                suite: "Suite 879",
                city: "Wisokyburgh",
                zipcode: "90566-7771",
                geo: {
                    lat: "-43.9509",
                    lng: "-34.4618"
                }
            },
            phone: "010-692-6593 x09125",
            website: "anastasia.net",
            company: {
                name: "Deckow-Crist",
                catchPhrase: "Proactive didactic contingency",
                bs: "synergize scalable supply-chains"
            }
        },
        {
            id: 3,
            name: "Clementine Bauch",
            username: "Samantha",
            email: "Nathan@yesenia.net",
            address: {
                street: "Douglas Extension",
                suite: "Suite 847",
                city: "McKenziehaven",
                zipcode: "59590-4157",
                geo: {
                    lat: "-68.6102",
                    lng: "-47.0653"
                }
            },
            phone: "1-463-123-4447",
            website: "ramiro.info",
            company: {
                name: "Romaguera-Jacobson",
                catchPhrase: "Face to face bifurcated interface",
                bs: "e-enable strategic applications"
            }
        },

    ]
    const titleBody = [
        {
            userId: 1,
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            userId: 1,
            id: 2,
            title: "qui est essere pellat provident occaecati excepturi",
            body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
            userId: 1,
            id: 3,
            title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            body: "et iusto sed quo iure\nvolupta temullam et saepe reiciendis occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
            userId: 1,
            id: 4,
            title: "eum et est occaecati",
            body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        },]
    return (
        <>
            <div className='question-two'>Question#3</div>
            <div className='main'>
                <div className='card'>
                    <div className='name'>{users[0].name}</div>
                    <div className='email'>{users[0].email}</div>
                    <div className='titleAndBody'>Title:</div>
                    <div className='titleInnerText'>{titleBody[0].title}</div>
                    <div className='titleAndBody'>Body:</div>
                    <div className='titleInnerText'>{titleBody[0].body}</div>
                    <div className='contact'>Contact n.o: {users[0].phone}</div>
                </div>
                <div className='card'>
                    <div className='name'>{users[1].name}</div>
                    <div className='email'>{users[1].email}</div>
                    <div className='titleAndBody'>Title:</div>
                    <div className='titleInnerText'>{titleBody[1].title}</div>
                    <div className='titleAndBody'>Body:</div>
                    <div className='titleInnerText'>{titleBody[1].body}</div>
                    <div className='contact'>Contact n.o: {users[1].phone}</div>
                </div>
                <div className='card'>
                    <div className='name'>{users[2].name}</div>
                    <div className='email'>{users[2].email}</div>
                    <div className='titleAndBody'>Title:</div>
                    <div className='titleInnerText'>{titleBody[2].title}</div>
                    <div className='titleAndBody'>Body:</div>
                    <div className='titleInnerText'>{titleBody[2].body}</div>
                    <div className='contact'>Contact n.o: {users[2].phone}</div>
                </div>
            </div>
        </>
    )
}

export default Question_three;