import './App.css';
function Question_two() {
    return (
        <div>
            <div>
                <div className='question-two'>Q2) Briefly explain with an example what's the difference between
                    import Something from 'package' VS import 'Something' from 'package'
                </div>
                <div className='diffrent-between'>
                    <div className='question-two'>Import Something from 'package': This syntax is used to import a default export from 'package'.The default export is a single value or construct that <br/>
                    the Module consider its primary export.You can choose any name for the imported value.
                    </div>
                    <div className='question-two'>In React JavScript,both import Something from 'package' and import {'Somthng'} from 'package are used to import component or other construct from <br />
                        a JavaScript Module.However,there is a slight difference in how they handle name export.
                    </div>
                    <div className='question-two'>Import {'Somthng'} from 'package':This syntax is used to import a named export specifically named Something from 'package'.Named export allows you <br/> 
                    to export multiple values from a Module and import only the ones you need, using their exact names.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question_two;