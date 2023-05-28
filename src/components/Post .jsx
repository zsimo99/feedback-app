import { useParams ,useNavigate,Routes,Route} from "react-router-dom"

function Post () {
    const params=useParams()
    // const status=404
    // if(status===404){
    //   return <Navigate to="notfound "/>
    // }

    const Navigate=useNavigate()
    const handleClick=()=>{
      console.log("hello")
      Navigate("/")
    }
  return (
    <div>
      <p>id:{params.id} </p>
          <button onClick={handleClick}>Say Hello</button>
          <Routes>
            <Route path="/test" element={<h1>test</h1>}/>
          </Routes>
      </div>
  )
}

export default Post 