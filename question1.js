import './App.css';
function Question_one() {
    const name = "Hello World";
    const obj = { name: "Hello World Object" }
    const data = ['We', 'are', 'United']
    const complex = [{ company: 'Editing Creation ', jobs: ['Javascript,', ' React'] },
    { company: 'Experion Techno', jobs: ['Angular Js,', ' Ionic'] }]
    const list = [{ name: complex[0].company }, { name: complex[1].company }]

    return (
        <div className='main-of-q1'>
            <div className='question-one'>Q1 : Write The Components.</div>
            <div>
                <h1 className='hello-world-hd'>{name}</h1>
                <h1 className='hello-world-hd2'>{obj.name}</h1>
                <div className='parent-of-ul'>
                <ul className='ul'>
                    <li>{data[0]}</li>
                    <li>{data[1]}</li>
                    <li>{data[2]}</li>
                </ul>
                </div>
            </div>
            <div>
                <div className='table'><span>company</span><span>jobs</span></div>
                <div className='table'><span>{list[0].name}</span><span>{complex[0].jobs}</span></div>
                <div className='table'><span>{list[1].name}</span><span>{complex[1].jobs}</span></div>
            </div>
        </div>
    );
}

export default Question_one;