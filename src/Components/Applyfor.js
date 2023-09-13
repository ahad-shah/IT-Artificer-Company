

const Applyfor =()=>{
    return(
        <form action="">
            <div className="form-group">
                <label htmlFor="">Name</label>
                <input type="text" className="form-control"  name="" id="" />
            </div>
            <div className="form-group">
                <label htmlFor="">Email</label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="">Number</label>
                <input  type="text" className="form-control"  />
            </div>
            <div className="form-group">
                <label htmlFor="">Message</label>
                <textarea name="" className="form-control"  id="" cols="10" rows="5"></textarea>
            </div>
            <div className="form-group">
                <button className="btn mt-2 form-control btn-primary">Send</button>
            </div>
        </form>

    )
}

export default Applyfor;