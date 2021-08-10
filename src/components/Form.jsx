import React,{useState} from 'react'

const Form = () => {
    const [data, setData] = useState({
        fullname:"",
        phone:"",
        email:"",
        msg:""
    })
    const InputEvent = (e) =>{
        const {name, value} = e.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name] : value   
            }
            
        })
    }
    const formSubmit = (event) =>{
        event.preventDefault();
        

    }
    return (
        <>
           <form onSubmit={formSubmit}>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Full Name</label>
            <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            name="fullname"
            value={data.fullname}
            onChange={InputEvent}
            placeholder="Full Name"            
            required
            />
        </div>
        <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
            <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            name="phone"
            value={data.phone}
            onChange={InputEvent}
            placeholder="Phone Number"
            required
            />
        </div>
        <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Email</label>
            <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            name="email"
            value={data.email}
            onChange={InputEvent}
            placeholder="name@example.com"
            required
            />
        </div>
        
        <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="msg"
            value={data.msg}
            onChange={InputEvent}
            required
            ></textarea>
        </div>
        <div className="mb-3">
            <button className='btn btn-success'>Submit</button>
        </div>
        </form> 
        </>
    )
}

export default Form;
