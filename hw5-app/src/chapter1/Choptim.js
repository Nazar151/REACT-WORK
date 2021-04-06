import React, {useState, useEffect} from 'react'

const baseUrl = "https://jsonplaceholder.typicode.com"

const AVAILABLE_RESOURCES = [
    'posts',
    'comments',
    'albums',
    'photos',
    'todos',
    'users',
]




export const Choptim = () => {

    // const [endpoint, setEndPoint] = useState("")
    // const [id, setId] = useState("")

    const [endpointFields, setEndpointFields] = useState({
        endpoint: '',
        id: '',
    })

    const {endpoint, id} = endpointFields

    const [errorMessage, setErrorMessage] = useState('')


    const [items, setItems] = useState([])
    const [singleItem, setSingleItem] = useState(null)

    const onSubmit = () => {

        //перевір перший інпут чи в ньому валідне значення
        //перевір чи перший інпут не є пустим

        if(!endpoint) { return setErrorMessage('first input is required!!!')};

        if(!AVAILABLE_RESOURCES.includes(endpoint.trim().toLowerCase())) {
            return setErrorMessage('value is not valid try to use smth from this list: posts, comments, albums, photos, todos, users')}

        //перевір чи значееня є числовим
        //перевір чи значення в діапазоні 1-100

        const idToNum = Number(id)

        if(!idToNum  && id !== ""  && idToNum !== 0 ){
            return setErrorMessage('value for second input is not valid, pls use numeric value')
        }

        if((idToNum < 1 || idToNum > 100)  && id !==''){
            return setErrorMessage('value for second input is of range, pls use 1-100');
        }

        setErrorMessage('')
        fetchData()
    }





    const fetchData = async () => {
        const response = await fetch(`${baseUrl}/${endpoint.trim().toLowerCase()}/${id.trim()}`)
        const data = await response.json()

        if (id) {
            setSingleItem(data)
            setItems([])

            return
        }
        setSingleItem(null)
        setItems(data)
    }

    const onFieldUpdate = ({target: {name, value}}) => setEndpointFields({...endpointFields, [name]: value})


    return (
        <div>

            <br />
            <br />
            <input value={endpoint} onChange={onFieldUpdate} name="endpoint" type='type' placeholder='E.g posts, comments,todos etc'/>
            <br />
            <br />
            <input value={id} onChange={onFieldUpdate} name="id" type='type' placeholder='resource id, e.g 1,2,3'/>
            <br />
            <br />
            <button onClick={onSubmit}>fetch data</button>

            <hr/>
            <h2 style={{color: 'red'}}>{errorMessage}</h2>

            <div className='post'>
                <pre>
                {singleItem && JSON.stringify(singleItem, null, 2)}
                </pre>
            </div>

            <hr/>

            <div>
                {items.map(el => (<p>{el.id} - {el.title}</p>))}
            </div>

        </div>



    )
}